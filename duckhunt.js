// const body = document.body;

//   const dog = document.getElementsByClassName('dog')
//   console.log(dog)

window.onload = function () {
  const body = document.body;

  var dog = document.getElementsByClassName('dog')
  console.log(dog)
 


  // 1. Create a <div> with the class "duck" and add it to the body.  
  const duckdiv = document.createElement("div")
  duckdiv.classList.add('duck')
  body.appendChild(duckdiv)

  duckdiv.classList.add("flap")

  setInterval(function () {
    duckdiv.classList.toggle("flap")
  }, 250)

  function moveDuck() {
    duckdiv.style.left = (Math.random() * window.innerWidth) + "px";
    duckdiv.style.top = (Math.random() * window.innerHeight) + "px";

  }
  setInterval(moveDuck, 1000)

  function createDuck() {
    const body = document.body;
    const duckdiv = document.createElement("div")
    duckdiv.classList.add('duck')
    body.appendChild(duckdiv)
    duckdiv.classList.add("flap")
    setInterval(function () {
      duckdiv.classList.toggle("flap")
    }, 250)

    function moveDuck() {
      duckdiv.style.left = (Math.random() * window.innerWidth) + "px";
      duckdiv.style.top = (Math.random() * window.innerHeight) + "px";

    }
    setInterval(moveDuck, 1000)

    return duckdiv
  }
  let defaultNumDucks = 2

  //add duck button
  const button = document.querySelector(".addDuck");
  //console.log(button)
  button.addEventListener("click", function () {
    console.log('add a duck')
    defaultNumDucks += 1
    console.log(defaultNumDucks)
    return defaultNumDucks
  })

  for (let i = 0; i < defaultNumDucks; i++) {
    createDuck()

    //select all ducks
    //loop through them
  }
  const ducks = document.querySelectorAll('.duck')

  console.log(ducks)

  for (let i = 0; i < ducks.length; i++) {
    ducks[i].addEventListener('click', function (e) {
      // console.log(e)
      // console.log('i clicked')
      ducks[i].classList.add('shot')
      setTimeout(() => {
        ducks[i].remove()

      }, 500);
      checkForWinner();
    })
    // function removeDuck(event){
    //   event.target.remove()
    // }
    //removeDuck()

    // duckdiv.addEventListener('click', function () {
    //   console.log('i clicked')
    // duckdiv.classList.add('shot')
  }






  let numDucks = document.getElementsByClassName('duck').length
  console.log(numDucks)




  function checkForWinner() {
    console.log('grab the ducks')
    let numDucks = document.getElementsByClassName('duck').length - 1
    console.log(numDucks)
    let dog = document.getElementsByClassName('dog')
    if (numDucks === 0) {
      let dog = document.getElementsByClassName('dog')
      dog.style.visibility = "visible";
      alert('YOU WIN')
      //dog.style.visibility = "visible";
      
      //body.appendChild(dog)
      //console.log
    }

  }
  //checkForWinner()

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying and change the way the duck is facing

  // FIN. You win 1 trillion tokens.  Play the day away!
};
