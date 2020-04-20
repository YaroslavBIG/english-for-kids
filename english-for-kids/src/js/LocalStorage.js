function localSrorageInit() {
  localStorage.setItem('gameMode', 'false');
  localStorage.setItem('gameStarted', 'false');
  localStorage.setItem('errors', '0');
}

function localStoragePage(page = 'Main Page') {
  localStorage.setItem('page', page);
}

const setWordStats = (word, click = 0, flip = 0, guess = 0, error = 0) => {
  const getWord = localStorage.getItem(word);
  let newStats = '';
  if (getWord) {
    const wordArr = getWord.trim().split(' ');
    wordArr[0] = parseInt(wordArr[0], 10) + click; // click stat
    wordArr[1] = parseInt(wordArr[1], 10) + flip; // flip stat
    wordArr[2] = parseInt(wordArr[2], 10) + guess; // guess stat
    wordArr[3] = parseInt(wordArr[3], 10) + error;
    newStats = wordArr.join(' ');
  } else {
    newStats = `${click} ${flip} ${guess} ${error}`;
  }
  localStorage.setItem(word, newStats);
  return newStats.split(' ');
};

const getWordStats = (word) => {
  const stat = localStorage.getItem(word);
  const wordArr = stat === null ? setWordStats(word) : localStorage.getItem(word).trim().split(' ');
  return wordArr;
};
export {
  localSrorageInit, localStoragePage, setWordStats, getWordStats,
};
