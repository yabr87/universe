document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.menu-icon');
  const menu = document.querySelector('.menu');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    menu.classList.toggle('open');
  });

  document.addEventListener('click', event => {
    if (!menu.contains(event.target) && !burgerBtn.contains(event.target)) {
      burgerBtn.classList.remove('open');
      menu.classList.remove('open');
    }
  });
});
