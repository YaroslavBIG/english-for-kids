function indexHeader() {
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

  const header = document.createElement('div');
  header.classList.add('header');
  fragment.append(header);

  const headerNavigation = document.createElement('nav');
  headerNavigation.classList.add('header__menu-mobile');
  fragment.querySelector('.header').append(headerNavigation);

  const hamburgerButton = document.createElement('span');
  hamburgerButton.classList.add('header__hamburger');
  hamburgerButton.classList.add('hamburger');
  hamburgerButton.setAttribute('id', 'hamburgerButton');
  fragment.querySelector('.header__menu-mobile').append(hamburgerButton);

  const hamburgerLine = document.createElement('span');
  hamburgerLine.classList.add('hamburger__line');
  fragment.querySelector('#hamburgerButton').append(hamburgerLine);

  const menuWrapper = document.createElement('div');
  menuWrapper.classList.add('menu-mobile__wrapper');
  menuWrapper.classList.add('hidden');
  menuWrapper.setAttribute('id', 'hamburger__menu');
  fragment.querySelector('.header__menu-mobile').appendChild(menuWrapper);

  const menuMobile = document.createElement('ul');
  menuMobile.classList.add('menu-mobile_table');
  fragment.querySelector('#hamburger__menu').appendChild(menuMobile); // UL

  fragment.querySelector('.menu-mobile_table').appendChild(liCostr('Main Page')); // LI
  fragment.querySelector('.menu-mobile_table').appendChild(liCostr('Action(set B)')); // LI
  fragment.querySelector('.menu-mobile_table').appendChild(liCostr('Action(set C)')); // LI
  fragment.querySelector('.menu-mobile_table').appendChild(liCostr('Adjective')); // LI
  fragment.querySelector('.menu-mobile_table').appendChild(liCostr('Animal(set A)')); // LI
  fragment.querySelector('.menu-mobile_table').appendChild(liCostr('Animal(set B)')); // LI
  fragment.querySelector('.menu-mobile_table').appendChild(liCostr('Clothes')); // LI
  fragment.querySelector('.menu-mobile_table').appendChild(liCostr('Emotion')); // LI

  const switcher = document.createElement('div');
  switcher.classList.add('switcher');
  fragment.querySelector('.header').append(switcher);
  document.body.append(fragment); // add in body
}

export default indexHeader;
