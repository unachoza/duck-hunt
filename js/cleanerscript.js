window.onload = function () {
  const body = document.body;
  let ducks = document.querySelectorAll('.duck');
  document.getElementById('dog').classList.add('hide');

  const createDuck = () => {
    //add duck
    const duck = document.createElement('div');
    duck.classList.add('duck', 'flap');
    body.appendChild(duck);
    // flapping speed
    setInterval(() => {
      duck.classList.toggle('flap');
    }, 250);
    //make duck fly
    const moveDuck = () => {
      duck.style.left = Math.random() * window.innerWidth + 'px';
      duck.style.top = Math.random() * window.innerHeight + 'px';
    };
    //flying speed
    setInterval(moveDuck, 900);
    ducks = document.querySelectorAll('.duck');

    for (let i = 0; i < ducks.length; i++) {
      ducks[i].addEventListener('click', () => {
        ducks[i].classList.add('shot');
        setTimeout(() => {
          ducks[i].remove();
        }, 200); //speed of duck removal
        checkForWinner(); //calling check for winner function
      });
    }
    return duck;
  };
  //number of ducks
  let defaultNumDucks = 1;
  // add duck addDuckButton
  document.querySelector('.addDuck').addEventListener('click', () => createDuck());

  // addDuckButton.addEventListener('click', () => createDuck());

  //loop creating multiple ducks
  for (let i = 0; i < defaultNumDucks; i++) {
    createDuck();
  }
  // You won Alert (+ dog ?)
  const showDog = () => {
    console.log('please show', dog);
    document.getElementById('dog').classList.remove('hide');
  };
  const checkForWinner = () => {
    let numDucks = document.getElementsByClassName('duck').length - 1;
    console.log(numDucks, 'the number of');
    if (numDucks === 0) {
      showDog();
    }
  };
};
