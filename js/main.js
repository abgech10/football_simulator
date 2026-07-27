// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.nav-links');

if (hamburger && links) {
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    links.classList.toggle('show');
  });
}
