/* eslint-disable no-unused-expressions */
function localSrorageInit() {
  localStorage.clear();
  localStorage.setItem('gameMode', 'false');
  localStorage.setItem('gameStarted', 'false');
  localStorage.setItem('errors', '0');
}

function localStoragePage(page = 'Main Page') {
  localStorage.setItem('page', page);
}

export { localSrorageInit, localStoragePage };
