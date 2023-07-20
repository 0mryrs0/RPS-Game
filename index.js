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
 

function gameStart(){
    let playerName = document.getElementById("player-name");
    let nickName = document.getElementById("name-el").value;
    if (nickName === '') {
        alert('Please enter your nickname to start the game.');
        return;
      }

    playerName.textContent = nickName;
    anotherRound();

}

function anotherRound() {
  choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    console.log(player);
    if (player === "Rock"){
      playerChoice.src = "rock.png";
    }

    else if (player === "Paper"){
      playerChoice.src = "paper.png";
    }

    else if (player === "Scissors"){
      playerChoice.src = "scissors.png";
    }

    computerChoice.src = cChoice();
    result.textContent = getRoundResult(player, computer);
    if (getRoundResult(player, computer) === "WIN!") {
      pScore++;
      playerPoints.textContent = "Your current Score: " + pScore;

    }
    else if (getRoundResult(player, computer) === "LOSE!") {
      cScore++;
      computerPoints.textContent = "Computer Score: " + cScore;
    }
    count++;
    round.textContent = "ROUND "  + count;
  
}));
}

function cChoice(){
  const rps = ["Rock", "Paper", "Scissors"]
  computer = rps[(Math.floor(Math.random() * rps.length))]
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

function  nextRound() {
  round.textContent = "Round ";
  count++;
  round.textContent += count
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

}



