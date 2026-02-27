let playerOneInp = document.getElementById("playerOneInp");
let startGameBtn = document.getElementById("startGameBtn");
let nameError = document.getElementById("nameError");
let firstScreen = document.getElementById("firstScreen");

// ==============================
let secondScreen = document.getElementById("secondScreen");
let playerOneName = document.getElementById("playerOneName");

startGameBtn.addEventListener("click", () => {
  if (playerOneInp.value == "") {
    nameError.style.display = "block";
  } else {
    firstScreen.style.display = "none";
    secondScreen.style.display = "block";
    playerOneName.innerHTML = playerOneInp.value;
  }
});

// Screen One End

// ===========
let playerOne_numInp = document.getElementById("playerOne_numInp");
let letsPlayBtn = document.getElementById("letsPlayBtn");
let numberError = document.getElementById("numberError");

// =================
let thirdScreen = document.getElementById("thirdScreen");

letsPlayBtn.addEventListener("click", function () {
  if (playerOne_numInp.value == "") {
    numberError.style.display = "block";
  } else {
    secondScreen.style.display = "none";
    thirdScreen.style.display = "block";
  }
});

// ============
let playerTwo_nameInp = document.getElementById("playerTwo_nameInp");
let startGameBtnPTwo = document.getElementById("startGameBtnPTwo");
let nameErrorPTwo = document.getElementById("nameErrorPTwo");
let fourthScreen = document.getElementById("fourthScreen");
let playerTwoName = document.getElementById("playerTwoName");

startGameBtnPTwo.addEventListener("click", () => {
  if (playerTwo_nameInp.value == "") {
    nameErrorPTwo.style.display = "block";
  } else {
    thirdScreen.style.display = "none";
    fourthScreen.style.display = "block";
    playerTwoName.innerHTML = playerTwo_nameInp.value;
  }
});

// =========

let playerTwo_numInp = document.getElementById("playerTwo_numInp");
let guessBtn = document.getElementById("guessBtn");
let numberErrorPTwo = document.getElementById("numberErrorPTwo");
let gameOverScreen = document.getElementById("gameOverScreen")
let result = document.getElementById("result")

guessBtn.addEventListener("click", function () {
  if (playerTwo_numInp.value == "") {
    numberErrorPTwo.style.display = "block"
  } 
  
else if(playerTwo_numInp.value = playerOne_numInp.value){
    result.innerHTML = "Player Two Win";
    fourthScreen.style.display = "none";
    gameOverScreen.style.display = "block"
    
    


}
else{
    result.innerHTML = "Player One Win";
     fourthScreen.style.display = "none";
     gameOverScreen.style.display = "block"
  
}
});
