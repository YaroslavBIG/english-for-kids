import cardsMainGen from './CardsMainGen';
import cardsCatGen from './CardsCatGen';
import { localStoragePage } from './LocalStorage';
import {
  gameStart, gameStop, gameBreak, game,
} from './Game';
import audioPlay from './Audio';
import { rating } from './Rating';

function addEvents() {
  const hamburger = document.getElementById('hamburgerButton');
  const menuHamburger = document.getElementById('hamburger__menu');
  const links = ['Main Page', 'Action (set A)', 'Action (set B)', 'Action (set C)', 'Adjective', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'];

  document.body.addEventListener('click', (event) => {
    const eventText = event.target.parentElement.innerText;
    const haveAudio = event.target.classList.contains('audio');
    const elClassList = event.target.classList;
    const cardText = event.target.innerText;
    const eventClasses = event.target.classList.value;
    const eventId = event.target.id;
    const gameStarted = localStorage.getItem('gameStarted');


    if (haveAudio) {
      audioPlay(cardText);
    }
    if (links.includes(eventText)) {
      gameBreak();
      if (eventText === 'Main Page') {
        cardsMainGen();
        localStoragePage();
      } else {
        cardsCatGen(eventText);
        localStoragePage(eventText);
      }
      document.querySelectorAll('.menu-mobile_item a').forEach((el) => {
        if (el.classList.contains('header__menu_active')) {
          el.classList.remove('header__menu_active');
        }
        if (el.innerText === eventText) {
          el.classList.add('header__menu_active');
        }
      });
    }

    if (eventClasses === 'card__button-rotate') {
      const targetCard = event.target.parentElement;
      targetCard.classList.add('is-flipped');
      event.target.classList.add('display__none');
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

    // game events
    if (eventId === 'buttonStart') {
      localStorage.setItem('gameStarted', 'true');
      gameStart();
      game();
    }

    if (elClassList.contains('cards-category--cover')) {
      const currentWord = localStorage.getItem('currentWord');
      const cardClick = event.target.firstChild.innerText;
      const isActive = !elClassList.contains('guessed');
      // console.log(isActive);
      if (cardClick !== currentWord && gameStarted === 'true' && isActive) {
        audioPlay('error');
        let errorsCount = Number(localStorage.getItem('errors'));
        errorsCount += 1;
        localStorage.setItem('errors', errorsCount);
        rating('star-error');
        // console.log('errors ', errorsCount);
      } else if (cardClick === currentWord) {
        audioPlay('correct');
        elClassList.add('guessed');
        localStorage.removeItem('currentWord');
        rating('star-succes');
        setTimeout(() => {
          game();
        }, 1500);
      }
    }

    // hamburger events
    if (eventId === 'hamburgerButton') {
      hamburger.classList.toggle('hamburger_rotate');
      menuHamburger.classList.toggle('menu-mobile__wrapper--visible');
    } else {
      hamburger.classList.remove('hamburger_rotate');
      menuHamburger.classList.remove('menu-mobile__wrapper--visible');
    }
  });

  document.addEventListener('change', (event) => {
    const mySwitcher = event.target;
    const currentPage = localStorage.page;
    mySwitcher.checked ? gameStart() : gameStop();
    localStorage.page === 'Main Page' ? cardsMainGen() : cardsCatGen(currentPage);
    // game();
  });
}
export default addEvents;
