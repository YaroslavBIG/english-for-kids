function localSrorageInit() {
  localStorage.clear();
  localStorage.setItem('gameMode', 'false');
}

function localStoragePage(page = 'Main Page') {
  localStorage.setItem('page', page);
}

export { localSrorageInit, localStoragePage };
// export default localStoragePage;
// export default localSrorageInit;
