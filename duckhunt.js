window.onload = function () {
  const body = document.body;





  //console.log(body);


  // 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step
  // ( 1. create the element
  //   2. add a class to the element
  //   3. append the element to the body )
  const duckdiv = document.createElement("div")
  duckdiv.classList.add('duck')
  body.appendChild(duckdiv)
  //console.log(body)

  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  // https://www.w3schools.com/jsref/met_win_setinterval.asp
  //let flapdiv = document.createElement("div")
  duckdiv.classList.add("flap")
  //body.appendChild(flapdiv)
  //console.log(flapdiv)

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
    setInterval(moveDuck, 4000)

    return duckdiv
  }


  for (let i = 0; i < 4; i++) {
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
  ////////////////////select all class duckdiv, 

  // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left". Create
  // a function `moveDuck` that takes a nothing duck object as an argument and sets the
  // "top" and "left" CSS properties.
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"

  // function moveDuck (){
  //   duckdiv.style.left = (Math.random() * window.innerWidth) + "px";
  //   duckdiv.style.top = (Math.random() * window.innerHeight) + "px";

  // }
  //   setInterval(moveDuck, 1000)




  // 4. Try making the duck move to a different location every second (what did we use to do this several lines up??)

  // 5. Congratulations! Move on to part 2!

  // ---------------------------- PART 2 ---------------------------------



  // 6. Things are getting a bit messy. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object


  //}

  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function



  // 8. Uh oh, our ducks are overlapping.  Modify createDuck so each time
  //     it creates a duck, it appears in a random location
  // HINT: You may want to create a `randomPosition()` function that you can use
  //       to set the ducks' initial locations and in your `moveDuck()` function;

  // if duck is already there pick another spot
  // 1. 




  // 9. Keep going! Move onto part 3!

  // --------------------------- PART 3 ------------------------------------

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!


  /* a. grab my duck 
     b. add listener to duck
     c. function for listen adding shot class */
  // console.log('this is duckdiv:', duckdiv);
  // duckdiv.addEventListener('click', function () {
  //   console.log('i clicked')
  //   duckdiv.classList.add('shot')
  // })

  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second) Hint Hint...use setTimeout
  //     as for removing the element check out https://dzone.com/articles/removing-element-plain



  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"
  //grab ducks, 

  let numDucks = document.getElementsByClassName('duck').length
  console.log(numDucks)

  function checkForWinner() {
    console.log('grab the ducks')
    let numDucks = document.getElementsByClassName('duck').length-1 
    console.log(numDucks)
    if (numDucks === 0) {
      alert('YOU WIN')
    }

  }
//checkForWinner()

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying and change the way the duck is facing

  // FIN. You win 1 trillion tokens.  Play the day away!
};
