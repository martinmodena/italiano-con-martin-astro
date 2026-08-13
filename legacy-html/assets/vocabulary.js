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

  const exercises = [...document.querySelectorAll('.translation-exercise')];
  const progress = document.querySelector('#translation-progress');
  const progressText = document.querySelector('#translation-progress-text');
  const storageKey = 'italiano-con-martin:vocabulary:cucina:v1';
  let saved = {};

  try {
    saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
  } catch {
    saved = {};
  }

  const normalize = (value) =>
    value
      .toLocaleLowerCase('it')
      .replace(/[’‘]/g, "'")
      .replace(/[.,!?;:]+$/g, '')
      .replace(/\s+/g, ' ')
      .trim();

  const save = () => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(saved));
    } catch {
      // The exercise still works when private browsing blocks local storage.
    }
  };

  const updateProgress = () => {
    if (!progress || !progressText) return;
    const correct = exercises.filter((exercise) => exercise.classList.contains('is-correct')).length;
    const percentage = exercises.length ? Math.round((correct / exercises.length) * 100) : 0;
    progress.value = correct;
    progressText.textContent = `${correct} di ${exercises.length} corrette · ${percentage}%`;
    progress.classList.toggle('is-complete', correct === exercises.length && exercises.length > 0);
  };

  exercises.forEach((exercise) => {
    const key = exercise.dataset.key;
    const input = exercise.querySelector('textarea');
    const feedback = exercise.querySelector('.translation-feedback');
    const solution = exercise.querySelector('.proposed-solution');
    const answers = JSON.parse(exercise.dataset.answer || '[]');
    const stored = saved[key] || {};

    input.value = stored.value || '';
    if (stored.correct) {
      exercise.classList.add('is-correct');
      feedback.textContent = 'Corretta! Ottimo lavoro.';
    }
    if (stored.solutionVisible) solution.hidden = false;

    input.addEventListener('input', () => {
      exercise.classList.remove('is-correct', 'is-incorrect');
      feedback.textContent = '';
      saved[key] = { ...saved[key], value: input.value, correct: false };
      save();
      updateProgress();
    });

    exercise.querySelector('.check-translation').addEventListener('click', () => {
      const correct = answers.some((answer) => normalize(answer) === normalize(input.value));
      exercise.classList.toggle('is-correct', correct);
      exercise.classList.toggle('is-incorrect', !correct);
      feedback.textContent = correct
        ? 'Corretta! Ottimo lavoro.'
        : 'Non è ancora esatta. Riprova oppure confronta la soluzione proposta.';
      saved[key] = { ...saved[key], value: input.value, correct };
      save();
      updateProgress();
    });

    exercise.querySelector('.show-translation').addEventListener('click', () => {
      solution.hidden = !solution.hidden;
      saved[key] = { ...saved[key], value: input.value, solutionVisible: !solution.hidden };
      save();
    });
  });

  updateProgress();
})();
