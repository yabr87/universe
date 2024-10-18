document.addEventListener('DOMContentLoaded', () => {
  const burgerWrapper = document.querySelector('[data-burger-btn]');
  const desktopMenu = document.querySelector('[data-desktop-menu]');
  const mobileMenu = document.querySelector('[data-mob-menu]');

  burgerWrapper.addEventListener('click', event => {
    // Предотвращаем всплытие события на внутреннем элементе
    event.stopPropagation();

    // Переключаем классы открытого состояния
    burgerWrapper.querySelector('[data-burger-icon]').classList.toggle('open');
    desktopMenu.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  document.addEventListener('click', event => {
    if (
      !desktopMenu.contains(event.target) &&
      !burgerWrapper.contains(event.target) &&
      !mobileMenu.contains(event.target)
    ) {
      closeMenus();
    }
  });

  window.addEventListener('scroll', () => {
    if (mobileMenu.classList.contains('open')) {
      closeMenus();
    }
  });

  function closeMenus() {
    burgerWrapper.querySelector('[data-burger-icon]').classList.remove('open');
    desktopMenu.classList.remove('open');
    mobileMenu.classList.remove('open');
  }
});
