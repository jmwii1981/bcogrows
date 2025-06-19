export function initMenu() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('header nav');

  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}
