(function () {
  const search = document.querySelector('.vocabulary-search');
  const cards = [...document.querySelectorAll('.word-card')];
  if (search)
    search.addEventListener('input', () => {
      const query = search.value.trim().toLocaleLowerCase('it');
      cards.forEach((card) => {
        card.hidden = query && !card.textContent.toLocaleLowerCase('it').includes(query);
      });
    });

  document.querySelectorAll('.speak-word').forEach((button) =>
    button.addEventListener('click', () => {
      if (!('speechSynthesis' in window)) return;
      speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(button.dataset.word || '');
      utterance.lang = 'it-IT';
      utterance.rate = 0.85;
      speechSynthesis.speak(utterance);
    })
  );

  const normalize = (value) =>
    value
      .toLocaleLowerCase('it')
      .replace(/[’‘]/g, "'")
      .replace(/[.,!?;:]+$/g, '')
      .replace(/\s+/g, ' ')
      .trim();

  const readStorage = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key) || '{}');
    } catch {
      return {};
    }
  };

  const writeStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // All activities remain usable when local storage is unavailable.
    }
  };

  const wordTests = [...document.querySelectorAll('.word-test')];
  const wordProgress = document.querySelector('#word-progress');
  const wordProgressText = document.querySelector('#word-progress-text');
  const wordStorageKey = 'italiano-con-martin:vocabulary:cucina:words:v1';
  const savedWords = readStorage(wordStorageKey);

  const updateWordProgress = () => {
    if (!wordProgress || !wordProgressText) return;
    const correct = wordTests.filter((test) => test.classList.contains('is-correct')).length;
    const percentage = wordTests.length ? Math.round((correct / wordTests.length) * 100) : 0;
    wordProgress.value = correct;
    wordProgressText.textContent = `${correct} di ${wordTests.length} corrette · ${percentage}%`;
    wordProgress.classList.toggle('is-complete', correct === wordTests.length && wordTests.length > 0);
  };

  wordTests.forEach((test) => {
    const key = test.dataset.key;
    const input = test.querySelector('input');
    const feedback = test.querySelector('.word-test-feedback');
    const solution = test.querySelector('.word-test-solution');
    const answers = JSON.parse(test.dataset.answer || '[]');
    const stored = savedWords[key] || {};

    input.value = stored.value || '';
    if (stored.correct) {
      test.classList.add('is-correct');
      feedback.textContent = 'Corretta! Hai riconosciuto la parola.';
    }
    if (stored.solutionVisible) solution.hidden = false;

    input.addEventListener('input', () => {
      test.classList.remove('is-correct', 'is-incorrect');
      feedback.textContent = '';
      savedWords[key] = { ...savedWords[key], value: input.value, correct: false };
      writeStorage(wordStorageKey, savedWords);
      updateWordProgress();
    });

    test.querySelector('.check-word').addEventListener('click', () => {
      const correct = answers.some((answer) => normalize(answer) === normalize(input.value));
      test.classList.toggle('is-correct', correct);
      test.classList.toggle('is-incorrect', !correct);
      feedback.textContent = correct
        ? 'Corretta! Hai riconosciuto la parola.'
        : 'Non ancora. Guarda bene l’immagine e riprova.';
      savedWords[key] = { ...savedWords[key], value: input.value, correct };
      writeStorage(wordStorageKey, savedWords);
      updateWordProgress();
    });

    test.querySelector('.show-word').addEventListener('click', () => {
      solution.hidden = !solution.hidden;
      savedWords[key] = { ...savedWords[key], value: input.value, solutionVisible: !solution.hidden };
      writeStorage(wordStorageKey, savedWords);
    });
  });

  updateWordProgress();

  const translations = [...document.querySelectorAll('.translation-exercise')];
  const translationStorageKey = 'italiano-con-martin:vocabulary:cucina:translations:v2';
  const savedTranslations = readStorage(translationStorageKey);

  translations.forEach((exercise) => {
    const key = exercise.dataset.key;
    const input = exercise.querySelector('textarea');
    const solution = exercise.querySelector('.proposed-solution');
    const stored = savedTranslations[key] || {};

    input.value = stored.value || '';
    if (stored.solutionVisible) solution.hidden = false;

    input.addEventListener('input', () => {
      savedTranslations[key] = { ...savedTranslations[key], value: input.value };
      writeStorage(translationStorageKey, savedTranslations);
    });

    exercise.querySelector('.show-translation').addEventListener('click', () => {
      solution.hidden = !solution.hidden;
      savedTranslations[key] = { ...savedTranslations[key], value: input.value, solutionVisible: !solution.hidden };
      writeStorage(translationStorageKey, savedTranslations);
    });
  });
})();
