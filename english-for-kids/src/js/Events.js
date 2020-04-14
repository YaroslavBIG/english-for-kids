function addEvents() {
  const cardsEvent = document.querySelectorAll('.card__button-rotate');
  cardsEvent.forEach((el) => {
    el.addEventListener('click', () => {
      el.parentElement.classList.add('is-flipped');
      el.classList.add('display__none');
    });
  });

  const cardsEventOnFocus = document.querySelectorAll('.card');
  const CardButtons = document.querySelectorAll('.card__button-rotate');
  cardsEventOnFocus.forEach((el) => {
    el.addEventListener('mousemove', () => {
      el.classList.remove('is-flipped');
      CardButtons.forEach((elem) => {
        elem.classList.remove('display__none');
      });
    });
  });

  // Hamburger
  const hamburger = document.getElementById('hamburgerButton');
  const menuHamburger = document.getElementById('hamburger__menu');
  const wrapper = document.querySelector('.wrapper');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_rotate');
    menuHamburger.classList.toggle('hidden');

    wrapper.addEventListener('click', () => {
      hamburger.classList.remove('hamburger_rotate');
      menuHamburger.classList.add('hidden');
    });
  });
}

export default addEvents;
