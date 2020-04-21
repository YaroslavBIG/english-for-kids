import { sortGrid } from './Statistics';
import cardsCatGen from './CardsCatGen';

function diffWordGen() {
  const arrElements = sortGrid(7, 'number', true).splice(0, 8);
  const categ = [];
  const words = [];
  const rate = [];
  arrElements.forEach((el) => {
    categ.push(el.firstChild.innerText);
    words.push(el.firstChild.nextSibling.innerText);
    rate.push(el.lastChild.innerText);
  });

  for (let count = 0; count < rate.length; count += 1) {
    if (rate[count] === '0') {
      rate.splice(count, 1);
      count -= 1;
    }
  }
  if (!rate.length) {
    document.querySelector('.container').innerHTML = '<p>You don\'t have difficult words. Please come play more</p>';
  } else {
    const fragment = document.createDocumentFragment();
    const rateLen = rate.length;
    categ.slice(0, rateLen);
    words.slice(0, rateLen);
    for (let count = 0; count < rateLen; count += 1) {
      const currCard = cardsCatGen(categ[count], words[count]);
      fragment.append(currCard);
    }

    const container = document.querySelector('.container');
    container.innerHTML = '';
    container.append(fragment);
  }
}

export default diffWordGen;
