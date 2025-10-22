let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = parseInt(Math.random()*3); //generate 3 random numbers
    if (choice == 0) {
        return "rock"
    } else if (choice == 1) {
        return "paper"
    } else {
        return "scissors" 
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        return "Tie!"
    } else if ((humanChoice == "rock" || computerChoice == "rock") && 
               (humanChoice == "scissors" || computerChoice == "scissors")) {
        if (humanChoice == "rock") {
            humanScore += 1;
            return "Rock beats scissors. You won!"
        } else {
            computerScore += 1;
            return "Rock beats scissors. You lost :)"
        }
    } else if (humanChoice.length > computerChoice.length) {
        humanScore += 1;
        return `${capitalize(humanChoice)} beats ${computerChoice}. You won!`
    } else {
        computerScore += 1;
        return `${capitalize(computerChoice)} beats ${humanChoice}. You lost :)`
    }
}
    
function capitalize(string){
    let allLower = string.toLowerCase();
    let restLower = allLower.slice(1,string.length);
    let firstLetter = string.charAt(0);
    let capitalLetter = firstLetter.toUpperCase();
    return capitalLetter + restLower;
}

function checkWinner() {
    if (humanScore == 5 || computerScore == 5) {
        const winner = document.createElement("p");
        if (humanScore == 5){
            winner.textContent = "Congratulations, you won! Best out of 5 again?";
            clearMessageFor(winner);
        } else if (computerScore == 5){
            winner.textContent = "You lost. Better luck next time ): Best out of 5 again?";
            clearMessageFor(winner);
        }
        humanScore = 0; 
        computerScore = 0;
    } 
}

function clearMessageFor(node){
    for (i = 0; results.children.length > 0; i++){
        results.removeChild(results.lastChild);
    }
    results.appendChild(node);
}

function chose(element){
    var string = playRound(element, getComputerChoice());
    const result = document.createElement("p");
    result.textContent = string;
    clearMessageFor(result);
    playerScore.textContent = humanScore;
    botScore.textContent = computerScore;
    checkWinner();
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");

const playerScore = document.querySelector("#playerScore");
const botScore = document.querySelector("#botScore");

rock.addEventListener("click", () => {
    chose("rock");
});

paper.addEventListener("click", () => {
    chose("paper");
});

scissors.addEventListener("click", () => {
    chose("scissors");
});