// import { cards } from './js/Cards';
import indexHeader from './js/IndexHeader';
import indexMain from './js/IndexMain';
import cardsCatGen from './js/CardsCatGen';

indexHeader();
indexMain();
cardsCatGen();

const cardsEvent = document.querySelectorAll('.card');
cardsEvent.forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle('is-flipped');
  });
});
