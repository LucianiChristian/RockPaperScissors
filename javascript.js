/* Game Values */
let userWinCount = 0;
let computerWinCount = 0;
let roundNumber = 0;



/* Switch To In Play Display */
function transitionInPlay() {  
    const startMenu = document.querySelector(".start-menu");
    const inPlay = document.querySelector(".in-play");

    startMenu.style.display = "none";
    inPlay.style.display = "flex";
}

/* Executes The Turn And Returns The Round Winner */
function round(userChoice) {
    // Computer Takes It's Turn
    let computerChoice = computerTurn();
    // Who Wins?
    let winner = roundWinner(userChoice, computerChoice);
    // Increment Win Count & Modify Scoreboard
    const playerScoreDisplay = document.querySelector(".player-score");
    const computerScoreDisplay = document.querySelector(".computer-score");
    const roundNumberDisplay = document.querySelector(".computer-choice-text");
    const scoreboardDisplay = document.querySelector(".scoreboard");
    const userChoiceImageDisplay = document.querySelector(".player-choice-image");
    const computerChoiceImageDisplay = document.querySelector(".computer-choice-image");
    const choseDisplay = document.querySelector(".choice");

    userChoiceImageDisplay.setAttribute('src', 'images/' + userChoice + '.jpg');
    computerChoiceImageDisplay.setAttribute('src', 'images/' + computerChoice + '.jpg');

    if (winner === "user") {
        userWinCount++;
        roundNumber++;
        playerScoreDisplay.innerHTML = "Player Score: " + userWinCount;
    }
    else if (winner === "computer") {
        computerWinCount++;
        roundNumber++;
        computerScoreDisplay.innerHTML = "Computer Score: " + computerWinCount;
    }

    roundNumberDisplay.innerHTML = "Round: " + roundNumber;

    console.log("User Choice -> " + userChoice+ "\nComputer Choice -> " + computerChoice + "\nWinner : " + winner);
    console.log("\nuserWinCount : " + userWinCount + "\ncomputerWinCount : " + computerWinCount);

    if(userWinCount === 5){
        scoreboardDisplay.innerHTML = '<div class="game-status"><h3 class="game-status-text">You Won The Game!</h3><button class="try-again" onclick="resetGame()">Try Again?</button></div>';
        choseDisplay.style.display = "none";
    }
    if(computerWinCount === 5){
        scoreboardDisplay.innerHTML = '<div class="game-status"><h3 class="game-status-text">You lost...</h3><button class="try-again" onclick="resetGame()">Try Again?</button></div>';
        choseDisplay.style.display = "none";
    }

}

/* Takes A Turn For The Computer */
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

/* Computes The Winner Based On User-Computer Choices */
function roundWinner(userChoice, computerChoice) {
    if(userChoice === computerChoice) 
    {
        return "draw";
    }
    else if(userChoice === "rock" && computerChoice === "scissors" || 
            userChoice === "paper" && computerChoice === "rock" || 
            userChoice === "scissors" && computerChoice === "paper")
    {
        return "user";
    }   
    else if(computerChoice === "rock" && userChoice === "scissors" ||
            computerChoice === "paper" && userChoice === "rock" ||
            computerChoice === "scissors" && userChoice === "paper")
    {
        return "computer";
    }
    else 
    {
        return "error";
    }
}

/* Resets The In Play Game State */
function resetGame() {
    const scoreboardDisplay = document.querySelector(".scoreboard");
    const computerChoiceTextDisplay = document.querySelector(".computer-choice-text");
    const choseDisplay = document.querySelector(".choice");

    userWinCount = 0;
    computerWinCount = 0;
    roundNumber = 0;
    scoreboardDisplay.innerHTML = '<h3 class="player-score">Player Score: 0</h3><h3 class="computer-score">Computer Score: 0</h3>';
    computerChoiceTextDisplay.innerHTML = 'Round: ';
    choseDisplay.style.display = "block";
}



