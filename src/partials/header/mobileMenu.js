document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('[data-burger-btn]');
  const burgerIcon = document.querySelector('[data-burger-icon]');
  const menu = document.querySelector('[data-menu]');

  burgerBtn.addEventListener('click', () => {
    const isOpen = menu.getAttribute('data-menu-open') === 'true';
    menu.setAttribute('data-menu-open', !isOpen);
    burgerIcon.setAttribute('data-menu-open', !isOpen);
    console.log(`Menu is now ${!isOpen ? 'open' : 'closed'}`);
  });

  document.addEventListener('click', event => {
    if (!menu.contains(event.target) && !burgerBtn.contains(event.target)) {
      menu.setAttribute('data-menu-open', 'false');
      burgerIcon.setAttribute('data-menu-open', 'false');
    }
  });
});
