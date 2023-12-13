const options = ['rock' , 'paper' , 'scissors'];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)]
    return(choice);
}

function checkWinner(playerSelection , computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "Its a Tie";
    }
    else if (result =="Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

}

function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("Rock | Paper | Scissors") ;
        if (choice == null) {
            continue;
        }
        const choiceLowerCase = choice.toLowerCase();
        if (options.includes(choiceLowerCase)) {
            validatedInput = true;
            return choiceLowerCase
        }
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log("Welcome to my game!")
    for (let i = 0; i < 5; i++){ 
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        if (checkWinner(playerSelection,computerSelection) == "Player") {
            playerScore++
        }
        else if (checkWinner(playerSelection,computerSelection) == "Computer"){
            computerScore++
        }
    }
    console.log ("Game Over!")
    if (playerScore > computerScore) {
        console.log("Player was the Winner!")
    }
    else if (playerScore < computerScore) {
        console.log("Computer was the Winner!")
    }
    else {
        console.log("We have a tie!")
    }
}
game();