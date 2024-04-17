
const gameContainer = document.getElementById("game-container")
gameContainer.textContent = "Rock, paper, scissors"

function getComputerChoice() {
    let array = ["rock", "paper", "scissors"];
    return array[getRandomInt(array.length)]
}

function getRandomInt(max) {    //randomly picks index number for array
    return Math.floor(Math.random() * max);
}

console.log(getComputerChoice())
gameContainer.textContent = getComputerChoice(); //display computer choice

function humanChoice() {
    return "rock";
}

function playRound(playerSelection, computerSelection) {
    //let playerSelection = humanChoice();
    //let computerSelection = getComputerChoice();
    console.log("player selection: ", playerSelection)
    console.log("computer selection: ", computerSelection)
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock"
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock"
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors"
    }
    if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! Rock beats Scissors"
    }
    if (playerSelection === "paper" && computerSelection === "scissors"){
        return "You lose! Scissors beats paper"
    }
    if (playerSelection === computerSelection) {
        return "tie"
    }

}

//console.log(playRound(humanChoice(), getComputerChoice()))

function playGame() {
    let countHuman = 0;
    let countComputer = 0;
    
    while (countHuman < 3 && countComputer < 3 ){
        if (playRound(humanChoice(), getComputerChoice()) === "tie") {
            console.log("tie")
        }
        if (playRound(humanChoice(), getComputerChoice()).includes("You lose!")){
            console.log("lose")
            countComputer++;
        }
        if (playRound(humanChoice(), getComputerChoice()).includes("You win!")){
            console.log("win")
            countHuman++;
        }
    }
    console.log(countHuman);
    console.log(countComputer);
    endGame();
}
playGame();
function endGame() {
    console.log("EndGame")
}
