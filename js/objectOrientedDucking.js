////// //what is in a duck////////
class Duck {
  constructor() {
    // duck Image
    // function duck flapping

    this.defaultNumDucks = 1;
    this.speak = () => {
      console.log('quack');
    };
    this.flap = () => {
      setInterval(() => {
        this.duck.classList.toggle('flap');
      }, 250);
    };

    // this.moveDuck = (duck) => {
    //   duck.style.left = Math.random() * window.innerWidth + 'px';
    //   duck.style.top = Math.random() * window.innerHeight + 'px';
    // };

    // this.changeDuckSpeed = (speed) => {
    //   setInterval(this.moveDuck, speed);
    // };

    this.createDuck = () => {
      let body = document.body;
      console.log(body);
      const duck = document.createElement('div');
      console.log(duck);
      duck.classList.add('duck');
      document.body.appendChild(duck);
      // this.flap(this.duck);
      // this.moveDuck(duck);
      return duck;
    };
    this.addDuckFeatures = () => {};

    // this.shootDuck = () => {
    //   duck.addEventListener('click', () => {
    //     duck.classList.add('shot');
    //     setTimeout(() => {
    //       ducks[i].remove();
    //     }, 200); //speed of duck removal
    //     checkForWinner(dog); //calling check for winner function
    //   });
    // };
  }

  // function duck creating, keeping the ducks together, like an array or node collection or something
  // function ducking moving x and y
  // function duck moving faster than before
  // function ducks being shot
}

class dog {
  constructor() {
    // what is in a dog ?
    //   dog gif
    // dog invisible
    // dog visible after no more ducks
  }
}

// then there are buttons
window.onload = function () {
  let firstDuck = new Duck();
  let secondDuck = new Duck();
  let thirdDuck = new Duck();
  let fourthDuck = new Duck();
  firstDuck.createDuck();
  firstDuck.flap();
  firstDuck.speak();
};
