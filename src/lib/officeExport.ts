import katex from 'katex';

const MATH_TOKEN_REGEX = /(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$|\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\))/g;

export const escapeOfficeXml = (value: string): string => (value || '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

const ommlRun = (value: string): string => {
  const cleaned = value.replace(/[\u2061\u2062\u2063\u2064]/g, '');
  return cleaned ? `<m:r><m:t xml:space="preserve">${escapeOfficeXml(cleaned)}</m:t></m:r>` : '';
};

const mathMlNodeToOmml = (node: Element): string => {
  const children = Array.from(node.children) as Element[];
  const child = (index: number) => children[index] ? mathMlNodeToOmml(children[index]) : '';
  const all = () => children
    .filter((item) => !['annotation', 'annotation-xml'].includes(item.localName.toLowerCase()))
    .map(mathMlNodeToOmml)
    .join('');
  const tag = node.localName.toLowerCase();

  if (['annotation', 'annotation-xml', 'mphantom'].includes(tag)) return '';
  if (['math', 'semantics', 'mrow', 'mstyle', 'mpadded', 'menclose'].includes(tag)) return all();
  if (['mi', 'mn', 'mo', 'mtext', 'ms'].includes(tag)) return ommlRun(node.textContent || '');
  if (tag === 'mspace') return ommlRun(' ');
  if (tag === 'mfrac') return `<m:f><m:num>${child(0)}</m:num><m:den>${child(1)}</m:den></m:f>`;
  if (tag === 'msqrt') return `<m:rad><m:radPr><m:degHide m:val="1"/></m:radPr><m:deg/><m:e>${all()}</m:e></m:rad>`;
  if (tag === 'mroot') return `<m:rad><m:radPr/><m:deg>${child(1)}</m:deg><m:e>${child(0)}</m:e></m:rad>`;
  if (tag === 'msup') return `<m:sSup><m:e>${child(0)}</m:e><m:sup>${child(1)}</m:sup></m:sSup>`;
  if (tag === 'msub') return `<m:sSub><m:e>${child(0)}</m:e><m:sub>${child(1)}</m:sub></m:sSub>`;
  if (tag === 'msubsup' || tag === 'munderover') return `<m:sSubSup><m:e>${child(0)}</m:e><m:sub>${child(1)}</m:sub><m:sup>${child(2)}</m:sup></m:sSubSup>`;
  if (tag === 'mover') {
    const accent = (children[1]?.textContent || '').trim();
    if (/^[→←↔^~¯ˉ‾¨˙]$/.test(accent)) {
      return `<m:acc><m:accPr><m:chr m:val="${escapeOfficeXml(accent)}"/></m:accPr><m:e>${child(0)}</m:e></m:acc>`;
    }
    return `<m:limUpp><m:e>${child(0)}</m:e><m:lim>${child(1)}</m:lim></m:limUpp>`;
  }
  if (tag === 'munder') return `<m:limLow><m:e>${child(0)}</m:e><m:lim>${child(1)}</m:lim></m:limLow>`;
  if (tag === 'mfenced') {
    const open = node.getAttribute('open') || '(';
    const close = node.getAttribute('close') || ')';
    return `<m:d><m:dPr><m:begChr m:val="${escapeOfficeXml(open)}"/><m:endChr m:val="${escapeOfficeXml(close)}"/></m:dPr><m:e>${all()}</m:e></m:d>`;
  }
  if (tag === 'mtable') {
    const rows = children.map((row) => {
      const cells = Array.from(row.children) as Element[];
      return `<m:mr>${cells.map((cell) => `<m:e>${mathMlNodeToOmml(cell)}</m:e>`).join('')}</m:mr>`;
    }).join('');
    return `<m:m><m:mPr/>${rows || '<m:mr><m:e/></m:mr>'}</m:m>`;
  }
  if (tag === 'mtr' || tag === 'mlabeledtr') return children.map((cell) => `<m:e>${mathMlNodeToOmml(cell)}</m:e>`).join('');
  if (tag === 'mtd') return all();
  return children.length ? all() : ommlRun(node.textContent || '');
};

const latexToOmml = (latex: string): string | null => {
  try {
    const cleaned = latex.trim().replace(/(?<!\\)\\\\([a-zA-Z]+)/g, '\\$1');
    const mathMl = katex.renderToString(cleaned, { displayMode: false, output: 'mathml', throwOnError: true, strict: 'ignore' });
    const parsed = new DOMParser().parseFromString(mathMl, 'text/html');
    const math = parsed.querySelector('math');
    return math ? mathMlNodeToOmml(math) || null : null;
  } catch {
    return null;
  }
};

export const wordTextRun = (
  value: string,
  options: { bold?: boolean; italic?: boolean; color?: string; font?: string } = {}
): string => {
  if (!value) return '';
  const properties = [
    options.bold ? '<w:b/>' : '',
    options.italic ? '<w:i/>' : '',
    options.color ? `<w:color w:val="${options.color}"/>` : '',
    options.font ? `<w:rFonts w:ascii="${escapeOfficeXml(options.font)}" w:hAnsi="${escapeOfficeXml(options.font)}"/>` : '',
  ].join('');
  return `<w:r>${properties ? `<w:rPr>${properties}</w:rPr>` : ''}<w:t xml:space="preserve">${escapeOfficeXml(value)}</w:t></w:r>`;
};

/** MathType-ready Word content: native Office Equation with the original LaTeX retained on failure. */
export const wordMathRichText = (value: string, forceMath = false): string => {
  const source = (value || '').normalize('NFC');
  if (!source.trim()) return '';
  const equation = (latex: string) => {
    const omml = latexToOmml(latex);
    return omml ? `<m:oMath>${omml}</m:oMath>` : wordTextRun(`$${latex}$`, { font: 'Cambria Math', color: '9A3412' });
  };
  if (forceMath) {
    const unwrapped = source.trim()
      .replace(/^\$\$|\$\$$/g, '')
      .replace(/^\$|\$$/g, '')
      .replace(/^\\\[|\\\]$/g, '')
      .replace(/^\\\(|\\\)$/g, '');
    return equation(unwrapped);
  }
  return source.split(MATH_TOKEN_REGEX).map((part) => {
    if (!part) return '';
    const isDisplay = (part.startsWith('$$') && part.endsWith('$$')) || (part.startsWith('\\[') && part.endsWith('\\]'));
    const isInline = (part.startsWith('$') && part.endsWith('$')) || (part.startsWith('\\(') && part.endsWith('\\)'));
    if (isDisplay) return equation(part.slice(2, -2));
    if (isInline) return equation(part.startsWith('$') ? part.slice(1, -1) : part.slice(2, -2));
    return part.split('\n').map((line, index) => `${index ? '<w:r><w:br/></w:r>' : ''}${wordTextRun(line)}`).join('');
  }).join('');
};

export const wordParagraph = (
  runs: string,
  options: { style?: string; align?: 'center' | 'left'; indent?: number; keepNext?: boolean; keepLines?: boolean } = {}
): string => {
  const properties = [
    options.style ? `<w:pStyle w:val="${options.style}"/>` : '',
    options.align ? `<w:jc w:val="${options.align}"/>` : '',
    options.indent ? `<w:ind w:left="${options.indent}"/>` : '',
    options.keepNext ? '<w:keepNext/>' : '',
    options.keepLines ? '<w:keepLines/>' : '',
    '<w:spacing w:after="100" w:line="300" w:lineRule="auto"/>',
  ].join('');
  return `<w:p><w:pPr>${properties}</w:pPr>${runs}</w:p>`;
};

const crcTable = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let value = n;
    for (let bit = 0; bit < 8; bit += 1) value = (value & 1) ? (0xedb88320 ^ (value >>> 1)) : (value >>> 1);
    table[n] = value >>> 0;
  }
  return table;
})();
const crc32 = (data: Uint8Array) => {
  let value = 0xffffffff;
  data.forEach((byte) => { value = crcTable[(value ^ byte) & 0xff] ^ (value >>> 8); });
  return (value ^ 0xffffffff) >>> 0;
};
const zipNumber = (value: number, bytes: number) => {
  const result = new Uint8Array(bytes);
  for (let index = 0; index < bytes; index += 1) result[index] = (value >>> (index * 8)) & 0xff;
  return result;
};
const concat = (chunks: Uint8Array[]) => {
  const result = new Uint8Array(chunks.reduce((sum, chunk) => sum + chunk.length, 0));
  let offset = 0;
  chunks.forEach((chunk) => { result.set(chunk, offset); offset += chunk.length; });
  return result;
};
const storedZip = (entries: Array<{ name: string; content: string }>) => {
  const encoder = new TextEncoder();
  const local: Uint8Array[] = [];
  const central: Uint8Array[] = [];
  let offset = 0;
  entries.forEach(({ name, content }) => {
    const fileName = encoder.encode(name);
    const data = encoder.encode(content);
    const checksum = crc32(data);
    const localFile = concat([
      zipNumber(0x04034b50, 4), zipNumber(20, 2), zipNumber(0x0800, 2), zipNumber(0, 2), zipNumber(0, 2), zipNumber(0x0021, 2),
      zipNumber(checksum, 4), zipNumber(data.length, 4), zipNumber(data.length, 4), zipNumber(fileName.length, 2), zipNumber(0, 2), fileName, data,
    ]);
    local.push(localFile);
    central.push(concat([
      zipNumber(0x02014b50, 4), zipNumber(20, 2), zipNumber(20, 2), zipNumber(0x0800, 2), zipNumber(0, 2), zipNumber(0, 2), zipNumber(0x0021, 2),
      zipNumber(checksum, 4), zipNumber(data.length, 4), zipNumber(data.length, 4), zipNumber(fileName.length, 2), zipNumber(0, 2), zipNumber(0, 2),
      zipNumber(0, 2), zipNumber(0, 2), zipNumber(0, 4), zipNumber(offset, 4), fileName,
    ]));
    offset += localFile.length;
  });
  const directory = concat(central);
  const end = concat([zipNumber(0x06054b50, 4), zipNumber(0, 2), zipNumber(0, 2), zipNumber(entries.length, 2), zipNumber(entries.length, 2), zipNumber(directory.length, 4), zipNumber(offset, 4), zipNumber(0, 2)]);
  return new Blob([...local, directory, end], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
};

export const createDocxBlob = (title: string, paragraphs: string[]): Blob => {
  const now = new Date().toISOString();
  const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"><w:body>${paragraphs.join('')}<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="850" w:right="907" w:bottom="850" w:left="907" w:header="425" w:footer="425" w:gutter="0"/></w:sectPr></w:body></w:document>`;
  const stylesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman"/><w:sz w:val="24"/><w:szCs w:val="24"/></w:rPr></w:rPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style><w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:basedOn w:val="Normal"/><w:qFormat/><w:rPr><w:b/><w:sz w:val="34"/></w:rPr></w:style><w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:keepNext/><w:spacing w:before="240" w:after="120"/></w:pPr><w:rPr><w:b/><w:sz w:val="28"/></w:rPr></w:style></w:styles>`;
  return storedZip([
    { name: '[Content_Types].xml', content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>` },
    { name: '_rels/.rels', content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/></Relationships>` },
    { name: 'word/document.xml', content: documentXml },
    { name: 'word/styles.xml', content: stylesXml },
    { name: 'word/_rels/document.xml.rels', content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rIdStyles" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>` },
    { name: 'docProps/core.xml', content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>${escapeOfficeXml(title)}</dc:title><dc:creator>AI Math Bridge Teacher</dc:creator><dcterms:created xsi:type="dcterms:W3CDTF">${now}</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">${now}</dcterms:modified></cp:coreProperties>` },
    { name: 'docProps/app.xml', content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"><Application>AI Math Bridge Teacher</Application></Properties>` },
  ]);
};

export const downloadBlob = (blob: Blob, fileName: string) => {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
};

/** Print an isolated A4 document so surrounding app UI cannot create blank/extra pages. */
export const printElementAsA4 = (elementId: string, title: string) => {
  const source = document.getElementById(elementId);
  if (!source) throw new Error(`Không tìm thấy vùng in: ${elementId}`);
  const iframe = document.createElement('iframe');
  iframe.setAttribute('aria-hidden', 'true');
  iframe.style.position = 'fixed';
  iframe.style.right = '0';
  iframe.style.bottom = '0';
  iframe.style.width = '1px';
  iframe.style.height = '1px';
  iframe.style.border = '0';
  iframe.style.opacity = '0';
  const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"], style')).map((node) => node.outerHTML).join('\n');
  const finish = () => window.setTimeout(() => iframe.remove(), 500);
  iframe.onload = () => {
    const frameWindow = iframe.contentWindow;
    const frameDocument = iframe.contentDocument;
    const print = () => window.setTimeout(() => {
      frameWindow?.addEventListener('afterprint', finish, { once: true });
      frameWindow?.focus();
      frameWindow?.print();
      window.setTimeout(finish, 60000);
    }, 100);
    if (frameDocument?.fonts?.ready) frameDocument.fonts.ready.then(print).catch(print);
    else print();
  };
  iframe.srcdoc = `<!doctype html><html><head><meta charset="utf-8"><base href="${escapeOfficeXml(window.location.href)}"><title>${escapeOfficeXml(title)}</title>${styles}<style>@page{size:A4 portrait;margin:10mm 0}html,body{width:210mm!important;margin:0!important;padding:0!important;background:#fff!important;overflow:visible!important}body{font-family:serif}.a4-export{box-sizing:border-box;width:210mm!important;max-width:210mm!important;min-height:0!important;margin:0!important;padding:0 14mm!important;border:0!important;border-radius:0!important;box-shadow:none!important;transform:none!important;background:#fff!important}.a4-export>*:first-child{margin-top:0!important}.a4-export>*:last-child{margin-bottom:0!important}button{display:none!important}.a4-export h1,.a4-export h2,.a4-export h3,.a4-export figure,.a4-export table,.a4-export .print-keep-together{break-inside:avoid-page!important}.katex-display{overflow:visible!important}</style></head><body><main class="a4-export">${source.innerHTML}</main></body></html>`;
  document.body.appendChild(iframe);
};
