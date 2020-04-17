/* eslint-disable no-unused-expressions */
import cardsMainGen from './CardsMainGen';
import cardsCatGen from './CardsCatGen';
import { localStoragePage } from './LocalStorage';

function addEvents() {
  const hamburger = document.getElementById('hamburgerButton');
  const menuHamburger = document.getElementById('hamburger__menu');
  const links = ['Main Page', 'Action (set A)', 'Action (set B)', 'Action (set C)', 'Adjective', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'];

  document.body.addEventListener('click', (eventCont) => {
    const eventText = eventCont.target.parentElement.innerText;
    const haveAudio = eventCont.target.classList.contains('audio');
    const cardText = eventCont.target.innerText;
    const eventClasses = eventCont.target.classList.value;
    const eventId = eventCont.target.id;
    const audio = haveAudio ? new Audio(`audio/${cardText}.mp3`) : false;

    if (audio) {
      audio.play();
    }
    if (links.includes(eventText)) {
      cardsCatGen(eventText);
      localStoragePage(eventText);
    }
    if (eventText === 'Main Page') {
      cardsMainGen();
      localStoragePage();
    }
    if (eventClasses === 'card__button-rotate') {
      const targetCard = eventCont.target.parentElement;
      targetCard.classList.add('is-flipped');
      eventCont.target.classList.add('display__none');
      targetCard.addEventListener('mouseleave', () => {
        const cardsEventOnFocus = document.querySelectorAll('.card');
        const CardButtons = document.querySelectorAll('.card__button-rotate');
        cardsEventOnFocus.forEach((el) => {
          el.classList.remove('is-flipped');
          CardButtons.forEach((elem) => {
            elem.classList.remove('display__none');
          });
        });
      });
    }
    if (eventId === 'hamburgerButton') {
      hamburger.classList.toggle('hamburger_rotate');
      menuHamburger.classList.toggle('hidden');
    } else {
      hamburger.classList.remove('hamburger_rotate');
      menuHamburger.classList.add('hidden');
    }
  });

  document.addEventListener('change', (event) => {
    const mySwitcher = event.target;
    const currentPage = localStorage.page;
    mySwitcher.checked ? localStorage.setItem('gameMode', 'true') : localStorage.setItem('gameMode', 'false');
    localStorage.page === 'Main Page' ? cardsMainGen() : cardsCatGen(currentPage);
  });
}

export default addEvents;