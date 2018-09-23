const dog = document.getElementsByClassName('dog')
    console.log(dog)
window.onload = function () {
    const body = document.body;
  //add dog
    // var dog = document.getElementsByClassName('dog')
    // console.log(dog)
 
    function createDuck() {
    //add duck
    const duck = document.createElement("div")
    duck.classList.add('duck')
    body.appendChild(duck)
  //attach duck flap
    duck.classList.add("flap")
   // flapping speed
    setInterval(function () {
      duck.classList.toggle("flap")
    }, 250)
  //make duck fly
    function moveDuck() {
      duck.style.left = (Math.random() * window.innerWidth) + "px";
      duck.style.top = (Math.random() * window.innerHeight) + "px";  
    }
    //flying speed
    setInterval(moveDuck, 1000)

    return duck
    }
    //number of ducks 
    let defaultNumDucks = 5
  
    // add duck button
    const button = document.querySelector(".addDuck");
    console.log(button)
    button.addEventListener("click", function () {
      //console.log('add a duck')
      defaultNumDucks += 1
      console.log(defaultNumDucks)
      for (let i = 0; i < defaultNumDucks; i++) {
        createDuck()
      }
      return defaultNumDucks
    })
  
    //loop creating multiple ducks
    for (let i = 0; i < defaultNumDucks; i++) {
      createDuck()
    }
    //collecting those ducks in an  "ducks" array
    const ducks = document.querySelectorAll('.duck')
    console.log(ducks)
    // adding shot to click event to each duck by looping through ducks array
    for (let i = 0; i < ducks.length; i++) {
      ducks[i].addEventListener('click', function () {
        ducks[i].classList.add('shot')
        setTimeout(() => {  ducks[i].remove()
        }, 200); //speed of duck removal 
        checkForWinner(); //calling check for winner function
      }) 
    }
    // tracking number of ducks 
    let numDucks = document.getElementsByClassName('duck').length
    console.log(numDucks)
    // You won Alert (+ dog ?)
    function checkForWinner() {
        
      console.log('grab the ducks')
      let numDucks = document.getElementsByClassName('duck').length - 1
      console.log(numDucks)
      
      if (numDucks === 0) {
        const dog = document.getElementsByClassName('dog')
        
        console.log(dog)
        // let dog = document.getElementsByClassName('dog')
       // dog.style.display ="inline"
        alert('YOU WIN')
        
      }
    }
  };
  