import { cards } from './Cards';

function cardsMainGen() {
  const fragmentMain = document.createDocumentFragment();
  const category = cards[0];
  const cardImage = [1, 7, 5, 4, 0, 0, 2, 6];
  const gameMode = localStorage.getItem('gameMode');
  // const cardsMain = document.querySelectorAll('.card__main');
  const classOrange = 'cards-main--orange';

  for (let count = 0; count < category.length; count += 1) {
    const curretCategory = category[count];
    const getPositionSet = category.indexOf(curretCategory) + 1;
    const selectedCadegory = cards[getPositionSet];
    const getSrcImg = selectedCadegory[cardImage[count]].image;

    const fragment = document.createDocumentFragment();

    const card = document.createElement('div');
    card.classList.add('card__main');
    gameMode === 'true' ? card.classList.add(classOrange) : card.classList.remove(classOrange);
    fragment.appendChild(card);

    const cardFront = document.createElement('div');
    cardFront.classList.add('front');
    fragment.querySelector('.card__main').appendChild(cardFront);

    const img = document.createElement('img');
    img.setAttribute('src', getSrcImg); // path
    img.setAttribute('alt', `${curretCategory}`);
    fragment.querySelector('.front').appendChild(img);

    const span = document.createElement('span');
    span.innerText = curretCategory;
    fragment.querySelector('.front').appendChild(span);

    fragmentMain.append(fragment);
  }

  const container = document.querySelector('.container');
  container.innerHTML = '';
  container.append(fragmentMain);
}

export default cardsMainGen;
