function indexMain() {
  const fragment = document.createDocumentFragment();

  const main = document.createElement('main');
  fragment.append(main);

  const container = document.createElement('div');
  container.classList.add('container');

  fragment.querySelector('main').appendChild(container);

  document.body.appendChild(fragment);
}

export default indexMain;
