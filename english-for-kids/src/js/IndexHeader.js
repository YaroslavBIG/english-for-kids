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
  const links = ['Main Page', 'Action (set A)', 'Action (set B)', 'Action (set C)', 'Adjective', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'];
  links.forEach((link) => { fragment.querySelector('.menu-mobile_table').appendChild(liCostr(link)); });

  const switcher = document.createElement('div');
  switcher.classList.add('switcher');
  fragment.querySelector('.header').append(switcher);
  document.body.append(fragment); // add in body
}

export default indexHeader;
