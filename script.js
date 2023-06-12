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
        return ("Won");
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return ("Won");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("Won");
    }
    else {
        return (`Lost`);
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