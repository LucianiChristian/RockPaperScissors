function computerTurn() {
    let computerChoice = Math.random();

    if (computerChoice <= 0.33) {
        return "rock";
    }
    else if (computerChoice > 0.33 && computerChoice <= 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function userTurn() {
    let userInput = prompt("Rock, paper, or scissors?");

    return userInput.toLowerCase();
}


function playRound() {
    let computerChoice = computerTurn();
    let userChoice = userTurn();

    if(userChoice === computerChoice) {
        return "Its a draw! Try again";
    }
    else if(userChoice === "rock" && computerChoice === "paper" ||){
        return "You win! Rock beats Paper!";
    }
    else if(userChoice === "paper" && computerChoice === "rock"){
        return "You win! Paper beats Rock!";
    }
    else if(userChoice === "scissors" && computerChoice === "paper"){
        return "You win! Scissors beats Paper!";
    }
    else if(computerChoice === "rock" && userChoice === "paper"){
        return "You lose! Rock beats Paper!";
    }
    else if(computerChoice === "paper" && userChoice === "rock"){
        return "You lose! Paper beats Rock!";
    }
    else if(computerChoice === "scissors" && userChoice === "paper"){
        return "You lose! Scissors beats Paper!";
    }
    else {
        return "Incorrect input! Try again.";
    }
}

function game() {
    let userWinCount = 0;
    let computerWinCount = 0;

    for(let i = 0; i < 5; i++){
        let consoleMessage = playRound();

        if(consoleMessage === "Incorrect input! Try again.") {
            i--;
        }

        if(consoleMessage.includes("You win!")){
            userWinCount++;
        }
        else if(consoleMessage.includes("You lose!")){
            computerWinCount++;
        }

        console.log(consoleMessage);
    }

    if(userWinCount > computerWinCount) {
        console.log("You've won!");
    }
    else if (computerWinCount > userWinCount) {
        console.log("You've lost!");
    }
    else {
        console.log("It's a tie!");
    }
}

game();


