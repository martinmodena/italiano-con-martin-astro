// «La pronuncia italiana» (2026-10-17): audio, esercizi di ascolto e registratore.
// I testi arrivano dagli attributi data-msg-* di .pron-lesson, quindi questo file non ha traduzioni.
(function () {
  const root = document.querySelector('.pron-lesson');
  if (!root) return;
  const msg = root.dataset;
  const base = msg.audioBase;
  const src = (id) => `${base}${id}.mp3`;
  const fill = (template, n, t) => template.replace('{n}', n).replace('{t}', t);

  // --- Audio ----------------------------------------------------------------
  let current = null;
  let currentButton = null;
  function play(id, slow, button) {
    if (current) current.pause();
    if (currentButton) currentButton.classList.remove('is-playing');
    const audio = new Audio(src(id));
    audio.preservesPitch = true;
    audio.playbackRate = slow ? 0.7 : 1;
    current = audio;
    currentButton = button || null;
    if (button) button.classList.add('is-playing');
    audio.addEventListener('ended', () => button && button.classList.remove('is-playing'));
    audio.play().catch(() => button && button.classList.remove('is-playing'));
  }
  root.addEventListener('click', (event) => {
    const button = event.target.closest('[data-audio]');
    if (!button) return;
    play(button.dataset.audio, button.classList.contains('pron-slow'), button);
  });

  // --- Punteggi ---------------------------------------------------------------
  const storageKey = `pronuncia:${location.pathname}`;
  let best = {};
  try {
    best = JSON.parse(localStorage.getItem(storageKey) || '{}');
  } catch (_) {}
  const quizzes = [...root.querySelectorAll('.pron-quiz')];
  const totalQuestions = quizzes.reduce((sum, quiz) => sum + quiz.querySelectorAll('.pron-q').length, 0);

  function saveProgress() {
    const done = quizzes.reduce((sum, quiz) => sum + (best[quiz.id] || 0), 0);
    try {
      localStorage.setItem(storageKey, JSON.stringify(best));
    } catch (_) {}
    const totalText = root.querySelector('.pron-total-text');
    const totalPercent = root.querySelector('.pron-total-percent');
    if (totalText) totalText.textContent = fill(msg.msgScore, done, totalQuestions);
    if (totalPercent) totalPercent.textContent = `${Math.round((done / totalQuestions) * 100)}%`;
    if (!('indexedDB' in window)) return;
    const request = indexedDB.open('italiano-con-martin', 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains('grammar-progress'))
        request.result.createObjectStore('grammar-progress', { keyPath: 'lessonId' });
    };
    request.onsuccess = () => {
      try {
        request.result
          .transaction('grammar-progress', 'readwrite')
          .objectStore('grammar-progress')
          .put({
            lessonId: location.pathname.replace(/[^\w-]+/g, '-'),
            path: location.pathname,
            score: done,
            total: totalQuestions,
            completedActivities: done,
            totalActivities: totalQuestions,
            updatedAt: new Date().toISOString(),
          });
      } catch (_) {}
    };
  }

  function updateScore(quiz) {
    const questions = [...quiz.querySelectorAll('.pron-q')];
    const right = questions.filter((q) => q.dataset.result === 'ok').length;
    quiz.querySelector('.pron-score').textContent = fill(msg.msgScore, right, questions.length);
    if (right > (best[quiz.id] || 0)) best[quiz.id] = right;
    saveProgress();
  }

  function feedback(q, ok, text) {
    const box = q.querySelector('.pron-fb');
    box.className = `pron-fb ${ok === null ? 'wait' : ok ? 'ok' : 'no'}`;
    box.textContent = text;
  }

  // Coppie: la pagina sceglie a caso la parola da ascoltare.
  function shuffle(q) {
    const options = q.dataset.pair.split('|');
    q.dataset.target = options[Math.floor(Math.random() * options.length)];
    q.dataset.listened = '';
    q.dataset.result = '';
    q.querySelectorAll('.pron-opt, .pron-syl').forEach((b) => {
      b.disabled = false;
      b.classList.remove('is-right', 'is-wrong');
    });
    feedback(q, null, '');
  }

  function reset(quiz) {
    quiz.querySelectorAll('.pron-q').forEach((q) => {
      if (q.dataset.pair) shuffle(q);
      else {
        q.dataset.result = '';
        q.dataset.listened = '';
        q.querySelectorAll('.pron-opt, .pron-syl').forEach((b) => {
          b.disabled = false;
          b.classList.remove('is-right', 'is-wrong');
        });
        feedback(q, null, '');
      }
    });
    quiz.querySelector('.pron-score').textContent = fill(msg.msgScore, 0, quiz.querySelectorAll('.pron-q').length);
  }

  quizzes.forEach((quiz) => {
    reset(quiz);
    quiz.addEventListener('click', (event) => {
      const again = event.target.closest('.pron-again');
      if (again) return reset(quiz);
      const q = event.target.closest('.pron-q');
      if (!q) return;
      // Il pulsante ▶ della domanda funziona anche dopo la risposta, per riascoltare.
      const listen = event.target.closest('.pron-q-play');
      if (listen) {
        q.dataset.listened = '1';
        if (q.dataset.pair) play(audioIdOf(q, q.dataset.target), false, listen);
        return;
      }
      if (q.dataset.result) return;
      const option = event.target.closest('.pron-opt');
      const syllable = event.target.closest('.pron-syl');
      if (!option && !syllable) return;
      if (q.dataset.needsListen && !q.dataset.listened) return feedback(q, null, msg.msgListen);
      let ok;
      let right;
      if (syllable) {
        ok = syllable.dataset.i === q.dataset.answer;
        right = q.querySelector(`.pron-syl[data-i="${q.dataset.answer}"]`);
        syllable.classList.add(ok ? 'is-right' : 'is-wrong');
        if (!ok) right.classList.add('is-right');
        q.querySelectorAll('.pron-syl').forEach((b) => (b.disabled = true));
        feedback(q, ok, ok ? msg.msgCorrect : `${msg.msgWrong} ${q.dataset.word}`);
      } else {
        const answer = q.dataset.pair ? q.dataset.target : q.dataset.answer;
        ok = option.dataset.value === answer;
        right = q.querySelector(`.pron-opt[data-value="${answer}"]`);
        option.classList.add(ok ? 'is-right' : 'is-wrong');
        if (!ok) right.classList.add('is-right');
        q.querySelectorAll('.pron-opt').forEach((b) => (b.disabled = true));
        const shown = right.dataset.label || answer;
        feedback(q, ok, ok ? msg.msgCorrect : `${msg.msgWrong} ${shown}`);
        // Esercizio C/G: dopo la risposta si sente la parola.
        if (!q.dataset.pair && q.dataset.audio) play(q.dataset.audio, false, null);
      }
      q.dataset.result = ok ? 'ok' : 'no';
      updateScore(quiz);
    });
  });
  function audioIdOf(q, word) {
    return q.querySelector(`.pron-opt[data-value="${word}"]`)?.dataset.id || word;
  }
  saveProgress();

  root.querySelector('.pron-reset-all')?.addEventListener('click', () => {
    best = {};
    quizzes.forEach(reset);
    saveProgress();
  });

  // --- Registratore -------------------------------------------------------------
  root.querySelectorAll('.pron-rec').forEach((box) => {
    const button = box.querySelector('.pron-rec-btn');
    const label = button.querySelector('span');
    const player = box.querySelector('audio');
    const note = box.querySelector('.pron-rec-msg');
    let recorder = null;
    let timer = null;
    button.addEventListener('click', async () => {
      if (recorder && recorder.state === 'recording') return recorder.stop();
      if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
        note.textContent = msg.msgMic;
        return;
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const chunks = [];
        recorder = new MediaRecorder(stream);
        recorder.addEventListener('dataavailable', (e) => chunks.push(e.data));
        recorder.addEventListener('stop', () => {
          clearTimeout(timer);
          stream.getTracks().forEach((t) => t.stop());
          if (player.src) URL.revokeObjectURL(player.src);
          player.src = URL.createObjectURL(new Blob(chunks, { type: recorder.mimeType }));
          player.hidden = false;
          player.setAttribute('aria-label', msg.msgYours);
          button.classList.remove('is-recording');
          label.textContent = msg.msgRecord;
          player.play().catch(() => {});
        });
        recorder.start();
        note.textContent = '';
        button.classList.add('is-recording');
        label.textContent = msg.msgStop;
        timer = setTimeout(() => recorder.state === 'recording' && recorder.stop(), 15000);
      } catch (_) {
        note.textContent = msg.msgMic;
      }
    });
  });
})();
