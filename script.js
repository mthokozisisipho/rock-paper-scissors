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
        return ("It's a Tie!");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return ("You won! Rock beats Scissors");
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return ("You won! Paper beats Rock");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("You won! Scissors beats Paper");
    }
    else {
        return (`You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`);
    }
}
