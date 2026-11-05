// Le favole lette da Martin (dal 2026-11-05). Chiave: la pagina italiana della favola;
// valore: i livelli che hanno la registrazione. Il file audio è
// public/assets/audio/favole/<nome della pagina italiana>-<livello>.mp3
// (per esempio i-due-conigli-a1.mp3). Lo usa scripts/add-fable-audio.mjs.
export const FAVOLE_AUDIO = {
  'favole/i-due-conigli.html': ['a1', 'a2'],
};

// Il testo sopra il lettore, nella lingua di chi legge la pagina. {L} = livello.
export const AUDIO_LABEL = {
  it: 'Ascolta il testo {L} letto da Martin',
  en: 'Listen to Martin reading the {L} text',
  es: 'Escucha a Martin leer el texto {L}',
  fr: 'Écoute Martin lire le texte {L}',
  de: 'Hör zu, wie Martin den Text {L} liest',
  cs: 'Poslechni si text {L}, jak ho čte Martin',
  pl: 'Posłuchaj, jak Martin czyta tekst {L}',
  tr: '{L} metnini Martin’in sesinden dinle',
  ja: 'マルティンが読む{L}の文章を聞いてみよう',
  pt: 'Ouça o Martin ler o texto {L}',
};
