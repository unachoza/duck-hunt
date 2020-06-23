window.onload = function () {
  const body = document.body;
  document.getElementById('dog').classList.add('hide');
  document.querySelector('.popup').classList.add('hide');

  const createDuck = () => {
    //add duck
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
  let defaultSpeed = 900;
  let defaultNumDucks = 2; //number of ducks
  for (let i = 0; i < defaultNumDucks; i++) {
    //loop creating multiple ducks
    createDuck();
  }
  // add duck addDuckButton
  document.querySelector('.addDuck').addEventListener('click', () => createDuck());
  document.querySelector('#playAgain').addEventListener('click', () => location.reload());

  const showDog = () => {
    document.getElementById('dog').classList.remove('hide');
  };
  const showPopup = () => {
    document.querySelector('.popup').classList.remove('hide');
    document.querySelector('.popup').classList.add('popup-open');
  };
  const checkForWinner = () => {
    // You won Alert (+ dog )
    let numDucks = document.getElementsByClassName('duck').length - 1;
    if (numDucks === 0) {
      showDog();
      showPopup();
    }
  };
};
