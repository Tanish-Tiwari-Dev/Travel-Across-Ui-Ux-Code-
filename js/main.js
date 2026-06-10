const cardsContainer = document.querySelector('.destination-cards');
const prevBtn = document.querySelector('.carousel-btn--prev');
const nextBtn = document.querySelector('.carousel-btn--next');

if (cardsContainer && prevBtn && nextBtn) {
  const scrollAmount = 279;

  prevBtn.addEventListener('click', () => {
    cardsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    cardsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
}

document.querySelector('.search-bar')?.addEventListener('submit', (event) => {
  event.preventDefault();
});
