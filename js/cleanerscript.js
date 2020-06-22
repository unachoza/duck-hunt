var dog = document.getElementsByClassName('dog');
console.log(dog[0]);
dog = dog[0];

window.onload = function () {
  const body = document.body;
  //add dog
  console.log(dog);

  function createDuck() {
    //add duck
    const duck = document.createElement('div');
    duck.classList.add('duck', 'flap');
    body.appendChild(duck);
    // flapping speed
    setInterval(() => {
      duck.classList.toggle('flap');
    }, 250);
    //make duck fly
    function moveDuck() {
      duck.style.left = Math.random() * window.innerWidth + 'px';
      duck.style.top = Math.random() * window.innerHeight + 'px';
    }
    //flying speed
    setInterval(moveDuck, 900);

    return duck;
  }
  //number of ducks
  let defaultNumDucks = 1;

  // add duck button
  const button = document.querySelector('.addDuck');
  console.log(button);
  button.addEventListener('click', function () {
    //console.log('add a duck')
    createDuck();
  });

  //loop creating multiple ducks
  for (let i = 0; i < defaultNumDucks; i++) {
    createDuck();
  }
  //collecting those ducks in an  "ducks" array
  const ducks = document.querySelectorAll('.duck');
  console.log(ducks);
  // adding shot to click event to each duck by looping through ducks array
  for (let i = 0; i < ducks.length; i++) {
    ducks[i].addEventListener('click', function () {
      ducks[i].classList.add('shot');
      setTimeout(() => {
        ducks[i].remove();
      }, 200); //speed of duck removal
      checkForWinner(dog); //calling check for winner function
    });
  }

  // tracking number of ducks
  let numDucks = document.getElementsByClassName('duck').length;
  console.log(numDucks);
  // You won Alert (+ dog ?)
  function checkForWinner(dog) {
    console.log(dog);
    console.log('grab the ducks');
    let numDucks = document.getElementsByClassName('duck').length - 1;
    console.log(numDucks);

    numDucks === 0 ? (dog.style.right = 450) : console.log('youwin');
  }
};
// };
