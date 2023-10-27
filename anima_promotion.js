const promotionsSection = document.querySelector('.promotions-section');
const promotions = document.querySelectorAll('.promotion');

const options = {
  rootMargin: '0px',
  threshold: 0.2
};

const intersectionObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, options);

promotions.forEach(promotion => {
  intersectionObserver.observe(promotion);
});
