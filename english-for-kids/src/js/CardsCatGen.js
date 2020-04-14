import { cards } from './Cards';

function cardsCatGen() {
  const fragment = document.createDocumentFragment();
  const category = 'Animal (set A)'; //! !!Var!!!!!!!!
  const categoryArr = cards[0];
  const getPositionSet = categoryArr.indexOf(category) + 1;
  const selectedCadegory = cards[getPositionSet];

  function randomInteger(min, max) {
    // случайное число от min до (max+1)
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  const randomArr = [];
  const selectedCadegoryLen = selectedCadegory.length - 1;
  while (randomArr.length < selectedCadegoryLen + 1) {
    const num = randomInteger(0, selectedCadegoryLen);
    if (!randomArr.includes(num)) randomArr.push(num);
  }

  const cardGen = () => {
    while (randomArr.length > 0) {
      const fragmentCard = document.createDocumentFragment();
      const numWord = randomArr.pop();
      const wordObj = selectedCadegory[numWord];

      const cardCategory = document.createElement('div');
      cardCategory.classList.add('cards-category');
      fragmentCard.appendChild(cardCategory);

      const card = document.createElement('div');
      card.classList.add('card');
      fragmentCard.querySelector('.cards-category').appendChild(card);

      const cardText = document.createElement('div');
      cardText.classList.add('card__text');
      cardText.innerText = wordObj.word; // Front

      const front = document.createElement('div');
      front.classList.add('card__fliped');
      front.classList.add('front');
      const srcImg = wordObj.image;
      front.setAttribute('style', `background-image: url(${srcImg});`);
      fragmentCard.querySelector('.card').appendChild(front);
      fragmentCard.querySelector('.front').appendChild(cardText);

      // const imgFront = document.createElement('img');
      // const srcImg = wordObj.image;
      // imgFront.setAttribute('src', srcImg);
      // imgFront.setAttribute('alt', wordObj.word);
      // fragmentCard.querySelector('.front').appendChild(imgFront);
      const cardTextBack = document.createElement('div');
      cardTextBack.classList.add('card__text');
      cardTextBack.innerText = wordObj.translation;

      const back = document.createElement('div');
      back.classList.add('card__fliped');
      back.classList.add('back');
      back.setAttribute('style', `background-image: url(${srcImg});`);
      fragmentCard.querySelector('.card').appendChild(back);
      fragmentCard.querySelector('.back').appendChild(cardTextBack);

      const buttonRotate = document.createElement('div');
      buttonRotate.classList.add('card__button-rotate');
      const buttonRotateImg = 'img/rotate.png';
      buttonRotate.setAttribute('style', `background-image: url(${buttonRotateImg});`);
      fragmentCard.querySelector('.card').appendChild(buttonRotate);

      // const imgBack = document.createElement('img');
      // imgBack.setAttribute('src', wordObj.image);
      // imgBack.setAttribute('alt', wordObj.translation);
      // fragmentCard.querySelector('.back').appendChild(imgBack);

      fragment.append(fragmentCard);
    }
  };
  cardGen();
  document.querySelector('.container').append(fragment);
}


export default cardsCatGen;
