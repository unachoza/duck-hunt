let defaultSpeed = 900;
let defaultNumDucks = 2; //number of ducks

window.onload = function () {
  const startAudio = new Audio('https://res.cloudinary.com/dh41vh9dx/video/upload/v1592923996/start-round.mp3');
  startAudio.play();

  const body = document.body;
  // document.getElementById('dogWithDeadDucks').classList.add('hide');
  document.querySelector('.popup').classList.add('hide');

  const createDuck = () => {
    //add duck
    startAudio.play();
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
    let ducks = document.querySelectorAll('.duck');

    for (let i = 0; i < ducks.length; i++) {
      ducks[i].addEventListener('click', () => {
        ducks[i].classList.add('shot');
        setTimeout(() => ducks[i].remove(), 200); //speed of duck removal
        checkForWinner(); //calling check for winner function
      });
    }
    return duck;
  };

  for (let i = 0; i < defaultNumDucks; i++) {
    //loop creating multiple ducks
    createDuck();
  }
  // add duck addDuckButton
  document.querySelector('.addDuck').addEventListener('click', () => createDuck());
  document.querySelector('#playAgain').addEventListener('click', () => location.reload());

  const showDog = () => {
    // document.getElementById('dogWithDeadDucks').classList.remove('hide');
    document.getElementById('dogWithDeadDucks').classList.add('deadDogUp');
  };
  const showPopup = () => {
    console.log('timeout');
    document.querySelector('.popup').classList.remove('hide');
    document.querySelector('.popup').classList.add('popup-open');
    // document.querySelector('.popup__content').classList.add('content-open');
  };
  const checkForWinner = () => {
    // You won Alert (+ dog )
    let numDucks = document.getElementsByClassName('duck').length - 1;
    if (numDucks === 0) {
      showDog();
      setTimeout(() => showPopup(), 2000);
    }
  };
};
