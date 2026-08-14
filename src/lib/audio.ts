/**
 * Audio Pronunciation & Text-To-Speech Service
 * Supports saved audio_url fallback to browser SpeechSynthesis for English math terms
 */

export function speakEnglishWord(text: string, onEnd?: () => void) {
  if (typeof window === 'undefined') return;

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Stop current speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // Slightly slower for clarity
    if (onEnd) utterance.onend = onEnd;

    // Pick English voice if available
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en'));
    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    window.speechSynthesis.speak(utterance);
  } else {
    console.warn('Speech synthesis not supported in this browser.');
  }
}

export function playAudioUrl(url: string, onEnd?: () => void) {
  if (!url) return;
  const audio = new Audio(url);
  if (onEnd) audio.onended = onEnd;
  audio.play().catch(err => {
    console.warn('Failed to play audio URL:', err);
  });
}
