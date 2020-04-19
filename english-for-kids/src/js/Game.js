import { randomInteger } from './Random';
import audioPlay from './Audio';
import endGame from './endGame';
import { ratingRemove } from './Rating';

function game() {
  // console.log(localStorage.words);
  const imgArr = localStorage.words.trim().split(' ');
  const imgArrLen = imgArr.length;
  const wordPos = randomInteger(0, imgArrLen - 1);
  const currentWord = localStorage.getItem('currentWord') || imgArr.splice(wordPos, 1).toString();
  localStorage.setItem('currentWord', currentWord);
  const activeWords = imgArr.join(' ');
  localStorage.setItem('words', activeWords);
  // console.log(currentWord);
  if (currentWord) {
    audioPlay(currentWord);
  }
  if (!currentWord) {
    endGame();
  }
  // console.log('ARRAY', imgArr);
}

function buttonText() {
  const gameMode = localStorage.getItem('gameMode');
  const gameStarted = localStorage.getItem('gameStarted');
  const button = document.getElementById('buttonStart');
  // This function appeared thanks eslint and rules no-unused-expressions
  function text() {
    function start() {
      button.innerText = 'Start Game';
    }

    function repeat() {
      button.innerText = 'Repeat';
    }
    return gameMode === 'true' && gameStarted === 'true' ? repeat() : start();
  }
  text();
}

function gameStart() {
  localStorage.setItem('gameMode', 'true');
  buttonText();
}

function gameStop() {
  localStorage.setItem('gameMode', 'false');
  localStorage.setItem('gameStarted', 'false');
  localStorage.removeItem('currentWord');
  localStorage.setItem('errors', '0');
  ratingRemove();
  buttonText();
}

function gameBreak() {
  localStorage.setItem('gameStarted', 'false');
  localStorage.removeItem('currentWord');
  localStorage.setItem('errors', '0');
  ratingRemove();
  buttonText();

}


export {
  game, gameStart, gameStop, buttonText, gameBreak,
};
