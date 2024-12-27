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

function getHumanChoice() {
    const userInput = prompt("Enter your choice below!");
    const choice = userInput.toLowerCase();
    if (choice != "rock" && choice != "paper" && choice != "scissors") {
        return null;
    }
    else {return choice;}
    }

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
        
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
  