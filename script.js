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

function getHumanChoice(){
    let choice = prompt("Let's play rock, paper, scissors!");
    choice = choice.toLowerCase();
    if (choice == "rock") {
        return choice
    } else if (choice == "paper") {
        return choice
    } else if (choice == "scissors") {
        return choice
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
            winner.textContent = "Congratulations, you won! Let's play again?";
            clearMessageFor(winner);
        } else if (computerScore == 5){
            winner.textContent = "You lost. Better luck next time ): Let's play again?";
            clearMessageFor(winner);
        }
        // const playAgain = document.createElement("button");
        // playAgain.textContent = "Play again?";
        // playAgain.addEventListener("click", () => {
            // playerScore.textContent = 0;
            // botScore.textContent = 0;
            humanScore = 0; 
            computerScore = 0;
        //     const string = document.createElement('p');
        //     string.textContent = "Let's play rock, paper, scissors!";
        //     clearMessageFor(string);
        // });
        // results.appendChild(playAgain);
    } 
}

function clearMessageFor(node){
    for (i = 0; results.children.length > 0; i++){
        results.removeChild(results.lastChild);
    }
    results.appendChild(node);
}
// function playGame(){
//     for (let i = 0; i < 5; i++) {
//         console.log(playRound(getHumanChoice(), getComputerChoice()));
//     }
//     if (humanScore == computerScore) {
//         return "It's a tie!"
//     } else if (humanScore >= computerScore){
//         return `You won ${humanScore} out of 5 times. Congratulations! You won!`
//     } else {
//         return `You won ${humanScore} out of 5 times. You lost. Better luck next time! :)`
//     }
// }

// console.log(playGame());

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");

const playerScore = document.querySelector("#playerScore");
const botScore = document.querySelector("#botScore");

rock.addEventListener("click", () => {
    var string = playRound("rock", getComputerChoice());
    const result = document.createElement("p");
    result.textContent = string;
    clearMessageFor(result);
    playerScore.textContent = humanScore;
    botScore.textContent = computerScore;
    checkWinner();
});

paper.addEventListener("click", () => {
    var string = playRound("paper", getComputerChoice());
    const result = document.createElement("p");
    result.textContent = string;
    clearMessageFor(result);
    playerScore.textContent = humanScore;
    botScore.textContent = computerScore;
    checkWinner();
});

scissors.addEventListener("click", () => {
    var string = playRound("scissors", getComputerChoice());
    const result = document.createElement("p");
    result.textContent = string;
    clearMessageFor(result);
    playerScore.textContent = humanScore;
    botScore.textContent = computerScore;
    checkWinner();
});


