(function () {
  const exercises = [...document.querySelectorAll('.exercise')];
  const translations = [...document.querySelectorAll('.translation-exercise')];
  if (!exercises.length && !translations.length) return;

  const lessonId = document.body.dataset.lesson || location.pathname.replace(/[^\w-]+/g, '-');
  const lessonPath = location.pathname;
  const scoreText = document.getElementById('score-text');
  const scorePercent = document.getElementById('score-percent');
  const compactScore = document.getElementById('score');
  const language = (document.documentElement.lang || 'it').toLowerCase().split('-')[0];
  const allMessages = {
    it: { correct: 'Corretto!', better: 'Corretto. Meglio scrivere:', continue: 'Continua...', notYet: 'Non ancora.', reread: 'Rileggi la regola.', score: (c, t) => `${c} ${c === 1 ? 'risposta corretta' : 'risposte corrette'} su ${t}`, progress: 'Progresso della lezione', activities: (c, t) => `${c} ${c === 1 ? 'attività completata' : 'attività completate'} su ${t}`, show: 'Mostra una possibile soluzione', hide: 'Nascondi la soluzione', complete: 'Segna come completata', completed: 'Completata', writeFirst: 'Scrivi prima la tua traduzione.' },
    en: { correct: 'Correct!', better: 'Correct. It is better to write:', continue: 'Keep going...', notYet: 'Not yet.', reread: 'Read the rule again.', score: (c, t) => `${c} correct answers out of ${t}`, progress: 'Lesson progress', activities: (c, t) => `${c} of ${t} activities completed`, show: 'Show a possible answer', hide: 'Hide the answer', complete: 'Mark as completed', completed: 'Completed', writeFirst: 'Write your translation first.' },
    es: { correct: '¡Correcto!', better: 'Correcto. Es mejor escribir:', continue: 'Sigue así...', notYet: 'Todavía no.', reread: 'Vuelve a leer la regla.', score: (c, t) => `${c} respuestas correctas de ${t}`, progress: 'Progreso de la lección', activities: (c, t) => `${c} de ${t} actividades completadas`, show: 'Mostrar una posible solución', hide: 'Ocultar la solución', complete: 'Marcar como completada', completed: 'Completada', writeFirst: 'Escribe primero tu traducción.' },
    fr: { correct: 'Correct !', better: 'Correct. Il vaut mieux écrire :', continue: 'Continuez...', notYet: 'Pas encore.', reread: 'Relisez la règle.', score: (c, t) => `${c} bonnes réponses sur ${t}`, progress: 'Progression de la leçon', activities: (c, t) => `${c} activités terminées sur ${t}`, show: 'Afficher une solution possible', hide: 'Masquer la solution', complete: 'Marquer comme terminée', completed: 'Terminée', writeFirst: 'Écrivez d’abord votre traduction.' },
    cs: { correct: 'Správně!', better: 'Správně. Lepší je napsat:', continue: 'Pokračujte...', notYet: 'Ještě ne.', reread: 'Přečtěte si pravidlo znovu.', score: (c, t) => `${c} správných odpovědí z ${t}`, progress: 'Průběh lekce', activities: (c, t) => `${c} z ${t} aktivit dokončeno`, show: 'Zobrazit možné řešení', hide: 'Skrýt řešení', complete: 'Označit jako dokončené', completed: 'Dokončeno', writeFirst: 'Nejprve napište svůj překlad.' },
    pl: { correct: 'Poprawnie!', better: 'Poprawnie. Lepiej napisać:', continue: 'Tak dalej...', notYet: 'Jeszcze nie.', reread: 'Przeczytaj regułę jeszcze raz.', score: (c, t) => `${c} poprawnych odpowiedzi z ${t}`, progress: 'Postęp lekcji', activities: (c, t) => `${c} z ${t} ćwiczeń ukończonych`, show: 'Pokaż przykładowe rozwiązanie', hide: 'Ukryj rozwiązanie', complete: 'Oznacz jako ukończone', completed: 'Ukończone', writeFirst: 'Najpierw napisz swoje tłumaczenie.' },
    tr: { correct: 'Doğru!', better: 'Doğru. Şöyle yazmak daha iyi:', continue: 'Devam edin...', notYet: 'Henüz değil.', reread: 'Kuralı tekrar okuyun.', score: (c, t) => `${c} doğru cevap / ${t}`, progress: 'Ders ilerlemesi', activities: (c, t) => `${t} etkinliğin ${c} tanesi tamamlandı`, show: 'Olası bir çözümü göster', hide: 'Çözümü gizle', complete: 'Tamamlandı olarak işaretle', completed: 'Tamamlandı', writeFirst: 'Önce çevirinizi yazın.' },
    de: { correct: 'Richtig!', better: 'Richtig. Besser schreibt man:', continue: 'Weiter so...', notYet: 'Noch nicht.', reread: 'Lies die Regel noch einmal.', score: (c, t) => `${c} richtige Antworten von ${t}`, progress: 'Lektionsfortschritt', activities: (c, t) => `${c} von ${t} Aktivitäten abgeschlossen`, show: 'Eine mögliche Lösung anzeigen', hide: 'Lösung ausblenden', complete: 'Als abgeschlossen markieren', completed: 'Abgeschlossen', writeFirst: 'Schreibe zuerst deine Übersetzung.' },
    ja: { correct: '正解です！', better: '正解です。より自然な形：', continue: '続けてください…', notYet: 'まだ正解ではありません。', reread: 'もう一度ルールを読みましょう。', score: (c, t) => `${t}問中${c}問正解`, progress: 'レッスンの進捗', activities: (c, t) => `${t}個のアクティビティのうち${c}個完了`, show: '解答例を見る', hide: '解答例を隠す', complete: '完了としてマーク', completed: '完了', writeFirst: 'まず自分の訳を書いてください。' },
  };
  const message = allMessages[language] || allMessages.it;
  const dbName = 'italiano-con-martin';
  const storeName = 'grammar-progress';
  let currentDb = null;

  function norm(value) {
    return value.trim().toLowerCase().replace(/[\u2018\u2019]/g, "'").replace(/[.,!?]/g, '').replace(/\s+/g, ' ');
  }
  function withoutAccents(value) { return value.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }
  function withoutAccentHelpers(value) { return withoutAccents(value).replace(/['\u2019`]/g, ''); }
  function displayAnswer(value) { return value.replace(/[\u2018\u2019]/g, "'"); }
  function legacyKey(index) { return `${lessonId}-${index}`; }

  function openDb() {
    if (!('indexedDB' in window)) return Promise.resolve(null);
    return new Promise((resolve) => {
      const request = indexedDB.open(dbName, 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(storeName)) db.createObjectStore(storeName, { keyPath: 'lessonId' });
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = request.onblocked = () => resolve(null);
    });
  }

  function readLegacyProgress() {
    let extended = {};
    try { extended = JSON.parse(localStorage.getItem(`grammar-progress:${lessonId}`) || '{}'); } catch (_) {}
    return {
      lessonId,
      path: lessonPath,
      answers: exercises.map((_, index) => localStorage.getItem(legacyKey(index)) || ''),
      score: Number(localStorage.getItem(`${lessonId}-score`) || 0),
      total: exercises.length,
      translationDrafts: extended.translationDrafts || [],
      translationsRevealed: extended.translationsRevealed || [],
      translationsCompleted: extended.translationsCompleted || [],
    };
  }

  function readProgress(db) {
    if (!db) return Promise.resolve(readLegacyProgress());
    return new Promise((resolve) => {
      const request = db.transaction(storeName, 'readonly').objectStore(storeName).get(lessonId);
      request.onsuccess = () => resolve({ ...readLegacyProgress(), ...(request.result || {}) });
      request.onerror = () => resolve(readLegacyProgress());
    });
  }

  function collectProgress() {
    const answers = exercises.map((box) => box.querySelector('input')?.value || '');
    const translationDrafts = translations.map((box) => box.querySelector('textarea')?.value || '');
    const translationsRevealed = translations.map((box) => box.dataset.revealed === '1');
    const translationsCompleted = translations.map((box) => box.dataset.completed === '1');
    const correctCount = exercises.filter((box) => box.dataset.correct === '1').length;
    const translationCount = translationsCompleted.filter(Boolean).length;
    return {
      lessonId,
      path: lessonPath,
      answers,
      score: correctCount,
      total: exercises.length,
      translationDrafts,
      translationsRevealed,
      translationsCompleted,
      completedActivities: correctCount + translationCount,
      totalActivities: exercises.length + translations.length,
      updatedAt: new Date().toISOString(),
    };
  }

  function writeProgress(db) {
    const progress = collectProgress();
    progress.answers.forEach((answer, index) => answer ? localStorage.setItem(legacyKey(index), answer) : localStorage.removeItem(legacyKey(index)));
    localStorage.setItem(`${lessonId}-score`, String(progress.score));
    localStorage.setItem(`grammar-progress:${lessonId}`, JSON.stringify(progress));
    if (db) db.transaction(storeName, 'readwrite').objectStore(storeName).put(progress);
    return progress;
  }

  function clearProgress(db) {
    exercises.forEach((_, index) => localStorage.removeItem(legacyKey(index)));
    localStorage.removeItem(`${lessonId}-score`);
    localStorage.removeItem(`grammar-progress:${lessonId}`);
    if (db) db.transaction(storeName, 'readwrite').objectStore(storeName).delete(lessonId);
  }

  function ensureProgressPanel() {
    let panel = document.querySelector('.lesson-progress-panel');
    if (panel) return panel;
    const target = document.querySelector('#esercizi');
    if (!target) return null;
    panel = document.createElement('div');
    panel.className = 'lesson-progress-panel';
    panel.innerHTML = `<div class="progress-heading"><strong>${message.progress}</strong><span class="lesson-progress-label"></span></div><progress class="lesson-progress-bar" max="100" value="0"></progress>`;
    target.insertBefore(panel, target.firstChild);
    return panel;
  }

  function updateAll(db) {
    const progress = writeProgress(db);
    if (scoreText) scoreText.textContent = message.score(progress.score, exercises.length);
    if (scorePercent) scorePercent.textContent = `${exercises.length ? Math.round((progress.score / exercises.length) * 100) : 0}%`;
    if (compactScore) compactScore.textContent = `${progress.score}/${exercises.length}`;
    const panel = ensureProgressPanel();
    if (panel) {
      const percent = progress.totalActivities ? Math.round((progress.completedActivities / progress.totalActivities) * 100) : 0;
      panel.classList.toggle('is-complete', percent === 100);
      panel.querySelector('progress').value = percent;
      panel.querySelector('.lesson-progress-label').textContent = message.activities(progress.completedActivities, progress.totalActivities);
    }
    window.dispatchEvent(new CustomEvent('grammar-progress-updated', { detail: progress }));
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
    if (!value) feedback.textContent = '';
    else if (value === bestAccepted || (accepted.includes(value) && helperFreeValue !== helperFreeBest)) {
      box.dataset.correct = '1'; input.classList.add('correct'); feedback.classList.add('ok'); feedback.textContent = message.correct;
    } else if (accentFreeAccepted.includes(accentFreeValue) || accepted.includes(value)) {
      const bestAnswer = rawAccepted[accentFreeAccepted.indexOf(accentFreeValue)];
      box.dataset.correct = '1'; input.classList.add('almost'); feedback.classList.add('almost'); feedback.textContent = `${message.better} ${displayAnswer(bestAnswer || rawAccepted[0])}.`;
    } else if (accepted.some((answer) => answer.startsWith(value))) {
      feedback.classList.add('wait'); feedback.textContent = message.continue;
    } else {
      input.classList.add('wrong'); feedback.classList.add('no'); feedback.textContent = `${message.notYet} ${box.dataset.hint || message.reread}`;
    }
    updateAll(db);
  }

  function renderTranslation(box, index, progress, db) {
    const textarea = box.querySelector('textarea');
    const toggle = box.querySelector('.translation-toggle');
    const complete = box.querySelector('.translation-complete');
    const solution = box.querySelector('.translation-solution');
    const status = box.querySelector('.translation-status');
    if (!textarea || !toggle || !complete || !solution) return;
    textarea.value = progress.translationDrafts?.[index] || '';
    box.dataset.revealed = progress.translationsRevealed?.[index] ? '1' : '0';
    box.dataset.completed = progress.translationsCompleted?.[index] ? '1' : '0';

    function paint() {
      const revealed = box.dataset.revealed === '1';
      const completed = box.dataset.completed === '1';
      solution.hidden = !revealed;
      toggle.textContent = revealed ? message.hide : message.show;
      complete.textContent = completed ? message.completed : message.complete;
      complete.classList.toggle('is-completed', completed);
      textarea.classList.toggle('completed', completed);
      if (status && completed) status.textContent = message.completed;
    }
    textarea.addEventListener('input', () => { if (status) status.textContent = ''; updateAll(db); });
    toggle.addEventListener('click', () => { box.dataset.revealed = box.dataset.revealed === '1' ? '0' : '1'; paint(); updateAll(db); });
    complete.addEventListener('click', () => {
      if (!textarea.value.trim()) { if (status) status.textContent = message.writeFirst; textarea.focus(); return; }
      box.dataset.completed = box.dataset.completed === '1' ? '0' : '1';
      if (status) status.textContent = '';
      paint(); updateAll(db);
    });
    paint();
  }

  openDb().then((db) => {
    currentDb = db;
    readProgress(db).then((progress) => {
      translations.forEach((box, index) => renderTranslation(box, index, progress, db));
      exercises.forEach((box, index) => {
        const input = box.querySelector('input');
        if (!input) return;
        input.addEventListener('input', () => checkExercise(box, db));
        if (progress.answers?.[index]) input.value = progress.answers[index];
        checkExercise(box, db);
      });
      const reset = document.getElementById('reset-exercises');
      if (reset) reset.addEventListener('click', () => {
        exercises.forEach((box) => { const input = box.querySelector('input'); if (input) { input.value = ''; checkExercise(box, db); } });
        translations.forEach((box) => {
          const textarea = box.querySelector('textarea'); if (textarea) textarea.value = '';
          box.dataset.revealed = '0'; box.dataset.completed = '0';
          const solution = box.querySelector('.translation-solution'); if (solution) solution.hidden = true;
          const toggle = box.querySelector('.translation-toggle'); if (toggle) toggle.textContent = message.show;
          const complete = box.querySelector('.translation-complete'); if (complete) { complete.textContent = message.complete; complete.classList.remove('is-completed'); }
          const status = box.querySelector('.translation-status'); if (status) status.textContent = '';
        });
        clearProgress(db); updateAll(db);
      });
      updateAll(db);
    });
  });
})();
