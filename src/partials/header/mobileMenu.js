document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('[data-burger-icon]');
  const desktopMenu = document.querySelector('[data-desktop-menu]');
  const mobileMenu = document.querySelector('[data-mob-menu]');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    desktopMenu.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  document.addEventListener('click', event => {
    if (
      !desktopMenu.contains(event.target) &&
      !burgerBtn.contains(event.target) &&
      !mobileMenu.contains(event.target)
    ) {
      burgerBtn.classList.remove('open');
      desktopMenu.classList.remove('open');
      mobileMenu.classList.remove('open');
    }
  });
});
