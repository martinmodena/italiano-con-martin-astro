(function () {
  const language = (document.documentElement.lang || 'it').toLowerCase().split('-')[0];
  const messages =
    {
      it: {
        progress: (correct, total, percentage) => `${correct} di ${total} corrette · ${percentage}%`,
        correct: 'Corretta! Hai riconosciuto la parola.',
        incorrect: 'Non ancora. Guarda bene l’immagine e riprova.',
      },
      en: {
        progress: (correct, total, percentage) => `${correct} of ${total} correct · ${percentage}%`,
        correct: 'Correct! You recognized the word.',
        incorrect: 'Not yet. Look carefully at the image and try again.',
      },
      es: {
        progress: (correct, total, percentage) => `${correct} de ${total} correctas · ${percentage}%`,
        correct: '¡Correcto! Has reconocido la palabra.',
        incorrect: 'Todavía no. Mira bien la imagen e inténtalo de nuevo.',
      },
      fr: {
        progress: (correct, total, percentage) => `${correct} sur ${total} correctes · ${percentage}%`,
        correct: 'Correct ! Vous avez reconnu le mot.',
        incorrect: 'Pas encore. Observez bien l’image et réessayez.',
      },
      cs: {
        progress: (correct, total, percentage) => `${correct} z ${total} správně · ${percentage}%`,
        correct: 'Správně! Poznal/a jste slovo.',
        incorrect: 'Ještě ne. Dobře si prohlédněte obrázek a zkuste to znovu.',
      },
      pl: {
        progress: (correct, total, percentage) => `${correct} z ${total} poprawnych · ${percentage}%`,
        correct: 'Dobrze! Rozpoznajesz to słowo.',
        incorrect: 'Jeszcze nie. Przyjrzyj się obrazkowi i spróbuj ponownie.',
      },
      tr: {
        progress: (correct, total, percentage) => `${total} sorudan ${correct} doğru · %${percentage}`,
        correct: 'Doğru! Kelimeyi tanıdınız.',
        incorrect: 'Henüz değil. Görsele dikkatlice bakıp tekrar deneyin.',
      },
      de: {
        progress: (correct, total, percentage) => `${correct} von ${total} richtig · ${percentage}%`,
        correct: 'Richtig! Du hast das Wort erkannt.',
        incorrect: 'Noch nicht. Sieh dir das Bild genau an und versuche es erneut.',
      },
      ja: {
        progress: (correct, total, percentage) => `${total}問中${correct}問正解 · ${percentage}%`,
        correct: '正解です！単語を認識できました。',
        incorrect: 'まだ正解ではありません。画像をよく見て、もう一度試してください。',
      },
    }[language] || null;
  const text = messages || {
    progress: (correct, total, percentage) => `${correct} di ${total} corrette · ${percentage}%`,
    correct: 'Corretta! Hai riconosciuto la parola.',
    incorrect: 'Non ancora. Guarda bene l’immagine e riprova.',
  };

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
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
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
  const wordStorageKey = `italiano-con-martin:vocabulary:cucina:${language}:words:v2`;
  const savedWords = readStorage(wordStorageKey);

  const updateWordProgress = () => {
    if (!wordProgress || !wordProgressText) return;
    const correct = wordTests.filter((test) => test.classList.contains('is-correct')).length;
    const percentage = wordTests.length ? Math.round((correct / wordTests.length) * 100) : 0;
    wordProgress.value = correct;
    wordProgressText.textContent = text.progress(correct, wordTests.length, percentage);
    wordProgress.classList.toggle('is-complete', correct === wordTests.length && wordTests.length > 0);
  };

  wordTests.forEach((test) => {
    const key = test.dataset.key;
    const input = test.querySelector('input');
    const feedback = test.querySelector('.word-test-feedback');
    const answers = JSON.parse(test.dataset.answer || '[]');
    const stored = savedWords[key] || {};

    const checkAnswer = () => {
      if (!input.value.trim()) {
        test.classList.remove('is-correct', 'is-incorrect');
        feedback.textContent = '';
        savedWords[key] = { value: '', correct: false };
        writeStorage(wordStorageKey, savedWords);
        updateWordProgress();
        return;
      }
      const correct = answers.some((answer) => normalize(answer) === normalize(input.value));
      test.classList.toggle('is-correct', correct);
      test.classList.toggle('is-incorrect', !correct);
      feedback.textContent = correct ? text.correct : text.incorrect;
      savedWords[key] = { value: input.value, correct };
      writeStorage(wordStorageKey, savedWords);
      updateWordProgress();
    };

    input.value = stored.value || '';
    if (stored.correct) {
      test.classList.add('is-correct');
      feedback.textContent = text.correct;
    }
    input.addEventListener('input', () => {
      test.classList.remove('is-correct', 'is-incorrect');
      feedback.textContent = '';
      savedWords[key] = { ...savedWords[key], value: input.value, correct: false };
      writeStorage(wordStorageKey, savedWords);
      updateWordProgress();
    });

    input.addEventListener('change', checkAnswer);
    input.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter') return;
      event.preventDefault();
      checkAnswer();
      const nextInput = wordTests[wordTests.indexOf(test) + 1]?.querySelector('input');
      nextInput?.focus();
    });
  });

  updateWordProgress();

  const translations = [...document.querySelectorAll('.translation-exercise')];
  const translationStorageKey = `italiano-con-martin:vocabulary:cucina:${language}:translations:v3`;
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
