import cardsMainGen from './CardsMainGen';
import cardsCatGen from './CardsCatGen';
import { tableHeadGen, statisticGen } from './Statistics';
import { localStoragePage, setWordStats } from './LocalStorage';
import {
  gameStart, gameStop, gameBreak, game,
} from './Game';
import audioPlay from './Audio';
import { rating } from './Rating';

function addEvents() {
  const hamburger = document.getElementById('hamburgerButton');
  const headerMenu = document.querySelector('.header__menu-mobile');
  const links = ['Main Page', 'Action (set A)', 'Action (set B)', 'Action (set C)', 'Adjective', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions', 'Statistic'];

  document.body.addEventListener('click', (event) => {
    const eventText = event.target.parentElement.innerText;
    const haveAudio = event.target.classList.contains('audio');
    const elClassList = event.target.classList;
    const cardText = event.target.innerText;
    const eventClasses = event.target.classList.value;
    const eventId = event.target.id;
    const gameStarted = localStorage.getItem('gameStarted');
    const cardFront = event.target.parentElement.parentElement.querySelector('.front');
    const cardEngText = cardFront === null ? null : cardFront.innerText;

    if (haveAudio) {
      audioPlay(cardText);
      setWordStats(cardEngText, 1, 0, 0, 0);
    }
    if (links.includes(eventText)) {
      gameBreak();
      if (eventText === 'Main Page') {
        cardsMainGen();
        localStoragePage();
      }
      if (eventText === 'Statistic') {
        tableHeadGen();
        statisticGen();
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
      setWordStats(cardEngText, 0, 1, 0, 0);
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
      if (cardClick !== currentWord && gameStarted === 'true' && isActive) {
        audioPlay('error');
        let errorsCount = parseInt(localStorage.getItem('errors'), 10);
        errorsCount += 1;
        setWordStats(currentWord, 0, 0, 0, 1);
        localStorage.setItem('errors', errorsCount);
        rating('star-error');
      } else if (cardClick === currentWord) {
        audioPlay('correct');
        elClassList.add('guessed');
        setWordStats(currentWord, 0, 0, 1, 0);
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
      headerMenu.classList.toggle('menu-mobile__wrapper--visible');
    } else if (eventId !== 'hamburger__menu') {
      hamburger.classList.remove('hamburger_rotate');
      headerMenu.classList.remove('menu-mobile__wrapper--visible');
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
