const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';


    hamburger.setAttribute('aria-expanded', !isOpen);
    navLinks.dataset.open = !isOpen;
})