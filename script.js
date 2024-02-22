let playerScore = 0;
let computerScore = 0;

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

const checkIfGameOver = (playerScore, computerScore) => {
  return playerScore === 5 || computerScore === 5;
};

const checkWinner = (playerScore, computerScore) => {
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

const displayScore = () => {
  const scoreBoard = document.getElementById("score");
  scoreBoard.textContent = `${playerScore} - ${computerScore}`;
};

const displayText = (message) => {
  const displayText = document.getElementById("game-text");
  displayText.textContent = message;
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

  displayScore();

  if (checkIfGameOver(playerScore, computerScore)) {
    const gameResult = checkWinner(playerScore);
    displayText(gameResult);
    resetScore();
  }
};

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playersChoice = button.id;
    gameLoop(playersChoice);
  });
});
