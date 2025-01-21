let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3);
    if (randomInt === 0) {
        return "rock";
    }
    else if (randomInt === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    const outcomes = {
        rock: { scissors: "win", paper: "lose", rock: "tie" },
        paper: { rock: "win", scissors: "lose", paper: "tie" },
        scissors: { paper: "win", rock: "lose", scissors: "tie" }
    };
    
    const result = outcomes[humanChoice][computerChoice];
    return result;
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    const result = playRound(button.id, getComputerChoice());
    if (result === "win") {
        humanScore++;
    } else if (result === "lose") {
        computerScore++;
    }
    updateScoreboard();
  });
});

function updateScoreboard() {
    const resultContainer = document.querySelector(".result");
    resultContainer.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
    
}

updateScoreboard();