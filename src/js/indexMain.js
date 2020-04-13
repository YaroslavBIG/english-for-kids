function indexMain() {
  const fragment = document.createDocumentFragment();

  const main = document.createElement('main');
  fragment.append(main);

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  fragment.querySelector('main').appendChild(wrapper);

  const container = document.createElement('div');
  container.classList.add('container');

  fragment.querySelector('.wrapper').appendChild(container);

  document.body.appendChild(fragment);
}

export default indexMain;
