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
console.log(getComputerChoice());

function getHumanChoice(){
    //returns choice based on input
}

function playRound(humanChoice, computerChoice){
    //returns choice based on input
}