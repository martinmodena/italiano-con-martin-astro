/* Progresso negli indici del vocabolario, come negli indici della grammatica.
 *
 * Le lezioni salvano già le risposte nel localStorage (vocabulary.js per «Riconosci la parola»,
 * match.js per gli esercizi con trascinamento): qui si leggono le stesse chiavi e si contano le
 * risposte giuste. Il numero di esercizi di ogni lezione arriva da assets/vocabulary-totals.json,
 * calcolato a ogni build (src/pages/assets/vocabulary-totals.json.ts).
 */
(function () {
  const cards = [...document.querySelectorAll('a.vocabulary-category[href]')];
  const grid = document.querySelector('.vocabulary-grid');
  if (!cards.length || !grid) return;

  const language = (document.documentElement.lang || 'it').toLowerCase().split('-')[0];
  const labels = {
    it: { course: 'Progresso complessivo', lesson: 'Progresso', done: (c, t) => `Completati: ${c} su ${t}` },
    en: { course: 'Overall progress', lesson: 'Progress', done: (c, t) => `${c} of ${t} activities` },
    es: { course: 'Progreso total', lesson: 'Progreso', done: (c, t) => `${c} de ${t} actividades` },
    fr: { course: 'Progression globale', lesson: 'Progression', done: (c, t) => `${c} activités sur ${t}` },
    cs: { course: 'Celkový pokrok', lesson: 'Pokrok', done: (c, t) => `${c} z ${t} aktivit` },
    pl: { course: 'Postęp ogólny', lesson: 'Postęp', done: (c, t) => `${c} z ${t} ćwiczeń` },
    tr: { course: 'Genel ilerleme', lesson: 'İlerleme', done: (c, t) => `${t} etkinliğin ${c} tanesi` },
    de: { course: 'Gesamtfortschritt', lesson: 'Fortschritt', done: (c, t) => `${c} von ${t} Aktivitäten` },
    ja: { course: '全体の進捗', lesson: '進捗', done: (c, t) => `${t}個中${c}個` },
  };
  const text = labels[language] || labels.it;

  const readStorage = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key) || '{}') || {};
    } catch {
      return {};
    }
  };
  const storageKeys = () => {
    try {
      return Object.keys(localStorage);
    } catch {
      return [];
    }
  };

  // Stesse chiavi di vocabulary.js e match.js: il nome del file senza .html e la lingua della pagina.
  function completed(lessonId) {
    const words = Object.values(readStorage(`italiano-con-martin:vocabulary:${lessonId}:${language}:words:v2`)).filter(
      (entry) => entry && entry.correct
    ).length;
    const prefix = `italiano-con-martin:match:${lessonId}:${language}:`;
    const rows = storageKeys()
      .filter((key) => key.startsWith(prefix))
      .reduce((sum, key) => sum + Object.keys(readStorage(key)).length, 0);
    return words + rows;
  }

  function createSummary(label, done, total, className) {
    const percent = total ? Math.round((done / total) * 100) : 0;
    const wrapper = document.createElement('div');
    wrapper.className = className;
    wrapper.classList.toggle('is-complete', total > 0 && percent === 100);
    wrapper.innerHTML = `<div class="progress-heading"><strong>${label}</strong> <span>${text.done(done, total)} · ${percent}%</span></div><progress max="100" value="${percent}"></progress>`;
    return wrapper;
  }

  function render(totals) {
    let courseDone = 0;
    let courseTotal = 0;
    cards.forEach((card) => {
      const url = new URL(card.href, location.href);
      const lessonId = url.pathname.split('/').pop().replace(/\.html$/, '');
      let path = url.pathname;
      try {
        path = decodeURIComponent(path);
      } catch {
        // Un indirizzo non decodificabile resta com'è.
      }
      const total = totals[path] || 0;
      if (!total) return;
      const done = Math.min(completed(lessonId), total);
      courseDone += done;
      courseTotal += total;
      const summary = createSummary(text.lesson, done, total, 'lesson-link-progress');
      summary.style.marginTop = 'auto';
      summary.style.paddingTop = '14px';
      const body = card.querySelector('.vocabulary-category-body') || card;
      body.querySelector('.lesson-link-progress')?.remove();
      body.appendChild(summary);
    });
    if (!courseTotal) return;
    document.querySelector('.course-progress-container')?.remove();
    const container = document.createElement('div');
    container.className = 'course-progress-container';
    container.appendChild(createSummary(text.course, courseDone, courseTotal, 'course-progress-summary'));
    grid.insertAdjacentElement('beforebegin', container);
  }

  const script = document.currentScript;
  const totalsUrl = new URL('vocabulary-totals.json', script ? script.src : location.href);
  fetch(totalsUrl)
    .then((response) => (response.ok ? response.json() : {}))
    .then((totals) => {
      render(totals);
      // Tornando indietro da una lezione il browser può mostrare la pagina dalla cache: si ricalcola.
      window.addEventListener('pageshow', (event) => {
        if (event.persisted) render(totals);
      });
    })
    .catch(() => {});
})();
