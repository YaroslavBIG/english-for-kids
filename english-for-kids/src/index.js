import indexHeader from './js/IndexHeader';
import indexMain from './js/indexMain';
import cardsMainGen from './js/CardsMainGen';
import addEvents from './js/Events';
import { localSrorageInit, localStoragePage } from './js/LocalStorage';


indexHeader();
localSrorageInit();
localStoragePage();
indexMain();
cardsMainGen();
addEvents();
