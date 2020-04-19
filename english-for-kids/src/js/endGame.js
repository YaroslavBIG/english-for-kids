import audioPlay from './Audio';
import indexHeader from './IndexHeader';
import indexMain from './indexMain';
import cardsMainGen from './CardsMainGen';
import { localSrorageInit, localStoragePage } from './LocalStorage';


function endGame() {
  const wrapper = document.body.querySelector('.wrapper');
  const errors = localStorage.getItem('errors');
  const finalContent = errors === '0' ? 'success' : 'failure';

  const final = document.createElement('div');
  final.classList.add('final');
  const img = document.createElement('img');
  img.setAttribute('src', `img/${finalContent}.png`);
  img.setAttribute('alt', finalContent);
  const elErrors = document.createElement('div');
  elErrors.innerText = `${errors} Errors`;

  wrapper.innerHTML = '';
  wrapper.append(final);
  if (finalContent === 'failure') { wrapper.querySelector('.final').appendChild(elErrors); }
  wrapper.querySelector('.final').appendChild(img);

  audioPlay(finalContent);

  setTimeout(() => {
    indexHeader();
    localSrorageInit();
    localStoragePage();
    indexMain();
    cardsMainGen();
  }, 4000);
}

export default endGame;
