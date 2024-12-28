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
        getHumanChoice();
    }
    else {return choice;}
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        const outcomes = {
            rock: { scissors: "win", paper: "lose", rock: "tie" },
            paper: { rock: "win", scissors: "lose", paper: "tie" },
            scissors: { paper: "win", rock: "lose", scissors: "tie" }
        };
        
        const result = outcomes[humanChoice][computerChoice];
        
        if (result === "win") {
            ++humanScore;
            console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
        } else if (result === "lose") {
            ++computerScore;
            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
        } else {
            console.log("Tie!");
        }
    }

    for (let i = 0; i < 5; ++i) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
    }

    if (computerScore > humanScore) {console.log("You lost! Try again!")}
    else {console.log("You win! Great job!")}
}

playGame();