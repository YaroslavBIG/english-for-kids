function indexMain {
    const fragment = document.createDocumentFragment();

  const liCostr = (text) => {
    const liFragment = document.createDocumentFragment();
    const li = document.createElement('li');
    li.classList.add('menu-mobile_item');
    liFragment.appendChild(li);

    const link = document.createElement('a');
    link.setAttribute('href', '#');
    link.innerText = text;
    liFragment.querySelector('li').appendChild(link);

    return liFragment;
  };

  const main = document.createElement('main');
  fragment.append(main);

  const container = document.createElement('div');
  container.classList.add('container');
  fragment.append(container);

}

export default indexMain;