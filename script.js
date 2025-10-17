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
    let choice = prompt("Rock, paper, scissors! (I choose...)");
    choice = choice.toLowerCase();
    if (choice == "rock") {
        return choice
    } else if (choice == "paper") {
        return choice
    } else if (choice == "scissors") {
        return choice
    }
}

console.log(getHumanChoice());

function playRound(humanChoice, computerChoice){
    //returns choice based on input
}