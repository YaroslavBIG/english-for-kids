import cards from './Cards';
import {
  getWordStats,
} from './LocalStorage';

function tableHeadGen() {
  const thText = ['Category', 'Word', 'Translation', 'Clicked', 'Flipped', 'Guessed', 'Errors', 'Error rate'];
  const gameStatus = localStorage.getItem('gameMode');
  const buttonStart = document.getElementById('buttonStart');
  buttonStart.classList.add('display__none');

  const fragmentTable = document.createDocumentFragment();

  const tableWrapper = document.createElement('div');
  tableWrapper.classList.add('wrapper_table');
  fragmentTable.append(tableWrapper);

  const fragmentWrap = fragmentTable.querySelector('.wrapper_table');

  const resetButton = document.createElement('button');
  resetButton.classList.add('button');
  resetButton.setAttribute('id', 'resetButton');
  resetButton.innerText = 'Reset';

  fragmentWrap.append(resetButton);

  const repeatWordButton = document.createElement('button');
  repeatWordButton.classList.add('button');
  repeatWordButton.setAttribute('id', 'repeatWordButton');
  repeatWordButton.innerText = 'Repeat difficult words';

  fragmentWrap.append(repeatWordButton);

  const tableWrap = document.createElement('div');
  tableWrap.classList.add('wrapper_table--scroll');
  fragmentWrap.append(tableWrap);

  const fragment = fragmentWrap.querySelector('.wrapper_table--scroll');

  const table = document.createElement('table');
  table.setAttribute('id', 'grid');
  if (gameStatus === 'true') {
    table.classList.add('table--play');
  }

  table.createTHead().insertRow();
  const tableTr = table.querySelector('tr');
  for (let count = 0; count < thText.length; count += 1) {
    const thFragment = document.createDocumentFragment();

    const el = thText[count];
    const tableTh = document.createElement('th');
    tableTh.innerText = el;
    if (count <= 2) {
      tableTh.setAttribute('data-type', 'string');
    } else {
      tableTh.setAttribute('data-type', 'number');
    }
    thFragment.appendChild(tableTh);

    const span = document.createElement('span');
    span.innerText = ' \u2191';
    thFragment.firstChild.appendChild(span);

    tableTr.appendChild(thFragment);
  }
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  const thead = table.tHead;
  thead.firstChild.append();
  fragment.append(table);

  const container = document.querySelector('.container');
  container.innerHTML = '';
  container.append(fragmentTable);
}

function statisticGen() {
  const tableBody = document.querySelector('tbody');
  const category = cards[0];

  tableBody.innerHTML = '';

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
      const {
        word,
      } = obj;
      fragmentStat.append(tdConstr(word));

      const {
        translation,
      } = obj;
      fragmentStat.append(tdConstr(translation));

      const getStats = getWordStats(word);
      getStats.forEach((elem) => {
        fragmentStat.append(tdConstr(parseInt(elem, 10)));
      });
      const err = parseInt(getStats[3], 10);
      const gues = parseInt(getStats[2], 10);
      const errorsRate = parseInt((err / (err + gues)) * 100, 10) || 0;

      fragmentStat.append(tdConstr(`${errorsRate}`));

      tableBody.insertRow().append(fragmentStat);
    }
  });
}

function sortGrid(colNum, type) {
  const tbody = document.querySelector('tbody');
  const rowsArray = Array.from(tbody.rows);
  let compare;

  switch (type) {
    case 'string':
      compare = function str(rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
      };
      break;
    default:
      compare = function num(rowA, rowB) {
        return rowB.cells[colNum].innerHTML - rowA.cells[colNum].innerHTML;
      };
      break;
  }

  rowsArray.sort(compare);

  tbody.append(...rowsArray);
}

export {
  tableHeadGen,
  statisticGen,
  sortGrid,
};
