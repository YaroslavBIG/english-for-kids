/* eslint-disable no-unused-expressions */
import { cards } from './Cards';
import { randomArray } from './Random';

function cardsCatGen(cat) {
  const fragment = document.createDocumentFragment();
  const category = cat;
  const categoryArr = cards[0];
  const getPositionSet = categoryArr.indexOf(category) + 1;
  const selectedCadegory = cards[getPositionSet];
  const { gameMode } = localStorage;
  let currentWords = '';

  const selectedCadegoryLen = selectedCadegory.length;
  const randomArr = randomArray(selectedCadegoryLen);

  const cardGen = () => {
    while (randomArr.length > 0) {
      const fragmentCard = document.createDocumentFragment();
      const numWord = randomArr.pop();
      const wordObj = selectedCadegory[numWord];

      currentWords += ` ${wordObj.word}`;

      const cardCategory = document.createElement('div');
      cardCategory.classList.add('cards-category');
      fragmentCard.appendChild(cardCategory);

      const card = document.createElement('div');
      card.classList.add('card');
      fragmentCard.querySelector('.cards-category').appendChild(card);

      const front = document.createElement('div');
      front.classList.add('card__fliped');
      front.classList.add('front');
      const srcImg = wordObj.image;
      front.setAttribute('style', `background-image: url(${srcImg});`);
      fragmentCard.querySelector('.card').appendChild(front);

      const cardText = document.createElement('div');
      cardText.classList.add('card__text');
      cardText.innerText = wordObj.word; // Front
      fragmentCard.querySelector('.front').appendChild(cardText);

      const buttonRotate = document.createElement('div');


      if (gameMode !== 'true') {
        cardText.classList.add('audio');
        fragmentCard.querySelector('.front').appendChild(cardText);

        front.classList.add('audio');

        const cardTextBack = document.createElement('div');
        cardTextBack.classList.add('card__text');
        cardTextBack.innerText = wordObj.translation;

        const back = document.createElement('div');
        back.classList.add('card__fliped');
        back.classList.add('back');
        back.setAttribute('style', `background-image: url(${srcImg});`);
        fragmentCard.querySelector('.card').appendChild(back);
        fragmentCard.querySelector('.back').appendChild(cardTextBack);


        buttonRotate.classList.add('card__button-rotate');
        const buttonRotateImg = 'img/rotate.png';
        buttonRotate.setAttribute('style', `background-image: url(${buttonRotateImg});`);
        fragmentCard.querySelector('.card').appendChild(buttonRotate);
      }
      if (gameMode === 'true') {
        front.classList.add('cards-category--cover');
        buttonRotate.classList.add('display__none');
        cardText.classList.add('display__none');
      }

      fragment.append(fragmentCard);
    }
  };

  const buttonStart = document.querySelector('.button__start').classList;
  gameMode === 'true' ? buttonStart.remove('display__none') : buttonStart.add('display__none');

  cardGen();
  localStorage.setItem('words', currentWords);
  // console.log(localStorage.words.trim().split(' '));
  const container = document.querySelector('.container');
  container.innerHTML = '';
  container.append(fragment);
}


export default cardsCatGen;
