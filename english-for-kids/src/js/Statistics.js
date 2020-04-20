import cards from './Cards';
import { getWordStats } from './LocalStorage';

function tableHeadGen() {
  const thText = ['Category', 'Word', 'Translation', 'Clicked', 'Flipped', 'Guessed', 'Errors', 'Error rate'];
  const fragment = document.createDocumentFragment();
  const table = document.createElement('table');
  table.createTHead().insertRow();
  const tableTr = table.querySelector('tr');
  for (let count = 0; count < thText.length; count += 1) {
    const el = thText[count];
    const tableTh = document.createElement('th');
    tableTh.innerText = el;
    if (count <= 2) {
      tableTh.classList.add('text');
    } else {
      tableTh.classList.add('number');
    }
    tableTr.appendChild(tableTh);
  }
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  const thead = table.tHead;
  thead.firstChild.append();
  fragment.append(table);

  const container = document.querySelector('.container');
  container.innerHTML = '';
  container.append(fragment);
}

function statisticGen() {
  const tableBody = document.querySelector('tbody');
  const category = cards[0];

  function tdConstr(text) {
    const td = document.createElement('td');
    td.innerText = text;
    return td;
  }

  category.forEach((el) => {
    const fragmentStat = document.createDocumentFragment();
    const getPositionSet = category.indexOf(el) + 1;
    const selectedCadegory = cards[getPositionSet];
    const categoryLen = selectedCadegory.length;
    for (let count = 0; count < categoryLen; count += 1) {
      const firstCol = document.createElement('td');
      firstCol.innerText = el;
      fragmentStat.append(firstCol);
      const obj = selectedCadegory[count];
      const { word } = obj;
      fragmentStat.append(tdConstr(word));

      const { translation } = obj;
      fragmentStat.append(tdConstr(translation));

      const getStats = getWordStats(word); // get Stats
      getStats.forEach((elem) => {
        fragmentStat.append(tdConstr(Number(elem)));
      });
      tableBody.insertRow().append(fragmentStat);
    }
  });
}

export { tableHeadGen, statisticGen };
