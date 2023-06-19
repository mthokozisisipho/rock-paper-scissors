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

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("clicking");
}

function showModal(contentHtml, buttons) {
    const modal = document.createElement("div");

    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="inner_modal">
            <div class="modal_content">${contentHtml}</div>
            <div class="modal_bottom"></div>
        </div>
    `;

    for (const button of buttons) {
        const element = document.createElement("button");

        element.setAttribute("type", "button");
        element.classList.add("modal_button");
        element.textContent = button.label;
        element.addEventListener("click", () => {
            if (button.triggerClose) {
                document.body.removeChild(modal);
            }

            button.onClick(modal);
        });

        modal.querySelector(".modal_bottom").appendChild(element);
    }

    document.body.appendChild(modal);
}

function changePlayerImage(tool) {
    const image = document.querySelector(".player img");
    image.src = `/images/${tool}.png`;
}

function changeCompImage(tool) {
    const image = document.querySelector(".computer img");
    image.src = `/images/${tool}.png`;
}

const buttons = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;

const intro = document.createElement("p");
intro.textContent = `You and your friend have a hard time deciding what to eat for dinner.
                    So you decide to play rock paper scissors.
                    Who reaches the score of five wins the game.`;
                    