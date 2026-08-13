(function () {
  const lessonLinks = [...document.querySelectorAll('a.lesson-card[href]')];
  if (!lessonLinks.length) return;

  const language = (document.documentElement.lang || 'it').toLowerCase().split('-')[0];
  const labels = {
    it: { course: 'Progresso complessivo', level: 'Progresso del livello', lesson: 'Progresso', done: (c, t) => `${c} di ${t} attività` },
    en: { course: 'Overall progress', level: 'Level progress', lesson: 'Progress', done: (c, t) => `${c} of ${t} activities` },
    es: { course: 'Progreso total', level: 'Progreso del nivel', lesson: 'Progreso', done: (c, t) => `${c} de ${t} actividades` },
    fr: { course: 'Progression globale', level: 'Progression du niveau', lesson: 'Progression', done: (c, t) => `${c} activités sur ${t}` },
    cs: { course: 'Celkový pokrok', level: 'Pokrok úrovně', lesson: 'Pokrok', done: (c, t) => `${c} z ${t} aktivit` },
    pl: { course: 'Postęp ogólny', level: 'Postęp poziomu', lesson: 'Postęp', done: (c, t) => `${c} z ${t} ćwiczeń` },
    tr: { course: 'Genel ilerleme', level: 'Seviye ilerlemesi', lesson: 'İlerleme', done: (c, t) => `${t} etkinliğin ${c} tanesi` },
    de: { course: 'Gesamtfortschritt', level: 'Niveaustufe', lesson: 'Fortschritt', done: (c, t) => `${c} von ${t} Aktivitäten` },
    ja: { course: '全体の進捗', level: 'レベルの進捗', lesson: '進捗', done: (c, t) => `${t}個中${c}個` },
  }[language] || null;
  const text = labels || { course: 'Progresso complessivo', level: 'Progresso del livello', lesson: 'Progresso', done: (c, t) => `${c} di ${t} attività` };

  function normalizedPath(href) {
    const path = new URL(href, location.href).pathname;
    return path.endsWith('/') ? path : path.replace(/\/+$/, '');
  }
  function expectedTotal(path) {
    return /(comparativ|comparative|comparatif|vergleich|srovnavaci|porownawcze|karsılastırmalı|比較級)/i.test(path) ? 13 : 10;
  }
  function completed(record) {
    if (!record) return 0;
    if (Number.isFinite(record.completedActivities)) return record.completedActivities;
    return (record.answers || []).filter((answer) => String(answer).trim()).length;
  }
  function createSummary(label, done, total, className) {
    const percent = total ? Math.round((done / total) * 100) : 0;
    const wrapper = document.createElement('div');
    wrapper.className = className;
    wrapper.innerHTML = `<div class="progress-heading"><strong>${label}</strong><span>${text.done(done, total)} · ${percent}%</span></div><progress max="100" value="${percent}"></progress>`;
    return wrapper;
  }
  function render(records) {
    const byPath = new Map(records.filter((record) => record.path).map((record) => [normalizedPath(record.path), record]));
    let courseDone = 0;
    let courseTotal = 0;
    lessonLinks.forEach((link) => {
      const path = normalizedPath(link.href);
      const record = byPath.get(path);
      const total = record?.totalActivities || expectedTotal(path);
      const done = Math.min(completed(record), total);
      courseDone += done; courseTotal += total;
      link.querySelector('.lesson-link-progress')?.remove();
      link.appendChild(createSummary(text.lesson, done, total, 'lesson-link-progress'));
    });
    document.querySelectorAll('.level-section').forEach((block) => {
      const links = [...block.querySelectorAll('a.lesson-card[href]')];
      const totals = links.reduce((sum, link) => {
        const path = normalizedPath(link.href); const record = byPath.get(path); const total = record?.totalActivities || expectedTotal(path);
        return { done: sum.done + Math.min(completed(record), total), total: sum.total + total };
      }, { done: 0, total: 0 });
      block.querySelector('.level-progress-summary')?.remove();
      const heading = block.querySelector('.level-title');
      if (heading) heading.insertAdjacentElement('afterend', createSummary(text.level, totals.done, totals.total, 'level-progress-summary'));
    });
    const container = document.querySelector('.section.compact-top .container, .page-intro .container, .grammar-index');
    if (container) {
      document.querySelector('.course-progress-summary')?.remove();
      container.insertBefore(createSummary(text.course, courseDone, courseTotal, 'course-progress-summary'), container.firstChild);
    }
  }
  function openAndRead() {
    if (!('indexedDB' in window)) { render([]); return; }
    const request = indexedDB.open('italiano-con-martin', 1);
    request.onupgradeneeded = () => { if (!request.result.objectStoreNames.contains('grammar-progress')) request.result.createObjectStore('grammar-progress', { keyPath: 'lessonId' }); };
    request.onsuccess = () => {
      const all = request.result.transaction('grammar-progress', 'readonly').objectStore('grammar-progress').getAll();
      all.onsuccess = () => render(all.result || []);
      all.onerror = () => render([]);
    };
    request.onerror = () => render([]);
  }
  openAndRead();
})();
