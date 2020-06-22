////// //what is in a duck////////
class duck {
  constructor() {
    // duck Image
    // function duck flapping
    this.defaultNumDucks = 1;
    this.flap = () => {
      setInterval(() => {
        this.duck.classList.toggle('flap');
      }, 250);
    };
    this.moveDuck = () => {
      duck.style.left = Math.random() * window.innerWidth + 'px';
      duck.style.top = Math.random() * window.innerHeight + 'px';
    };
    this.changeDuckSpeed = (speed) => {
      setInterval(this.moveDuck, speed);
    };
    this.createDuck = () => {
      const duck = document.createElement('div');
      duck.classList.add('duck', 'flap');
      body.appendChild(duck);
      this.flap();
      this.moveDuck();
      return duck;
    };

    // function duck creating, keeping the ducks together, like an array or node collection or something
    // function ducking moving x and y
    // function duck moving faster than before
    // function ducks being shot
  }
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

let duck = new duck();
