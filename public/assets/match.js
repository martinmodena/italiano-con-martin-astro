/* Esercizi «associa gli animali alle caratteristiche».
 *
 * Ogni `.match-section` ha serie (`.match-set`) di righe (`.match-row`): l'aggettivo, una zona dove
 * lasciare gli animali (`.match-drop`) e una barra di animali (`.match-chip`) che sta in fondo alla
 * serie. Il testo dei messaggi arriva dagli attributi `data-msg-*` della sezione, cosi' le 9 lingue
 * stanno tutte nell'HTML e qui non c'e' nessuna traduzione.
 *
 * Come si risponde (tutte e tre le strade fanno la stessa cosa):
 *   - trascinando l'animale sulla zona (mouse, dito, penna: eventi pointer);
 *   - toccando l'animale e poi la zona (telefono, o chi non riesce a trascinare);
 *   - con la tastiera: Invio sull'animale, poi Invio sulla zona.
 *
 * Una riga e' completa quando contiene almeno un animale giusto: di animali giusti ce n'e' quasi
 * sempre piu' di uno (`data-ok`). Gli sbagli si vedono un attimo e spariscono. I progressi restano
 * nel localStorage del dispositivo, come negli altri esercizi del vocabolario.
 */
(function () {
  const language = (document.documentElement.lang || 'it').toLowerCase().split('-')[0];
  const lessonId = location.pathname.split('/').pop()?.replace(/\.html$/, '') || 'index';

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
      // Gli esercizi funzionano anche senza localStorage.
    }
  };
  const fill = (text, vars) => (text || '').replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));

  document.querySelectorAll('.match-section').forEach(initSection);

  function initSection(section) {
    const mode = section.dataset.match;
    const total = Number(section.dataset.total) || 0;
    const storageKey = `italiano-con-martin:match:${lessonId}:${language}:${mode}:v1`;
    const saved = readStorage(storageKey);
    const rows = [...section.querySelectorAll('.match-row')];
    const progressBar = section.querySelector('.match-progress');
    const progressText = section.querySelector('.match-progress-text');
    const completeText = section.querySelector('.match-complete');
    const messages = {
      progress: section.dataset.msgProgress,
      correct: section.dataset.msgCorrect,
      wrong: section.dataset.msgWrong,
      complete: section.dataset.msgComplete,
    };
    let selected = null;

    const chipLabel = (slug, set) => set.querySelector(`.match-chip[data-animal="${slug}"]`);

    function updateProgress() {
      const done = rows.filter((row) => row.classList.contains('is-done')).length;
      progressBar.value = done;
      progressText.textContent = fill(messages.progress, { n: done, total });
      progressBar.classList.toggle('is-complete', done === total && total > 0);
      completeText.textContent = done === total && total > 0 ? messages.complete : '';
    }

    function persist() {
      const state = {};
      rows.forEach((row) => {
        const good = [...row.querySelectorAll('.match-placed.is-ok')].map((el) => el.dataset.animal);
        if (good.length) state[row.dataset.key] = good;
      });
      writeStorage(storageKey, state);
    }

    function addPlaced(row, slug, isOk) {
      const chip = chipLabel(slug, row.closest('.match-set'));
      if (!chip) return null;
      const placed = document.createElement('button');
      placed.type = 'button';
      placed.className = `match-placed ${isOk ? 'is-ok' : 'is-bad'}`;
      placed.dataset.animal = slug;
      const img = chip.querySelector('img').cloneNode();
      img.alt = '';
      const label = chip.querySelector('span').cloneNode(true);
      placed.append(img, label);
      row.querySelector('.match-drop').append(placed);
      return placed;
    }

    function setFeedback(row, text, kind) {
      const box = row.querySelector('.match-feedback');
      box.textContent = text;
      box.className = `match-feedback ${kind || ''}`.trim();
    }

    function place(row, slug) {
      const drop = row.querySelector('.match-drop');
      if (drop.querySelector(`.match-placed.is-ok[data-animal="${slug}"]`)) return;
      const okList = JSON.parse(row.dataset.ok || '[]');
      if (okList.includes(slug)) {
        addPlaced(row, slug, true);
        row.classList.add('is-done');
        setFeedback(row, messages.correct, 'is-ok');
        persist();
      } else {
        const wrong = addPlaced(row, slug, false);
        setFeedback(row, messages.wrong, 'is-bad');
        setTimeout(() => {
          wrong?.remove();
          if (!row.querySelector('.match-placed.is-bad')) setFeedback(row, row.classList.contains('is-done') ? messages.correct : '', row.classList.contains('is-done') ? 'is-ok' : '');
        }, 1600);
      }
      updateProgress();
    }

    function select(chip) {
      section.querySelectorAll('.match-chip[aria-pressed="true"]').forEach((c) => c.setAttribute('aria-pressed', 'false'));
      selected = chip;
      if (chip) chip.setAttribute('aria-pressed', 'true');
      section.querySelectorAll('.match-drop').forEach((d) => d.classList.toggle('is-ready', Boolean(chip) && d.closest('.match-set') === chip.closest('.match-set')));
    }

    // Un animale giusto gia' messo si toglie con un tocco (per correggere un errore fatto per caso).
    rows.forEach((row) => {
      const drop = row.querySelector('.match-drop');
      drop.addEventListener('click', (event) => {
        const placed = event.target.closest('.match-placed');
        if (placed?.classList.contains('is-ok')) {
          placed.remove();
          if (!row.querySelector('.match-placed.is-ok')) {
            row.classList.remove('is-done');
            setFeedback(row, '', '');
          }
          persist();
          updateProgress();
          return;
        }
        if (selected && selected.closest('.match-set') === row.closest('.match-set')) {
          place(row, selected.dataset.animal);
          select(null);
        }
      });
      drop.addEventListener('keydown', (event) => {
        if ((event.key === 'Enter' || event.key === ' ') && event.target === drop) {
          event.preventDefault();
          drop.click();
        }
      });
      row.querySelector('.match-hint').addEventListener('click', () => {
        const chip = chipLabel(row.dataset.hint, row.closest('.match-set'));
        if (!chip) return;
        chip.classList.remove('is-hint');
        void chip.offsetWidth;
        chip.classList.add('is-hint');
        setTimeout(() => chip.classList.remove('is-hint'), 2200);
      });
    });

    // --- trascinamento con gli eventi pointer ---
    let drag = null;
    let swallowClick = false;

    section.querySelectorAll('.match-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        if (swallowClick) return;
        select(selected === chip ? null : chip);
      });
      chip.addEventListener('pointerdown', (event) => {
        if (event.pointerType === 'mouse' && event.button !== 0) return;
        drag = {
          chip,
          id: event.pointerId,
          startX: event.clientX,
          startY: event.clientY,
          x: event.clientX,
          y: event.clientY,
          active: false,
          ghost: null,
          over: null,
          frame: 0,
        };
        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onUp);
        window.addEventListener('pointercancel', onCancel);
      });
    });

    function dropAt(x, y) {
      const drop = document.elementFromPoint(x, y)?.closest('.match-drop');
      if (!drop || !drop.closest('.match-set') || drop.closest('.match-set') !== drag.chip.closest('.match-set')) return null;
      return drop;
    }

    function setOver(drop) {
      if (drag.over === drop) return;
      drag.over?.classList.remove('is-over');
      drag.over = drop;
      drop?.classList.add('is-over');
    }

    function autoScroll() {
      if (!drag?.active) return;
      const tray = drag.chip.closest('.match-set').querySelector('.match-tray').getBoundingClientRect();
      if (drag.y < 110) window.scrollBy(0, -14);
      else if (drag.y > tray.top - 70 && drag.y < tray.top + 4) window.scrollBy(0, 14);
      drag.frame = requestAnimationFrame(autoScroll);
    }

    function onMove(event) {
      if (!drag || event.pointerId !== drag.id) return;
      drag.x = event.clientX;
      drag.y = event.clientY;
      if (!drag.active) {
        if (Math.hypot(drag.x - drag.startX, drag.y - drag.startY) < 8) return;
        drag.active = true;
        const ghost = drag.chip.cloneNode(true);
        ghost.classList.add('match-ghost');
        ghost.removeAttribute('data-animal');
        ghost.style.width = `${drag.chip.offsetWidth}px`;
        document.body.append(ghost);
        drag.ghost = ghost;
        drag.chip.classList.add('is-dragging');
        select(drag.chip);
        drag.frame = requestAnimationFrame(autoScroll);
      }
      drag.ghost.style.left = `${event.clientX}px`;
      drag.ghost.style.top = `${event.clientY}px`;
      setOver(dropAt(event.clientX, event.clientY));
      event.preventDefault();
    }

    function endDrag() {
      cancelAnimationFrame(drag.frame);
      drag.ghost?.remove();
      drag.chip.classList.remove('is-dragging');
      setOver(null);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointercancel', onCancel);
    }

    function onUp(event) {
      if (!drag || event.pointerId !== drag.id) return;
      const wasActive = drag.active;
      if (wasActive) {
        const drop = dropAt(event.clientX, event.clientY);
        if (drop) place(drop.closest('.match-row'), drag.chip.dataset.animal);
        swallowClick = true;
        setTimeout(() => {
          swallowClick = false;
        }, 0);
        select(null);
      }
      endDrag();
      drag = null;
    }

    function onCancel(event) {
      if (!drag || event.pointerId !== drag.id) return;
      endDrag();
      drag = null;
    }

    // --- ricomincia ---
    section.querySelector('.match-reset').addEventListener('click', () => {
      rows.forEach((row) => {
        row.querySelectorAll('.match-placed').forEach((el) => el.remove());
        row.classList.remove('is-done');
        setFeedback(row, '', '');
      });
      select(null);
      writeStorage(storageKey, {});
      updateProgress();
    });

    // --- stato salvato ---
    rows.forEach((row) => {
      (saved[row.dataset.key] || []).forEach((slug) => {
        if (JSON.parse(row.dataset.ok || '[]').includes(slug)) {
          addPlaced(row, slug, true);
          row.classList.add('is-done');
        }
      });
    });
    updateProgress();
  }
})();
