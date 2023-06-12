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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let match = 0; match < 5; match++) {
        let player = prompt("Rock, Paper or Scissor? ");
        let computer = getComputerChoice();
        let roundOutcome = playRound(player, computer);

        if (roundOutcome === "Lost") {
            computerScore++;
        }
        else if (roundOutcome === "Won") {
            playerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("Congratulations! You won");
    }
    else if (playerScore < computerScore) {
        console.log("Oops! You lost");
    }
    else {
        console.log("It's a Tie")
    }
}