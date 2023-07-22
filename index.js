let gStart = document.getElementById("sGame")
let round = document.getElementById("round-count");
let computerChoice = document.getElementById("computer-choice");
let playerChoice = document.getElementById("player-choice");
let result = document.getElementById("results");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let playerPoints = document.getElementById("player-score");
let computerPoints = document.getElementById("computer-score");
let player;
let computer;
let count = 1;
pScore = 0;
cScore = 0;
let playActive = false;
let playerName = document.getElementById("player-name");

function gameStart(){
    let nickName = document.getElementById("name-el").value;
    if (nickName === '') {
        alert('Please enter your nickname to start the game.');
        return;
      }
    playerName.textContent = nickName;
    playRound();

    playActive = true;
    if (playActive === true) {
      gStart = disable;
    }

}

function playRound() {
  // Remove existing event listeners from the round buttons
  choiceBtns.forEach(button => button.removeEventListener("click", rpsButtonClick));

  // Add new event listener to the round buttons
  choiceBtns.forEach(button => button.addEventListener("click", rpsButtonClick));

}

function rpsButtonClick() {
  player = this.textContent; // 'this' refers to the clicked button
  console.log(player);
  if (player === "Rock") {
    playerChoice.src = "rock.png";
  } else if (player === "Paper") {
    playerChoice.src = "paper.png";
  } else if (player === "Scissors") {
    playerChoice.src = "scissors.png";
  }

  computerChoice.src = cChoice();
  result.textContent = getRoundResult(player, computer);
  if (getRoundResult(player, computer) === "WIN!") {
    pScore++;
    playerPoints.textContent = "Your current Score: " + pScore;
  } else if (getRoundResult(player, computer) === "LOSE!") {
    cScore++;
    computerPoints.textContent = "Computer Score: " + cScore;
  }

  count++;
  round.textContent = "ROUND " + count;
}


function cChoice(){
  const rps = ["Rock", "Paper", "Scissors"];
  computer = rps[(Math.floor(Math.random() * rps.length))];
  console.log(computer);
  if (computer === "Rock") {
    return "rock.png";
  }

  else if (computer === "Paper") {
    return "paper.png";
  }

  else  if (computer === "Scissors"){
    return "scissors.png";
  }
}

function getRoundResult(playerChoice, computerChoice) {
  if (playerChoice === computer) {
    return 'Draw!';
  } else if ((playerChoice == "Rock") && (computerChoice== "Scissors")) {
    return "WIN!";
  } else if ((playerChoice == "Paper") && (computerChoice == "Rock")) {
    return "WIN!";
  } else if ((playerChoice == "Scissors") && (computerChoice == "Paper")) {
    return "WIN!";
  } else if ((playerChoice == "Paper") && (computerChoice== "Scissors")) {
    return "LOSE!";
  } else if ((playerChoice == "Scissors") && (computerChoice == "Rock")) {
    return "LOSE!";
  } else if ((playerChoice == "Rock") && (computerChoice == "Paper")) {
    return "LOSE!";
  }

}

function endGame() {
    document.getElementById("right").style.display = "flex";
    let nickName = document.getElementById("name-el").value;
    let name = document.getElementById("name");
    name.textContent = nickName;
    document.getElementById("total-rounds").textContent = count - 1;
    document.getElementById("f-score").textContent = pScore + " / " + (count - 1);  

    //Checking final result
    if (pScore > cScore){
      document.getElementById("f-result").textContent = "YOU WIN";
    }
    else if (pScore < cScore) {
      document.getElementById("f-result").textContent = "YOU LOSE";
    }
    else {
      document.getElementById("f-result").textContent = "IT'S A TIE";
    }

}

function newGame() {
  document.getElementById("right").style.display = "none";
  //Resetting all variables to default
// Reset game variables
  pScore = 0;
  cScore = 0;
  count = 1;
  round.textContent = "Round ";

  // Reset player and computer choices
  playerChoice.src = "";
  computerChoice.src = "";

  // Reset game result text
  result.textContent = "";

  // Reset player and computer scores in the left section
  playerPoints.textContent = "Your current Score: 0";
  computerPoints.textContent = "Computer Score: 0";

}




