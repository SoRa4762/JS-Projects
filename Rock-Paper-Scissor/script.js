/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

//all the selection needed
let result = document.getElementById("result")
let playerScore = document.getElementById('player-score')
let hands = document.getElementById('hands')
let rpsButton = document.querySelectorAll(".rpsButton");
const endGameButton = document.getElementById("endGameButton")
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
function getComputerChoice() {
  let rpsOptions = ["Rock", "Paper", "Scissor"];
  let computerChoice = rpsOptions[Math.floor(Math.random() * 3)];
  return computerChoice;

  // let computerChoice = Math.ceil(Math.random() * 2);
  // if (computerChoice === 0) {
  //   return "Rock";
  // } if (computerChoice === 1){
  //   return "Paper";
  // } else {
  //   return "Scissor";
  // }
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;
  if (computerChoice === playerChoice) {
    score = 0;
  } else if (computerChoice === "Rock" && playerChoice === "Paper") {
    score = 1;
  } else if (computerChoice === "Paper" && playerChoice === "Scissor") {
    score = 1;
  } else if (computerChoice === "Scissor" && playerChoice === "Rock") {
    score = 1;
  } else {
    score = -1;
  }
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  switch (score) {
    case 1:
      result.innerText = `You Win!`;
      break;
    case 0:
      result.innerText = `It's a Draw!`;
      break;
    case -1:
      result.innerText = `You Lose!`;
  }
  // if (score === -1) {
  //   result.innerText = "You lose!"
  // } (score === 1) {
  //   result.innerText = "You Win!"
  // }else {
  //   result.innerText = "It's a Draw!"
  // }
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!

  playerScore.innerText = `${Number(playerScore.innerText) + score}`
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}

// ** Calculate who won and show it on the screen **
function onclickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice.value, computerChoice);
  showResult(score, playerChoice.value, computerChoice);
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onclickRPS function with the RPS button that was last clicked *

  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onclickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  rpsButton.forEach(rpsButton => {
    rpsButton.onclick = () => onclickRPS(rpsButton);
  })


  // Add a click listener to the end game button that runs the endGame() function on click
  endGameButton.onclick = () => endGame();
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  playerScore.innerText = "";
  result.innerText = "";
  hands.innerText = "";
}

playGame()