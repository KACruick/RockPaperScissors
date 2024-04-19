const gameContainer = document.getElementById("game-container")
const gamePlay = document.getElementById("gamePlay")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const scoreboard = document.getElementById("scoreboard")

let countHuman = 0;
let countComputer = 0;


function getComputerChoice() {
    let array = ["rock", "paper", "scissors"];
    return array[getRandomInt(array.length)]
}

function getRandomInt(max) { //randomly picks index number for array
    return Math.floor(Math.random() * max);
}

//binding rock button (value) to our rock variable
rock.addEventListener("click", function (e) {
    //console.log(e.target.value) //e is event, target of the event(rock element), value is the value of that target(the attribute value of the element)
    selection = e.target.value
    computerSelection = getComputerChoice();
    playRound(selection, computerSelection)
    console.log(selection, computerSelection)
    console.log("count human", countHuman, "count computer: ", countComputer)
    if (countHuman === 3 || countComputer === 3) {
        endGame();
    }
})
paper.addEventListener("click", function (e) {
    //console.log(e.target.value) //e is event, target of the event(rock element), value is the value of that target(the attribute value of the element)
    selection = e.target.value
    computerSelection = getComputerChoice();
    playRound(selection, computerSelection)
    console.log(selection, computerSelection)
    console.log("count human", countHuman, "count computer: ", countComputer)
    if (countHuman === 3 || countComputer === 3) {
        endGame();
    }
})
scissors.addEventListener("click", function (e) {
    //console.log(e.target.value) //e is event, target of the event(rock element), value is the value of that target(the attribute value of the element)
    selection = e.target.value
    computerSelection = getComputerChoice();
    playRound(selection, computerSelection)
    console.log(selection, computerSelection)
    console.log("count human", countHuman, "count computer: ", countComputer)
    if (countHuman === 3 || countComputer === 3) {
        endGame();
    }
})


function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "paper") {
        countComputer++;
        return "You lose! Paper beats Rock"
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        countHuman++;
        return "You win! Paper beats Rock"
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        countComputer++;
        return "You lose! Rock beats Scissors"
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        countHuman++;
        return "You win! Rock beats Scissors"
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        countComputer++;
        return "You lose! Scissors beats paper"
    }
    if (playerSelection === computerSelection) {
        return "tie"
    }

}


function endGame() {
    console.log(countHuman)
    console.log(countComputer)
    console.log("EndGame")
}
