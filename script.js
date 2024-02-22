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

const checkWinner = (playerScore, computerScore) => {
  if (playerScore > computerScore) {
    return "Congratulations, you won the game! You've triumphed over the opponent with a higher score.";
  } else if (playerScore < computerScore) {
    return "Unfortunately, you lost the game. The computer emerged victorious with a higher score.";
  } else {
    return "The game ends in a draw";
  }
};

const playGame = () => {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; ++i) {
    const playersChoice = prompt("Choose rock, paper, scissors").toLowerCase();
    const computerChoice = getComputerChoice();
    const result = playRound(playersChoice, computerChoice);

    if (result === "Win") {
      console.log(`You Won! ${playersChoice} beats ${computerChoice}`);
      playerScore += 1;
    } else if (result === "Loss") {
      console.log(`You Lose! ${computerChoice} beats ${playersChoice}`);
      computerScore += 1;
    } else {
      console.log("It's a Tie!");
    }

    console.log(`Result: Player ${playerScore} Computer ${computerScore}`);
  }

  const gameResult = checkWinner(playerScore, computerScore);
  console.log(gameResult);
};

playGame();
