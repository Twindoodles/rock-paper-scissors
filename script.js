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
    } else if ((humanChoice == "rock" || computerChoice == "rock") && (humanChoice == "scissors" || computerChoice == "scissors")) {
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
