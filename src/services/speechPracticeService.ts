export interface SpeechRecognitionOutcome {
  transcript: string;
  interimTranscript: string;
  confidence?: number;
}

export interface SpeechRecognitionController {
  stop: () => void;
  abort: () => void;
}

export interface SpeechRecognitionCallbacks {
  lang?: string;
  onStart?: () => void;
  onInterim?: (text: string) => void;
  onFinal?: (outcome: SpeechRecognitionOutcome) => void;
  onError?: (message: string) => void;
  onEnd?: () => void;
}

type RecognitionAlternativeLike = { transcript?: string; confidence?: number };
type RecognitionResultLike = {
  isFinal?: boolean;
  length?: number;
  [index: number]: RecognitionAlternativeLike;
};
type RecognitionEventLike = {
  resultIndex?: number;
  results?: {
    length?: number;
    [index: number]: RecognitionResultLike;
  };
};
type RecognitionErrorEventLike = { error?: string; message?: string };

type RecognitionLike = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  onstart: (() => void) | null;
  onresult: ((event: RecognitionEventLike) => void) | null;
  onerror: ((event: RecognitionErrorEventLike) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
};

type RecognitionCtor = new () => RecognitionLike;

function getRecognitionCtor(): RecognitionCtor | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as {
    SpeechRecognition?: RecognitionCtor;
    webkitSpeechRecognition?: RecognitionCtor;
  };
  return w.SpeechRecognition || w.webkitSpeechRecognition || null;
}

export function isSpeechRecognitionSupported(): boolean {
  return !!getRecognitionCtor();
}

export function isSpeechSynthesisSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window && typeof SpeechSynthesisUtterance !== "undefined";
}

const errorMessages: Record<string, string> = {
  "not-allowed": "Trình duyệt chưa được cấp quyền microphone. Hãy cho phép microphone rồi thử lại.",
  "service-not-allowed": "Dịch vụ nhận dạng giọng nói đang bị trình duyệt chặn.",
  "audio-capture": "Không tìm thấy microphone hoặc microphone đang được ứng dụng khác sử dụng.",
  "no-speech": "Chưa nghe thấy giọng nói. Hãy nói gần microphone hơn và thử lại.",
  network: "Nhận dạng giọng nói cần kết nối mạng trên trình duyệt này. Hãy kiểm tra Internet rồi thử lại.",
  aborted: "Đã dừng nghe.",
};

export function startSpeechRecognition(callbacks: SpeechRecognitionCallbacks = {}): SpeechRecognitionController {
  const Recognition = getRecognitionCtor();
  if (!Recognition) {
    callbacks.onError?.("Trình duyệt này chưa hỗ trợ Speech Recognition. Em vẫn có thể gõ transcript để luyện.");
    return { stop: () => {}, abort: () => {} };
  }

  const recognition = new Recognition();
  recognition.lang = callbacks.lang || "en-US";
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.maxAlternatives = 3;

  let finalTranscript = "";
  let interimTranscript = "";
  let confidence: number | undefined;

  recognition.onstart = () => callbacks.onStart?.();
  recognition.onresult = (event) => {
    interimTranscript = "";
    const results = event.results;
    if (!results) return;
    const startIndex = event.resultIndex || 0;
    for (let i = startIndex; i < (results.length || 0); i += 1) {
      const result = results[i];
      const alt = result?.[0];
      const text = String(alt?.transcript || "").trim();
      if (!text) continue;
      if (result?.isFinal) {
        finalTranscript = `${finalTranscript} ${text}`.trim();
        if (typeof alt?.confidence === "number" && Number.isFinite(alt.confidence)) confidence = alt.confidence;
      } else {
        interimTranscript = `${interimTranscript} ${text}`.trim();
      }
    }
    if (interimTranscript) callbacks.onInterim?.(interimTranscript);
    if (finalTranscript) callbacks.onFinal?.({ transcript: finalTranscript, interimTranscript, confidence });
  };
  recognition.onerror = (event) => {
    const key = String(event?.error || "").toLowerCase();
    callbacks.onError?.(errorMessages[key] || event?.message || `Lỗi microphone: ${key || "không xác định"}`);
  };
  recognition.onend = () => callbacks.onEnd?.();

  try {
    recognition.start();
  } catch (err) {
    callbacks.onError?.(err instanceof Error ? err.message : "Không khởi động được microphone.");
  }

  return {
    stop: () => { try { recognition.stop(); } catch {} },
    abort: () => { try { recognition.abort(); } catch {} },
  };
}

export function speakEnglish(text: string, rate = 0.88): boolean {
  if (!isSpeechSynthesisSupported()) return false;
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (!cleaned) return false;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(cleaned);
  utterance.lang = "en-US";
  utterance.rate = Math.max(0.55, Math.min(1.25, rate));
  utterance.pitch = 1;
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find((voice) => /^en-(US|GB)/i.test(voice.lang)) || voices.find((voice) => /^en/i.test(voice.lang));
  if (preferred) utterance.voice = preferred;
  window.speechSynthesis.speak(utterance);
  return true;
}

export function stopSpeaking() {
  if (isSpeechSynthesisSupported()) window.speechSynthesis.cancel();
}

export function normalizeSpeechText(value: string): string {
  return (value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  const curr = new Array<number>(b.length + 1);
  for (let i = 1; i <= a.length; i += 1) {
    curr[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
    }
    for (let j = 0; j <= b.length; j += 1) prev[j] = curr[j];
  }
  return prev[b.length];
}

export interface TranscriptMatchScore {
  score: number;
  expected: string;
  actual: string;
  missingWords: string[];
  extraWords: string[];
}

export function scoreTranscriptMatch(expectedText: string, actualText: string): TranscriptMatchScore {
  const expected = normalizeSpeechText(expectedText);
  const actual = normalizeSpeechText(actualText);
  if (!expected || !actual) return { score: 0, expected, actual, missingWords: expected ? expected.split(" ") : [], extraWords: actual ? actual.split(" ") : [] };

  const charDistance = levenshtein(expected, actual);
  const charScore = 1 - charDistance / Math.max(expected.length, actual.length, 1);
  const eWords = expected.split(" ").filter(Boolean);
  const aWords = actual.split(" ").filter(Boolean);
  const aPool = [...aWords];
  let matches = 0;
  const missingWords: string[] = [];
  eWords.forEach((word) => {
    const idx = aPool.indexOf(word);
    if (idx >= 0) {
      matches += 1;
      aPool.splice(idx, 1);
    } else {
      missingWords.push(word);
    }
  });
  const precision = matches / Math.max(aWords.length, 1);
  const recall = matches / Math.max(eWords.length, 1);
  const f1 = precision + recall ? (2 * precision * recall) / (precision + recall) : 0;
  const score = Math.round(Math.max(0, Math.min(1, charScore * 0.4 + f1 * 0.6)) * 100);
  return { score, expected, actual, missingWords: [...new Set(missingWords)].slice(0, 8), extraWords: [...new Set(aPool)].slice(0, 8) };
}

function replaceBracedCommand(input: string, command: string, formatter: (inside: string) => string): string {
  let text = input;
  const token = `\\${command}{`;
  let start = text.indexOf(token);
  while (start >= 0) {
    let depth = 1;
    let end = start + token.length;
    for (; end < text.length; end += 1) {
      if (text[end] === "{") depth += 1;
      if (text[end] === "}") depth -= 1;
      if (depth === 0) break;
    }
    if (depth !== 0) break;
    const inside = text.slice(start + token.length, end);
    text = `${text.slice(0, start)}${formatter(inside)}${text.slice(end + 1)}`;
    start = text.indexOf(token);
  }
  return text;
}

function replaceFraction(input: string): string {
  let text = input;
  const token = "\\frac{";
  let start = text.indexOf(token);
  while (start >= 0) {
    let depth = 1;
    let mid = start + token.length;
    for (; mid < text.length; mid += 1) {
      if (text[mid] === "{") depth += 1;
      if (text[mid] === "}") depth -= 1;
      if (depth === 0) break;
    }
    if (depth !== 0 || text[mid + 1] !== "{") break;
    const numerator = text.slice(start + token.length, mid);
    depth = 1;
    let end = mid + 2;
    for (; end < text.length; end += 1) {
      if (text[end] === "{") depth += 1;
      if (text[end] === "}") depth -= 1;
      if (depth === 0) break;
    }
    if (depth !== 0) break;
    const denominator = text.slice(mid + 2, end);
    text = `${text.slice(0, start)} ${mathToSpokenEnglish(numerator)} over ${mathToSpokenEnglish(denominator)} ${text.slice(end + 1)}`;
    start = text.indexOf(token);
  }
  return text;
}

export function mathToSpokenEnglish(input: string): string {
  let text = String(input || "")
    .replace(/\$\$?|\\\[|\\\]|\\\(|\\\)/g, " ")
    .replace(/\\left|\\right/g, "")
    .replace(/\\,/g, " ")
    .replace(/~/g, " ");

  text = replaceFraction(text);
  text = replaceBracedCommand(text, "sqrt", (inside) => ` square root of ${mathToSpokenEnglish(inside)} `);
  text = replaceBracedCommand(text, "vec", (inside) => ` vector ${mathToSpokenEnglish(inside)} `);
  text = replaceBracedCommand(text, "overline", (inside) => ` segment ${mathToSpokenEnglish(inside)} `);
  text = replaceBracedCommand(text, "text", (inside) => ` ${inside} `);

  const commands: Array<[RegExp, string]> = [
    [/\\sin\b/g, " sine "], [/\\cos\b/g, " cosine "], [/\\tan\b/g, " tangent "], [/\\cot\b/g, " cotangent "],
    [/\\log\b/g, " log "], [/\\ln\b/g, " natural log "], [/\\lim\b/g, " limit "], [/\\int\b/g, " integral "],
    [/\\sum\b/g, " sum "], [/\\prod\b/g, " product "], [/\\infty\b/g, " infinity "], [/\\pi\b/g, " pi "],
    [/\\alpha\b/g, " alpha "], [/\\beta\b/g, " beta "], [/\\gamma\b/g, " gamma "], [/\\theta\b/g, " theta "], [/\\lambda\b/g, " lambda "],
    [/\\Delta\b/g, " delta "], [/\\Sigma\b/g, " sigma "], [/\\Omega\b/g, " omega "],
    [/\\leq?\b/g, " less than or equal to "], [/\\geq?\b/g, " greater than or equal to "], [/\\ne\b/g, " not equal to "],
    [/\\approx\b/g, " approximately equal to "], [/\\in\b/g, " belongs to "], [/\\notin\b/g, " does not belong to "],
    [/\\cup\b/g, " union "], [/\\cap\b/g, " intersection "], [/\\perp\b/g, " perpendicular to "], [/\\parallel\b/g, " parallel to "],
    [/\\Rightarrow|\\implies/g, " implies "], [/\\Leftrightarrow|\\iff/g, " if and only if "],
  ];
  commands.forEach(([regex, spoken]) => { text = text.replace(regex, spoken); });

  text = text
    .replace(/([A-Za-z0-9)'}]+)\^\{?2\}?/g, "$1 squared")
    .replace(/([A-Za-z0-9)'}]+)\^\{?3\}?/g, "$1 cubed")
    .replace(/([A-Za-z0-9)'}]+)\^\{([^}]+)\}/g, "$1 to the power of $2")
    .replace(/([A-Za-z0-9)'}]+)\^([A-Za-z0-9+-]+)/g, "$1 to the power of $2")
    .replace(/f'\s*\(([^)]+)\)/gi, "f prime of $1")
    .replace(/f''\s*\(([^)]+)\)/gi, "f double prime of $1")
    .replace(/\+/g, " plus ")
    .replace(/−|–|—|-/g, " minus ")
    .replace(/×|\\times|\\cdot/g, " times ")
    .replace(/÷|\\div/g, " divided by ")
    .replace(/=/g, " equals ")
    .replace(/≤/g, " less than or equal to ")
    .replace(/≥/g, " greater than or equal to ")
    .replace(/≠/g, " not equal to ")
    .replace(/√/g, " square root ")
    .replace(/∞/g, " infinity ")
    .replace(/π/g, " pi ")
    .replace(/∈/g, " belongs to ")
    .replace(/∉/g, " does not belong to ")
    .replace(/∪/g, " union ")
    .replace(/∩/g, " intersection ")
    .replace(/⊥/g, " perpendicular to ")
    .replace(/∥/g, " parallel to ")
    .replace(/→/g, " tends to ")
    .replace(/\\[a-zA-Z]+/g, " ")
    .replace(/[{}\[\]]/g, " ")
    .replace(/\(/g, " open parenthesis ")
    .replace(/\)/g, " close parenthesis ")
    .replace(/,/g, " comma ")
    .replace(/:/g, " colon ")
    .replace(/\s+/g, " ")
    .trim();

  return text || String(input || "").trim();
}
