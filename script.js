let playerScore = 0;
let computerScore = 0;

const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const buttons = document.querySelectorAll("button");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};

const playRound = (playerSelection, computerSelection) => {
  let result = "";
  switch (true) {
    case playerSelection === computerSelection:
      result = "Tie";
      break;
    case playerSelection === "paper" && computerSelection === "rock":
      result = "Win";
      break;
    case playerSelection === "rock" && computerSelection === "paper":
      result = "Loss";
      break;
    case playerSelection === "rock" && computerSelection === "scissors":
      result = "Win";
      break;
    case playerSelection === "scissors" && computerSelection === "rock":
      result = "Loss";
      break;
    case playerSelection === "scissors" && computerSelection === "paper":
      result = "Win";
      break;
    case playerSelection === "paper" && computerSelection === "scissors":
      result = "Loss";
      break;
  }

  return result;
};

const checkIfGameOver = () => {
  return playerScore === 5 || computerScore === 5;
};

const checkWinner = () => {
  if (playerScore >= 5) {
    return "Congratulations, you won the game! You've triumphed over the opponent with a higher score.";
  } else {
    return "Unfortunately, you lost the game. The computer emerged victorious with a higher score.";
  }
};

const resetScore = () => {
  playerScore = 0;
  computerScore = 0;
};

const resetDisplay = () => {
  playerChoiceDisplay.innerHTML = "";
  computerChoiceDisplay.innerHTML = "";
  playerChoiceDisplay.textContent = "?";
  computerChoiceDisplay.textContent = "?";
};

const gameLoop = (playersChoice) => {
  const computerChoice = getComputerChoice();
  const result = playRound(playersChoice, computerChoice);

  if (result === "Win") {
    displayText(`You Won! ${playersChoice} beats ${computerChoice}`);
    playerScore += 1;
  } else if (result === "Loss") {
    displayText(`You Lose! ${computerChoice} beats ${playersChoice}`);
    computerScore += 1;
  } else {
    displayText("It's a Tie!");
  }

  displayChoices(playersChoice, computerChoice);
  displayScore();

  if (checkIfGameOver()) {
    gameOverModal();
  }
};

const getImage = (choice) => {
  const choices = {
    rock: "assets/images/rock.svg",
    paper: "assets/images/paper.svg",
    scissors: "assets/images/scissors.svg",
  };
  const image = document.createElement("img");
  image.src = choices[choice];
  return image;
};

const displayChoices = (playerChoice, computerChoice) => {
  const choices = {
    rock: "assets/images/rock.svg",
    paper: "assets/images/paper.svg",
    scissors: "assets/images/scissors.svg",
  };

  const playerChoiceDisplay = document.getElementById("player-choice");
  const computerChoiceDisplay = document.getElementById("computer-choice");

  playerChoiceDisplay.innerHTML = "";
  computerChoiceDisplay.innerHTML = "";

  const playerImage = getImage(playerChoice);
  const computerImage = getImage(computerChoice);

  playerChoiceDisplay.appendChild(playerImage);
  computerChoiceDisplay.appendChild(computerImage);
};

const displayScore = () => {
  const scoreBoard = document.getElementById("score");
  scoreBoard.textContent = `${playerScore} - ${computerScore}`;
};

const displayText = (message) => {
  const displayText = document.getElementById("game-text");
  displayText.textContent = message;
};

const gameOverModal = () => {
  const modalText = document.getElementById("modal-text");
  const gameResult = checkWinner(playerScore);
  overlay.style.visibility = "visible";
  modal.style.visibility = "visible";
  modalText.textContent = gameResult;
};

const newGame = () => {
  resetScore();
  displayScore();
  resetDisplay();
  modal.style.visibility = "hidden";
  overlay.style.visibility = "hidden";
  displayText("New game begins!");
};

buttons.forEach((button) => {
  if (button.id !== "new-game") {
    button.addEventListener("click", () => {
      const playersChoice = button.id;
      gameLoop(playersChoice);
    });
  } else {
    button.addEventListener("click", newGame);
  }
});
