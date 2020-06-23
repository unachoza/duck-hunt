let defaultSpeed = 900;
let defaultNumDucks = 4;
///////////////////////////////////REFACTOR THIS , changePopup(popup, changeState)
const showPopup = (element) => {
  element.classList.remove('hide');
  element.classList.add('popup-open');
};
const hidePopup = (element) => {
  element.classList.add('hide');
  element.classList.remove('popup-open');
};
///////////////////////////////////REFACTOR THIS^^^^^

window.onload = function () {
  const body = document.body;
  document.querySelector('#start-popup').classList.add('hide'); //hiding popups
  document.querySelector('#end-popup').classList.add('hide'); //hiding popups

  showPopup(document.querySelector('#start-popup'));

  document.querySelector('#start-button').addEventListener('click', () => {
    makeTheDucksAndStartTheGame();
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

  const makeTheDucksAndStartTheGame = () => {
    hidePopup(document.querySelector('#start-popup'));
    const startAudio = new Audio('https://res.cloudinary.com/dh41vh9dx/video/upload/v1592923996/start-round.mp3');
    startAudio.volume = 0.1;
    startAudio.play();
    setTimeout(() => {
      for (let i = 0; i < defaultNumDucks; i++) {
        createDuck();
      }
    }, 2000);
  };

  document.querySelector('.addDuck').addEventListener('click', () => createDuck());
  document.querySelector('#playAgain-button').addEventListener('click', () => {
    hidePopup(document.querySelector('#end-popup'));
    makeTheDucksAndStartTheGame();
    document.getElementById('dogWithDeadDucks').classList.remove('deadDogUp');
  });

  const showDog = () => {
    document.getElementById('dogWithDeadDucks').classList.add('deadDogUp');
  };

  const checkForWinner = () => {
    // You won Alert (+ dog )
    let numDucks = document.getElementsByClassName('duck').length - 1;
    if (numDucks === 0) {
      showDog();
      setTimeout(() => showPopup(document.querySelector('#end-popup')), 2000);
    }
  };
};
