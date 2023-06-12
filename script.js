function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    if (choice === 1) {
        return ("rock");
    }
    else if (choice === 2) {
        return ("paper");
    }
    else {
        return ("scissors");
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        console.log("It's a Tie!");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You won! Rock beats Scissors");
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You won! Paper beats Rock");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You won! Scissors beats Paper");
    }
    else {
        console.log(`You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`);
    }
}
