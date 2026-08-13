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
})();
