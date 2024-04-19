const gameContainer = document.getElementById("game-container")
const gamePlay = document.getElementById("gamePlay")
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const scoreboard = document.getElementById("scoreboard")
const humanScore = document.getElementById("humanScore")
const computerScore = document.getElementById("computerScore")
const gameplayDisplay = document.getElementById("gameplayDisplay")


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
    let displayGameplayMessage;
    
    if (playerSelection === "rock" && computerSelection === "paper") {
        countComputer++;
        displayGameplayMessage = "You lose! Paper beats Rock"
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        countHuman++;
        displayGameplayMessage = "You win! Paper beats Rock"
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        countComputer++;
        displayGameplayMessage = "You lose! Rock beats Scissors"
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        countHuman++;
        displayGameplayMessage = "You win! Rock beats Scissors"
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        countComputer++;
        displayGameplayMessage = "You lose! Scissors beats paper"
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        countHuman++;
        displayGameplayMessage = "You win! Scissors beats paper"
    }
    if (playerSelection === computerSelection) {
        displayGameplayMessage = "tie"
    }
    gameplayDisplay.innerHTML += `<p class="message">Human: ${playerSelection}, Computer: ${computerSelection}</p>
        <p class="message"><strong>${displayGameplayMessage}</strong></p>`
    humanScore.innerHTML = countHuman;
    computerScore.innerHTML = countComputer;
    
}


function endGame() {
    // const endgameDiv = document.createElement("div");
    // const endGameTitle = document.createElement("h1");
    // endgameDiv.append(endGameTitle);
    // endGameTitle.textContent = "GAME OVER";
    // endGameTitle.setAttribute("class", "endGameTitle");
    gameContainer.innerHTML = `<div class="gameOver"><h1 class="endgameTitle">GAME OVER</h1>
    ${countHuman > countComputer ? "Human wins": "Computer wins"}
    <p>human score: ${countHuman}</p>
    <p>computer score: ${countComputer}</p>
    </div>`
}
