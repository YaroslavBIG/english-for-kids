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

      const card = document.createElement('div');
      card.classList.add('cards-category');
      fragmentCard.appendChild(card);

      const front = document.createElement('div');
      front.classList.add('front');
      fragmentCard.querySelector('.cards-category').appendChild(front);

      const imgFront = document.createElement('img');
      const srcImg = wordObj.image;
      imgFront.setAttribute('src', srcImg);
      imgFront.setAttribute('alt', wordObj.word);
      fragmentCard.querySelector('.front').appendChild(imgFront);

      const back = document.createElement('div');
      back.classList.add('back');
      fragmentCard.querySelector('.cards-category').appendChild(back);

      const imgBack = document.createElement('img');
      imgBack.setAttribute('src', wordObj.image);
      imgBack.setAttribute('alt', wordObj.translation);
      fragmentCard.querySelector('.back').appendChild(imgBack);

      fragment.append(fragmentCard);
    }
  };
  cardGen();
  document.querySelector('.container').append(fragment);
}


export default cardsCatGen;
