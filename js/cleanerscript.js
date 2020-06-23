let defaultSpeed = 900;
let defaultNumDucks = 4;

const showPopup = (element) => {
  element.classList.remove('hide');
  element.classList.add('popup-open');
};
const hidePopup = (element) => {
  element.classList.add('hide');
  element.classList.remove('popup-open');
};

window.onload = function () {
  const body = document.body;
  const removeElement = (element, removing) => {
    document.querySelector(element).classList.remove(removing);
  };
  const addElement = (element, adding) => {
    document.querySelector(element).classList.add(adding);
  };
  //opening sequence
  addElement('#start-popup', 'hide');
  addElement('#end-popup', 'hide');
  showPopup(document.querySelector('#start-popup'));

  //giving buttons functionality
  document.querySelector('#start-button').addEventListener('click', () => {
    makeTheDucksAndStartTheGame();
  });
  document.querySelector('.addDuck').addEventListener('click', () => createDuck());
  document.querySelector('#playAgain-button').addEventListener('click', () => {
    makeTheDucksAndStartTheGame(removeElement('#dogWithDeadDucks', 'deadDogUp'));
  });

  const createDuck = () => {
    const duck = document.createElement('div');
    duck.classList.add('duck');
    body.appendChild(duck);
    const moveDuck = () => {
      //make duck fly
      duck.style.left = Math.random() * window.innerWidth + 'px';
      duck.style.top = Math.random() * window.innerHeight + 'px';
    };
    setInterval(() => duck.classList.toggle('flap'), 250); // flapping speed
    setInterval(moveDuck, defaultSpeed); //flying speed

    let ducks = document.querySelectorAll('.duck'); //all ducks
    for (let i = 0; i < ducks.length; i++) {
      ducks[i].addEventListener('click', () => {
        ducks[i].classList.add('shot');
        setTimeout(() => ducks[i].remove(), 200); //speed of duck removal
        checkForWinner(); //calling check for winner function
      });
    }
    return duck;
  };

  const makeTheDucksAndStartTheGame = (hideDogCB = null) => {
    hidePopup(document.querySelector('#start-popup'));
    hidePopup(document.querySelector('#end-popup'));
    const startAudio = new Audio('https://res.cloudinary.com/dh41vh9dx/video/upload/v1592923996/start-round.mp3');
    startAudio.volume = 0.1;
    startAudio.play();
    setTimeout(() => {
      for (let i = 0; i < defaultNumDucks; i++) {
        createDuck();
      }
    }, 2000);
    hideDogCB;
  };

  const showDog = () => {
    addElement('#dogWithDeadDucks', 'deadDogUp');
  };

  const checkForWinner = () => {
    let numDucks = document.getElementsByClassName('duck').length - 1;
    if (numDucks === 0) {
      showDog();
      setTimeout(() => showPopup(document.querySelector('#end-popup')), 2000);
    }
  };
};
