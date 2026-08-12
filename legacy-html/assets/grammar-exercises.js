(function () {
  const exercises = [...document.querySelectorAll('.exercise')];
  if (!exercises.length) return;

  const lessonId = document.body.dataset.lesson || location.pathname.replace(/[^\w-]+/g, '-');
  const scoreText = document.getElementById('score-text');
  const scorePercent = document.getElementById('score-percent');
  const compactScore = document.getElementById('score');
  const language = document.documentElement.lang || 'it';
  const messages = {
    it: { correct: 'Corretto!', better: 'Corretto. Meglio scrivere:', continue: 'Continua...', notYet: 'Non ancora.', reread: 'Rileggi la regola.', score: (correct, total) => `${correct} risposte corrette su ${total}` },
    en: { correct: 'Correct!', better: 'Correct. It is better to write:', continue: 'Keep going...', notYet: 'Not yet.', reread: 'Read the rule again.', score: (correct, total) => `${correct} correct answers out of ${total}` },
    es: { correct: '¡Correcto!', better: 'Correcto. Es mejor escribir:', continue: 'Sigue así...', notYet: 'Todavía no.', reread: 'Vuelve a leer la regla.', score: (correct, total) => `${correct} respuestas correctas de ${total}` },
    fr: { correct: 'Correct !', better: 'Correct. Il vaut mieux écrire :', continue: 'Continuez...', notYet: 'Pas encore.', reread: 'Relisez la règle.', score: (correct, total) => `${correct} bonnes réponses sur ${total}` },
    cs: { correct: 'Správně!', better: 'Správně. Lepší je napsat:', continue: 'Pokračujte...', notYet: 'Ještě ne.', reread: 'Přečtěte si pravidlo znovu.', score: (correct, total) => `${correct} správných odpovědí z ${total}` },
    pl: { correct: 'Poprawnie!', better: 'Poprawnie. Lepiej napisać:', continue: 'Tak dalej...', notYet: 'Jeszcze nie.', reread: 'Przeczytaj regułę jeszcze raz.', score: (correct, total) => `${correct} poprawnych odpowiedzi z ${total}` },
    tr: { correct: 'Doğru!', better: 'Doğru. Şöyle yazmak daha iyi:', continue: 'Devam edin...', notYet: 'Henüz değil.', reread: 'Kuralı tekrar okuyun.', score: (correct, total) => `${correct} doğru cevap / ${total}` },
    de: { correct: 'Richtig!', better: 'Richtig. Besser schreibt man:', continue: 'Weiter so...', notYet: 'Noch nicht.', reread: 'Lies die Regel noch einmal.', score: (correct, total) => `${correct} richtige Antworten von ${total}` },
    ja: { correct: '正解です！', better: '正解です。次のように書くとより自然です：', continue: '続けてください…', notYet: 'まだ正解ではありません。', reread: 'もう一度ルールを読みましょう。', score: (correct, total) => `${total}問中${correct}問正解` },
  }[language] || null;
  const message = messages || {
    correct: 'Corretto!', better: 'Corretto. Meglio scrivere:', continue: 'Continua...', notYet: 'Non ancora.', reread: 'Rileggi la regola.', score: (correct, total) => `${correct} risposte corrette su ${total}`,
  };
  const dbName = 'italiano-con-martin';
  const storeName = 'grammar-progress';

  function norm(value) {
    return value.trim().toLowerCase().replace(/[\u2018\u2019]/g, "'").replace(/[.,!?]/g, '').replace(/\s+/g, ' ');
  }

  function withoutAccents(value) {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function withoutAccentHelpers(value) {
    return withoutAccents(value).replace(/['\u2019`]/g, '');
  }

  function displayAnswer(value) {
    return value.replace(/[\u2018\u2019]/g, "'");
  }

  function legacyKey(index) {
    return `${lessonId}-${index}`;
  }

  function openDb() {
    if (!('indexedDB' in window)) return Promise.resolve(null);

    return new Promise((resolve) => {
      const request = indexedDB.open(dbName, 1);

      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName, { keyPath: 'lessonId' });
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => resolve(null);
      request.onblocked = () => resolve(null);
    });
  }

  function readProgress(db) {
    if (!db) return Promise.resolve(readLegacyProgress());

    return new Promise((resolve) => {
      const tx = db.transaction(storeName, 'readonly');
      const store = tx.objectStore(storeName);
      const request = store.get(lessonId);

      request.onsuccess = () => resolve(request.result || readLegacyProgress());
      request.onerror = () => resolve(readLegacyProgress());
    });
  }

  function writeProgress(db) {
    const answers = exercises.map((box) => {
      const input = box.querySelector('input');
      return input ? input.value : '';
    });
    const score = exercises.filter((box) => box.dataset.correct === '1').length;
    const progress = {
      lessonId,
      answers,
      score,
      total: exercises.length,
      updatedAt: new Date().toISOString(),
    };

    writeLegacyProgress(progress);
    if (!db) return;

    const tx = db.transaction(storeName, 'readwrite');
    tx.objectStore(storeName).put(progress);
  }

  function clearProgress(db) {
    clearLegacyProgress();
    if (!db) return;

    const tx = db.transaction(storeName, 'readwrite');
    tx.objectStore(storeName).delete(lessonId);
  }

  function readLegacyProgress() {
    const answers = exercises.map((_, index) => localStorage.getItem(legacyKey(index)) || '');
    return {
      lessonId,
      answers,
      score: Number(localStorage.getItem(`${lessonId}-score`) || 0),
      total: exercises.length,
      updatedAt: null,
    };
  }

  function writeLegacyProgress(progress) {
    progress.answers.forEach((answer, index) => {
      if (answer) {
        localStorage.setItem(legacyKey(index), answer);
      } else {
        localStorage.removeItem(legacyKey(index));
      }
    });
    localStorage.setItem(`${lessonId}-score`, String(progress.score));
  }

  function clearLegacyProgress() {
    exercises.forEach((_, index) => localStorage.removeItem(legacyKey(index)));
    localStorage.removeItem(`${lessonId}-score`);
  }

  function updateScore(db) {
    const correct = exercises.filter((box) => box.dataset.correct === '1').length;
    if (scoreText) scoreText.textContent = message.score(correct, exercises.length);
    if (scorePercent) scorePercent.textContent = `${Math.round((correct / exercises.length) * 100)}%`;
    if (compactScore) compactScore.textContent = `${correct}/${exercises.length}`;
    writeProgress(db);
  }

  function checkExercise(box, db) {
    const input = box.querySelector('input');
    const feedback = box.querySelector('.feedback');
    if (!input || !feedback) return;

    const rawAccepted = [box.dataset.answer, ...(box.dataset.alt || '').split('|')].filter(Boolean);
    const accepted = rawAccepted.map(norm).filter(Boolean);
    const bestAccepted = accepted[0] || '';
    const value = norm(input.value);
    const accentFreeValue = withoutAccents(value);
    const accentFreeAccepted = accepted.map(withoutAccents);
    const helperFreeValue = withoutAccentHelpers(value);
    const helperFreeBest = withoutAccentHelpers(bestAccepted);

    box.dataset.correct = '0';
    input.classList.remove('correct', 'wrong', 'almost');
    feedback.className = 'feedback';

    if (!value) {
      feedback.textContent = '';
      updateScore(db);
      return;
    }

    if (value === bestAccepted) {
      box.dataset.correct = '1';
      input.classList.add('correct');
      feedback.classList.add('ok');
      feedback.textContent = message.correct;
    } else if (accepted.includes(value) && helperFreeValue !== helperFreeBest) {
      box.dataset.correct = '1';
      input.classList.add('correct');
      feedback.classList.add('ok');
      feedback.textContent = message.correct;
    } else if (accentFreeAccepted.includes(accentFreeValue) || accepted.includes(value)) {
      const bestAnswer = rawAccepted[accentFreeAccepted.indexOf(accentFreeValue)];
      box.dataset.correct = '1';
      input.classList.add('almost');
      feedback.classList.add('almost');
      feedback.textContent = `${message.better} ${displayAnswer(bestAnswer || rawAccepted[0])}.`;
    } else if (accepted.some((answer) => answer.startsWith(value))) {
      feedback.classList.add('wait');
      feedback.textContent = message.continue;
    } else {
      input.classList.add('wrong');
      feedback.classList.add('no');
      feedback.textContent = `${message.notYet} ${box.dataset.hint || message.reread}`;
    }

    updateScore(db);
  }

  openDb().then((db) => {
    readProgress(db).then((progress) => {
      exercises.forEach((box, index) => {
        const input = box.querySelector('input');
        if (!input) return;

        input.addEventListener('input', () => checkExercise(box, db));

        if (progress.answers[index]) {
          input.value = progress.answers[index];
          checkExercise(box, db);
        }
      });

      const reset = document.getElementById('reset-exercises');
      if (reset) {
        reset.addEventListener('click', () => {
          exercises.forEach((box) => {
            const input = box.querySelector('input');
            if (!input) return;
            input.value = '';
            checkExercise(box, db);
          });
          clearProgress(db);
          updateScore(db);
        });
      }

      updateScore(db);
    });
  });
})();
