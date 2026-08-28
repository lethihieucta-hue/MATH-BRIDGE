#!/usr/bin/env python3
import json, re, unicodedata, shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LIB = ROOT / 'src' / 'lib'
BANKS = [
    ('realSourceQuestionBank.ts', 'REAL_SOURCE_QUESTION_BANK'),
    ('sourceSupplementQuestionBank.ts', 'SOURCE_SUPPLEMENT_QUESTION_BANK'),
]

MATH_RE = re.compile(r'\$([^$]+)\$|\\\((.+?)\\\)|\\\[(.+?)\\\]', re.S)


def extract_math(s: str):
    out=[]
    for m in MATH_RE.finditer(s or ''):
        inner=next((g for g in m.groups() if g is not None), '')
        if inner.strip(): out.append(inner.strip())
    return out


def extract_math_candidates(s: str):
    """Math spans plus conservative bare-LaTeX expressions found in English fallback text."""
    out=list(extract_math(s))
    src=s or ''
    patterns=[
        r'\(([uSaAxyb])_n\)',
        r'(?<![A-Za-z0-9])(?:[uSaAxyb]_\{?\d+\}?|[uSaAxyb]_n)(?:\s*[+\-*/]\s*(?:[uSaAxyb]_\{?\d+\}?|[uSaAxyb]_n|\d+))*\s*=\s*-?\d+(?:\.\d+)?',
        r'(?<![A-Za-z0-9])[qd]\s*=\s*-?\d+(?:\.\d+)?',
        r'(?<![A-Za-z0-9])n\s*\\(?:ge|le)\s*\d+',
    ]
    for pat in patterns:
        for m in re.finditer(pat,src):
            val=m.group(0)
            if val not in out: out.append(val)
    return out

def latex_plain(s: str) -> str:
    s=s or ''
    s=s.replace('\\,','').replace('\\;','').replace('\\!','')
    # common structured commands
    for _ in range(8):
        old=s
        s=re.sub(r'\\(?:d?frac)\{([^{}]+)\}\{([^{}]+)\}', r'\1/\2', s)
        s=re.sub(r'\\sqrt\{([^{}]+)\}', r'sqrt\1', s)
        s=re.sub(r'\\binom\{([^{}]+)\}\{([^{}]+)\}', r'C\1\2', s)
        if s==old: break
    s=re.sub(r'\\(?:vec|overrightarrow)\s*0', '0', s)
    s=re.sub(r'\\(?:vec|overrightarrow)\s*\{?([A-Za-z]+)\}?', r'\1', s)
    reps={
        '\\ge':'>=', '\\le':'<=', '\\ne':'!=', '\\in':'in', '\\notin':'notin',
        '\\cdot':'*', '\\times':'*', '\\pm':'+-', '\\ldots':'...', '\\dots':'...',
        '\\infty':'inf', '\\pi':'pi', '\\circ':'deg', '\\prime':"'",
        '\\alpha':'alpha', '\\beta':'beta', '\\gamma':'gamma', '\\Delta':'Delta',
        '\\cap':'cap', '\\cup':'cup', '\\perp':'perp', '\\parallel':'parallel',
        '\\Leftrightarrow':'<=>', '\\Rightarrow':'=>',
    }
    for a,b in reps.items(): s=s.replace(a,b)
    s=re.sub(r'\\text\{([^{}]+)\}', r'\1', s)
    s=s.replace('\\mathbb','').replace('\\left','').replace('\\right','')
    s=s.replace('\\','')
    s=s.replace('_','').replace('{','').replace('}','')
    return s


def norm_formula(s: str) -> str:
    s=latex_plain(s)
    s=unicodedata.normalize('NFKD',s)
    s=''.join(c for c in s if not unicodedata.combining(c))
    s=s.lower().replace('^','')
    # normalize decimal comma only implicitly by dropping punctuation
    return ''.join(c for c in s if c.isalnum() or c in '=+-*/<>!')


def norm_with_map(s: str):
    out=[]; pos=[]
    # normalize each original character independently; this intentionally ignores spaces/punctuation.
    for i,ch in enumerate(s):
        if ch in '^_{}[](),;:$\\':
            continue
        decomp=unicodedata.normalize('NFKD',ch)
        for c in decomp:
            if unicodedata.combining(c): continue
            c=c.lower()
            if c.isalnum() or c in '=+-*/<>!':
                out.append(c); pos.append(i)
    return ''.join(out), pos


def safe_segment(seg: str) -> bool:
    n=norm_formula(seg)
    if len(n)<3: return False
    # short pure letters are too dangerous inside Vietnamese prose
    if len(n)<5 and not any(c.isdigit() or c in '=+-*/<>!' for c in n): return False
    return True


def replace_matching_math_segments(vi: str, en: str):
    segs=extract_math_candidates(en)
    replacements=[]
    nv, mp = norm_with_map(vi)
    occupied=[]
    # longest/safest first
    candidates=[]
    for seg in segs:
        if not safe_segment(seg): continue
        ns=norm_formula(seg)
        if not ns: continue
        norms=[ns]
        if 'sqrt' in ns: norms.append(ns.replace('sqrt',''))
        if ('\\vec' in seg or '\\overrightarrow' in seg) and '=' in ns: norms.append(ns.replace('=',''))
        for nalt in dict.fromkeys(norms):
            if len(nalt)>=3: candidates.append((len(nalt),nalt,seg))
    for _,ns,seg in sorted(candidates, reverse=True):
        idx=nv.find(ns)
        if idx<0: continue
        s=mp[idx]; e=mp[idx+len(ns)-1]+1
        # don't replace if this is already inside a math span
        if vi[:s].count('$')%2==1: continue
        if any(not (e<=a or s>=b) for a,b in occupied): continue
        # expand harmless surrounding parentheses/spaces for sequence expressions
        while s>0 and vi[s-1] in ' (': s-=1
        while e<len(vi) and vi[e] in ' )': e+=1
        replacements.append((s,e,f'${seg}$'))
        occupied.append((s,e))
    for s,e,r in sorted(replacements, reverse=True):
        vi=vi[:s]+r+vi[e:]
    return vi, len(replacements)


def apply_outside_math(text: str, fn):
    parts=re.split(r'(\$[^$]*\$)', text)
    for i in range(0,len(parts),2):
        parts[i]=fn(parts[i])
    return ''.join(parts)


def sequence_token_cleanup(text: str, en: str):
    en_math=' '.join(extract_math_candidates(en))+' '+en
    symbols=set(re.findall(r'\b([uSaAxyb])_\{?n\}?\b', en_math))
    symbols.update(re.findall(r'\(([uSaAxyb])_n\)', en_math))
    symbols.update(re.findall(r'\b([uSaAxyb])_\{?\d+\}?', en_math))
    if not symbols: return text

    # Phase 1: parenthesized sequence notation only.
    def phase1(prose):
        for sym in symbols:
            prose=re.sub(rf'[\(\{{]\s*{re.escape(sym)}\s*_?\s*n\s*[\)\}}]', f'$({sym}_n)$', prose, flags=re.I)
        return prose
    text=apply_outside_math(text, phase1)

    # Phase 2: indexed/general terms after re-splitting on the new math spans.
    def phase2(prose):
        for sym in symbols:
            indices=set(re.findall(rf'{re.escape(sym)}_\{{?(\d+)\}}?', en_math))
            for idx in sorted(indices, key=len, reverse=True):
                prose=re.sub(rf'(?<![A-Za-z0-9_]){re.escape(sym)}\s*_?\s*{idx}(?!\d)', f'${sym}_{{{idx}}}$', prose)
            if re.search(rf'{re.escape(sym)}_n\b', en_math):
                prose=re.sub(rf'(?<![A-Za-z0-9_]){re.escape(sym)}\s*_?\s*n(?![A-Za-z0-9_])', f'${sym}_n$', prose)
        return prose
    return apply_outside_math(text, phase2)

def exponent_cleanup(text: str, en: str):
    en_math=' '.join(extract_math_candidates(en))+' '+en
    powers=set(re.findall(r'\b([A-Za-z])\s*\^\s*\{?(\d+)\}?', en_math))
    if not powers: return text
    def clean(prose):
        for var,pow_ in powers:
            # x^2 or OCR x 2; require math-like local context by exact English power presence
            prose=re.sub(rf'(?<![A-Za-z]){re.escape(var)}\s*\^?\s*{pow_}(?!\d)', f'${var}^{pow_}$', prose)
        return prose
    return apply_outside_math(text, clean)


def simple_param_cleanup(text: str, en: str):
    # q=3, d=-2, k=..., t=... etc. Only values explicitly present in English math.
    en_math=' '.join(extract_math_candidates(en))+' '+en
    pairs=re.findall(r'(?<![A-Za-z])([dqkmnt])\s*=\s*(-?\d+(?:[.,]\d+)?)', latex_plain(en_math))
    def clean(prose):
        for var,val in pairs:
            valre=re.escape(val).replace(r'\.', r'[\.,]')
            prose=re.sub(rf'(?<![A-Za-z0-9]){var}\s*=\s*{valre}(?!\d)', f'${var}={val}$', prose)
        return prose
    return apply_outside_math(text, clean)


def assignment_fallback(text: str, en: str):
    """For an OCR-destroyed assignment such as a_n = ... or c(t)=..., replace the broken RHS directly.
    This is deliberately conservative and only fires when the English contains a clear assignment and
    the Vietnamese still has the same LHS outside math but no matching formula was inserted.
    """
    if not en: return text
    segs=extract_math(en)
    for seg in segs:
        if '=' not in seg: continue
        lhs=seg.split('=',1)[0].strip()
        lp=latex_plain(lhs)
        # supported lhs forms: a_n/u_n/S_n/x_n, f(x), c(t), P(t), y
        m=re.fullmatch(r'([uSaAxyb])n', re.sub(r'[^A-Za-z0-9]','',lp))
        if m:
            sym=m.group(1)
            pat=rf'(?<![A-Za-z0-9]){sym}\s*_?\s*n\s*='
        else:
            mf=re.fullmatch(r'([A-Za-z])\(([A-Za-z])\)', lp.replace(' ',''))
            if mf:
                pat=rf'(?<![A-Za-z0-9]){mf.group(1)}\s*\(\s*{mf.group(2)}\s*\)\s*='
            elif re.fullmatch(r'[A-Za-z]',lp):
                pat=rf'(?<![A-Za-z0-9]){re.escape(lp)}\s*='
            else:
                continue
        # only outside existing $...$
        parts=re.split(r'(\$[^$]*\$)', text)
        for i in range(0,len(parts),2):
            prose=parts[i]
            mm=re.search(pat,prose)
            if not mm: continue
            start=mm.start()
            # preserve unit if present; otherwise terminate before a sentence/cue.
            rest=prose[mm.end():]
            unit=re.search(r'\(\s*(?:mg\s*/?\s*L|cm|m|km|USD|VND)[^)]*\)',rest,re.I)
            if unit and unit.start()<60:
                end=mm.end()+unit.start()
            else:
                cues=[]
                for cue in [r'\s+trong\s+đó\b',r'\s+với\b',r'\s+Tìm\b',r'\s+Xét\b',r'\s+Hỏi\b',r'\s+Sau\b',r'\s+Khi\b']:
                    cm=re.search(cue,rest)
                    if cm: cues.append(cm.start())
                # sentence dot followed by whitespace+letter
                dm=re.search(r'\.\s+(?=[A-ZÀ-Ỹ])',rest)
                if dm: cues.append(dm.start())
                end=mm.end()+(min(cues) if cues else min(len(rest),120))
            candidate=prose[start:end]
            # require visible OCR damage or absence of any $ formula for this assignment
            if len(candidate)>180: continue
            prose=prose[:start]+f'${seg}$'+prose[end:]
            parts[i]=prose
            break
        text=''.join(parts)
    return text


def raw_relation_cleanup(text: str, en: str) -> str:
    # Relations explicitly present in English, including bare LaTeX such as n\ge 2.
    candidates=[]
    for seg in extract_math(en):
        if re.search(r'\\(?:le|ge|in)',seg): candidates.append(seg)
    candidates += re.findall(r'(?<![A-Za-z0-9])(?:\d+\s*)?[A-Za-z]?\s*\\(?:le|ge)\s*[A-Za-z0-9]+(?:\s*\\(?:le|ge)\s*\d+)?', en or '')
    for seg in dict.fromkeys(x.strip() for x in candidates if x.strip()):
        if '\\in' in seg and '\\mathbb' in seg:
            var=re.match(r'\s*([A-Za-z])',seg)
            if var:
                text=apply_outside_math(text, lambda p, seg=seg, var=var: re.sub(rf'(?<![A-Za-z0-9]){var.group(1)}\s*\\in\s*\*', lambda _m: f'${seg}$', p))
            continue
        mrel=re.fullmatch(r'\s*([A-Za-z0-9]+)\s*\\(le|ge)\s*([A-Za-z0-9]+)(?:\s*\\(le|ge)\s*(\d+))?\s*',seg)
        if not mrel: continue
        a,op,b,op2,c=mrel.groups()
        p1=rf'{re.escape(a)}\s*\\{op}\s*{re.escape(b)}'
        if op2 and c: p1+=rf'\s*\\{op2}\s*{re.escape(c)}'
        text=apply_outside_math(text, lambda p, seg=seg, p1=p1: re.sub(p1, lambda _m: f'${seg}$', p))
    return text

def vector_mention_cleanup(text: str, en: str) -> str:
    en_vectors=set()
    for seg in extract_math(en):
        en_vectors.update(re.findall(r'\\(?:vec|overrightarrow)\s*\{?([A-Za-z]+)\}?',seg))
    if not en_vectors: return text
    def clean(prose):
        # pair wording: "hai vectơ a và b"
        names=sorted(en_vectors,key=len,reverse=True)
        if len(names)>=2:
            for a in names:
                for b in names:
                    if a==b: continue
                    prose=re.sub(rf'((?:hai\s+)?(?:v[ée]c[- ]?tơ|vector|vec)\s+){re.escape(a)}\s+và\s+{re.escape(b)}\b', lambda m,a=a,b=b: m.group(1)+f'$\\vec{{{a}}}$ và $\\vec{{{b}}}$', prose, flags=re.I)
        for name in names:
            prose=re.sub(rf'((?:v[ée]c[- ]?tơ|vector|vec)\s+){re.escape(name)}\b', lambda m,name=name: m.group(1)+f'$\\vec{{{name}}}$', prose, flags=re.I)
        return prose
    text=apply_outside_math(text,clean)
    # If the first vector was already formatted, format a paired plain vector after 'và'.
    for name in sorted(en_vectors,key=len,reverse=True):
        text=re.sub(rf'(\$\\vec\{{?[A-Za-z]+\}}?\$\s+và\s+){re.escape(name)}\b', lambda m,name=name: m.group(1)+f'$\\vec{{{name}}}$', text, flags=re.I)
    # coordinate assignments that OCR wrote as 'vectơ u (1;2;3)' without '='
    for seg in extract_math(en):
        mc=re.fullmatch(r'\\vec\s*\{?([A-Za-z]+)\}?\s*=\s*(\([^)]*\))',seg.strip())
        if mc:
            name=mc.group(1)
            text=re.sub(rf'(?:\$\\vec\{{?{re.escape(name)}\}}?\$|\b{re.escape(name)}\b)\s*\([^)]{{1,60}}\)', lambda _m,seg=seg: f'${seg}$', text, count=1)
    # dot products that OCR flattened to a.b / a b after "Tính" or before "bằng"
    for seg in extract_math(en):
        mdot=re.fullmatch(r'\\vec\s*\{?([A-Za-z]+)\}?\\cdot\\vec\s*\{?([A-Za-z]+)\}?',seg.replace(' ',''))
        if mdot:
            a,b=mdot.groups()
            def dotclean(p):
                p=re.sub(rf'\b{re.escape(a)}\s*[.·]\s*{re.escape(b)}\b', lambda _m, seg=seg: f'${seg}$', p)
                p=re.sub(rf'(Tính\s+){re.escape(a)}\s+{re.escape(b)}(?=[\s.,;:?]|$)', lambda m, seg=seg: m.group(1)+f'${seg}$', p, flags=re.I)
                return p
            text=apply_outside_math(text,dotclean)
    return text


def angle_cleanup(text: str, en: str) -> str:
    if 'góc' not in text.lower(): return text
    angles=re.findall(r'\$\s*(\d{1,3})\s*\^\\circ\s*\$',en or '')
    for deg in angles:
        # OCR commonly turns 60° into 600; only do this inside angle questions.
        text=apply_outside_math(text, lambda p: re.sub(rf'\b{re.escape(deg)}0\b', lambda _m, deg=deg: f'${deg}^\\circ$', p, count=1))
    return text


def inject_missing_query_target(text: str, en: str) -> str:
    maths=extract_math(en)
    if not maths: return text
    # Prefer the last displayed math item in English, because "Find <math>" is usually sentence-final.
    target=maths[-1]
    nt=norm_formula(target)
    if nt and nt in norm_formula(text): return text
    if re.search(r'(?:Tính\s+tỉ\s+số|Hãy\s+tính|Tính)\s*[.?:]*\s*$', text, re.I):
        text=re.sub(r'(Tính\s+tỉ\s+số)\s*[.?:]*\s*$', lambda m, target=target: m.group(1)+f' ${target}$.', text, flags=re.I)
        text=re.sub(r'(Hãy\s+tính|Tính)\s*[.?:]*\s*$', lambda m, target=target: m.group(1)+f' ${target}$.', text, flags=re.I)
    return text

def dangling_membership_cleanup(text: str, en: str) -> str:
    # Restore a known domain from English; otherwise remove an OCR-only dangling "(x \in )" fragment.
    for seg in extract_math(en):
        if '\\in' in seg:
            # multi-variable membership, e.g. a,b,c\in\mathbb R
            vars_=re.match(r'\s*([A-Za-z](?:\s*,\s*[A-Za-z])*)\s*\\in',seg)
            if vars_:
                rawvars=vars_.group(1)
                names=[x.strip() for x in rawvars.split(',')]
                pat=r'\(\s*'+r'\s*,\s*'.join(map(re.escape,names))+r'\s*\\in\s*\)'
                text=apply_outside_math(text, lambda p, pat=pat, seg=seg: re.sub(pat, lambda _m: f'${seg}$', p))
    # axis membership is semantically explicit even if English paraphrases it
    if re.search(r'\by-axis\b',en or '',re.I):
        text=apply_outside_math(text, lambda p: re.sub(r'\bD\s*\\in\s*Oy\b', r'$D\\in Oy$', p))
    # remove dangling OCR membership if English contains no set-membership statement
    if '\\in' not in (en or ''):
        text=apply_outside_math(text, lambda p: re.sub(r'\s*\(\s*[A-Za-z]\s*\\in\s*\)', '', p))
    return text


def repair_odd_math(text: str) -> str:
    if text.count('$') % 2 == 0: return text
    last=text.rfind('$')
    tail=text[last+1:]
    # only repair if the unmatched tail is math-only, never if it contains Vietnamese prose
    if re.fullmatch(r'\s*\\(?:dfrac|frac|vec|overrightarrow|sqrt)[A-Za-z0-9_{}\\+\-*/^.() ]*\.\s*', tail):
        dot=text.rfind('.')
        if dot>last: return text[:dot]+'$'+text[dot:]
    return text

def remove_orphan_math_lines(text: str, en: str) -> str:
    if not extract_math(en): return text
    lines=text.splitlines()
    kept=[]
    for line in lines:
        s=line.strip()
        if s and len(s)<=32 and re.fullmatch(r'[A-Za-z0-9+\-*/^=(){}\[\].,;\\ ]+', s):
            n=norm_formula(s)
            # OCR fragments from fractions/vectors are typically tiny standalone math-only lines.
            if 1 <= len(n) <= 14:
                continue
        kept.append(line)
    return '\n'.join(kept)


def space_math_boundaries(text: str) -> str:
    parts=re.split(r'(\$[^$]*\$)', text)
    # normalize math interiors first
    for i in range(1,len(parts),2):
        parts[i]='$'+parts[i][1:-1].strip()+'$'
    # normalize only the prose-side boundaries, never scan across closing/opening dollars
    for i in range(0,len(parts),2):
        prose=parts[i]
        if i>0 and prose and re.match(r'^[0-9A-Za-zÀ-ỹ]', prose):
            prose=' '+prose
        if i+1<len(parts) and prose and re.search(r'[0-9A-Za-zÀ-ỹ]$', prose):
            prose=prose+' '
        parts[i]=prose
    text=''.join(parts)
    text=re.sub(r'[ \t]+([,.;:!?])', r'\1', text)
    text=re.sub(r'([,.;:!?])(?=[0-9A-Za-zÀ-ỹ$])', r'\1 ', text)
    text=re.sub(r'\(\s*mg\s*/\s*L\s*\)', 'mg/L', text, flags=re.I)
    text=re.sub(r'\(\s*m\s*/\s*s\s*2\s*\)', r'm/s$^2$', text, flags=re.I)
    return text

def remove_inline_ocr_prefix(text: str) -> str:
    # After replacing a destroyed fraction, OCR may leave a detached numerator before the formula.
    text=re.sub(r'(công thức\s*[:]?\s*)\d{1,4}\s+(?=\$[A-Za-z][^$]*=)', r'\1', text, flags=re.I)
    return text

def sync_text(vi: str, en: str):
    if not vi or not en: return vi,0
    original=vi
    vi,nmatch=replace_matching_math_segments(vi,en)
    # Replace a destroyed whole assignment before doing smaller token-level repairs.
    vi=assignment_fallback(vi,en)
    vi=raw_relation_cleanup(vi,en)
    vi=dangling_membership_cleanup(vi,en)
    vi=vector_mention_cleanup(vi,en)
    vi=angle_cleanup(vi,en)
    vi=inject_missing_query_target(vi,en)
    vi=remove_orphan_math_lines(vi,en)
    vi=sequence_token_cleanup(vi,en)
    vi=exponent_cleanup(vi,en)
    vi=simple_param_cleanup(vi,en)
    vi=remove_inline_ocr_prefix(vi)
    vi=repair_odd_math(vi)
    vi=space_math_boundaries(vi)
    vi=re.sub(r'[ \t]+',' ',vi)
    vi=re.sub(r'\n[ \t]+','\n',vi).strip()
    return vi, (1 if vi!=original else 0)

def mostly_math(s: str) -> bool:
    if not s: return False
    stripped=MATH_RE.sub('',s)
    stripped=re.sub(r'[\s,;:.()\[\]{}=+\-*/<>]+','',stripped)
    return len(stripped)<=2 and bool(extract_math(s))


def load_bank(path: Path, var: str):
    text=path.read_text(encoding='utf-8')
    marker=f'export const {var}: Question[] = '
    s=text.index(marker)+len(marker); e=text.rfind('];')+1
    return text[:s], json.loads(text[s:e]), text[e:]


def save_bank(path: Path, prefix: str, arr, suffix: str):
    data=json.dumps(arr,ensure_ascii=False,indent=2)
    path.write_text(prefix+data+suffix,encoding='utf-8')


KNOWN_QUESTION_REPAIRS = {
  'src-pnl-5f75dcb0fd2780': 'Giả sử hàm cầu của một sản phẩm độc quyền được cho bởi $P=400-2Q$ và hàm chi phí trung bình $C=0.2Q+4+\\dfrac{400}{Q}$, trong đó $Q$ là số đơn vị sản phẩm ($P$ và $C$ được tính bằng USD trên mỗi đơn vị sản phẩm).',
  'src-sup-prob-90a0490fd014': 'Trong không gian $Oxyz$, cho hai mặt phẳng $(P)$ và $(Q)$ lần lượt có hai vectơ pháp tuyến $\\vec n_P$ và $\\vec n_Q$. Biết góc giữa $\\vec n_P$ và $\\vec n_Q$ bằng $120^\\circ$. Góc giữa hai mặt phẳng $(P)$ và $(Q)$ bằng',
  'src-sup-prob-f9facd63f616': 'Trong không gian $Oxyz$, cho điểm $A(2,0,1)$ và hai vectơ $\\vec u=(1,-3,2)$, $\\vec v=(-1,-1,2)$. Mặt phẳng $(Q)$ chứa điểm $A$ và nhận $\\vec u,\\vec v$ làm hai vectơ chỉ phương, có phương trình $ax+by+cz-3=0$. Tính $a+b+c$.',
}

def main():
    stats={'questions_changed':0,'options_changed':0,'solutions_changed':0}
    audit=[]
    for fn,var in BANKS:
        path=LIB/fn
        prefix,arr,suffix=load_bank(path,var)
        bak=path.with_suffix(path.suffix+'.pre-math-sync.bak')
        if not bak.exists(): shutil.copy2(path,bak)
        for q in arr:
            if q.get('id') in KNOWN_QUESTION_REPAIRS:
                q['question_vi']=KNOWN_QUESTION_REPAIRS[q['id']]
            before=q.get('question_vi','')
            after,changed=sync_text(before,q.get('question_en',''))
            if changed:
                q['question_vi']=after; stats['questions_changed']+=1
                audit.append((q['id'],q['type_id'],'QUESTION',before,after))
            sb=q.get('solution_vi','')
            sa,sch=sync_text(sb,q.get('solution_en',''))
            if sch:
                q['solution_vi']=sa; stats['solutions_changed']+=1
            for o in q.get('options') or []:
                ov=o.get('content_vi',''); oe=o.get('content_en','')
                if mostly_math(oe):
                    oa=oe
                else:
                    oa,_=sync_text(ov,oe)
                if oa!=ov:
                    o['content_vi']=oa; stats['options_changed']+=1
        save_bank(path,prefix,arr,suffix)
    # audit TSV
    out=ROOT/'MATH_SYNC_DIRECT_AUDIT.tsv'
    with out.open('w',encoding='utf-8') as f:
        f.write('id\ttype_id\tfield\tbefore\tafter\n')
        for row in audit:
            f.write('\t'.join(x.replace('\t',' ').replace('\n','\\n') for x in row)+'\n')
    print(json.dumps(stats,ensure_ascii=False))
    print('audit',out)

if __name__=='__main__': main()
