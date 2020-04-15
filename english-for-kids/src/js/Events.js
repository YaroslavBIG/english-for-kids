import cardsMainGen from './CardsMainGen';
import cardsCatGen from './CardsCatGen';

function addEvents() {
  const hamburger = document.getElementById('hamburgerButton');
  const menuHamburger = document.getElementById('hamburger__menu');
  const links = ['Main Page', 'Action (set A)', 'Action (set B)', 'Action (set C)', 'Adjective', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'];

  document.body.addEventListener('click', (eventCont) => {
    const eventText = eventCont.target.parentElement.innerText;
    const cardText = eventCont.target.innerText;
    const eventClasses = eventCont.target.classList.value;
    const eventId = eventCont.target.id;
    const audio = cardText.length < 8 && cardText.length !== 0 ? new Audio(`audio/${cardText}.mp3`) : false;

    if (audio) {
      audio.play();
    }
    if (links.includes(eventText)) {
      cardsCatGen(eventText);
    }
    if (eventText === 'Main Page') {
      cardsMainGen();
    }
    if (eventClasses === 'card__button-rotate') {
      const targetCard = eventCont.target.parentElement;
      targetCard.classList.add('is-flipped');
      eventCont.target.classList.add('display__none');
      targetCard.addEventListener('mouseleave', () => {
        const cardsEventOnFocus = document.querySelectorAll('.card');
        const CardButtons = document.querySelectorAll('.card__button-rotate');
        cardsEventOnFocus.forEach((el) => {
          el.classList.remove('is-flipped');
          CardButtons.forEach((elem) => {
            elem.classList.remove('display__none');
          });
        });
      });
    }
    if (eventId === 'hamburgerButton') {
      hamburger.classList.toggle('hamburger_rotate');
      menuHamburger.classList.toggle('hidden');
    } else {
      hamburger.classList.remove('hamburger_rotate');
      menuHamburger.classList.add('hidden');
    }
  });

  // Card category button event
  // const cardsEvent = document.querySelectorAll('.card__button-rotate');
  // cardsEvent.forEach((el) => {
  //   el.addEventListener('click', () => {
  //     el.parentElement.classList.add('is-flipped');
  //     el.classList.add('display__none');
  //   });
  // });


  // document.addEventListener('mousemove', () => {
  //   const cardsEventOnFocus = document.querySelectorAll('.card');
  //   const CardButtons = document.querySelectorAll('.card__button-rotate');

  //   cardsEventOnFocus.forEach((el) => {
  //     el.classList.remove('is-flipped');
  //     CardButtons.forEach((elem) => {
  //       elem.classList.remove('display__none');
  //     });
  //   });
  // });

  // Hamburger
  // hamburger.addEventListener('click', () => {
  //   hamburger.classList.toggle('hamburger_rotate');
  //   menuHamburger.classList.toggle('hidden');


  // });

  // menuHamburger.addEventListener('click', (event) => {
  //   const eventText = event.target.innerText;

  //   if (links.includes(eventText)) {
  //     cardsCatGen(eventText);
  //   }
  //   if (eventText === 'Main Page') {
  //     cardsMainGen();
  //   }
  //   hamburger.classList.remove('hamburger_rotate');
  //   menuHamburger.classList.add('hidden');
  // });
}

export default addEvents;
