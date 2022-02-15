// choose random numbers between 0,1 and 2
// 0 = rock, 1 = paper, 2 = scissors

function computerPlay(computerChoice) {
    let computerNumber = Math.floor(Math.random() * 3);
    if (computerNumber == 0) {
        computerChoice == 'rock';
    } else if (computerNumber == 1) {
        computerChoice == 'paper';
    } else if (computerNumber == 2) {
        computerChoice == 'scissors';
    }
    console.log(computerNumber);
    return computerNumber;
}

// make the game to be played in 5 rounds and calculates the scores of computer and player
// at the end of the 5 rounds, will output the winner
function game(playerSelection, computerSelection) {
    let computerScore = 0;
    let playerScore = 0;
    let sumComputer = 0;
    let sumPlayer = 0;

    for (let i = 0; i < 5; i++) {
        const player = window.prompt("Enter your choice", "rock");
        const playerText = player.toLowerCase();
        const playerSelection = playerText;
        const computerSelection = computerPlay();

        if (playerSelection == "rock" && computerSelection == 1) {
            computerScore = 1;
            console.log("you lost, paper beats rock");
        } else if (playerSelection == "rock" && computerSelection == 2) {
            playerScore = 1;
            console.log("you won, rock beats scissors");
        } else if (playerSelection == "paper" && computerSelection == 0) {
            playerScore = 1;
        } else if (playerSelection == "paper" && computerSelection == 2) {
            computerScore = 1;
            console.log("you lost, scissors beats paper");
        } else if (playerSelection == "scissors" && computerSelection == 0) {
            computerScore = 1;
            console.log("you lost, rock beats scissors");
        } else if (playerSelection == "scissors" && computerSelection == 1) {
            playerScore = 1;
            console.log("you won, scissors beats paper");
        } else {
            computerScore = 0;
            playerScore = 0;
            console.log("tie");
        }

        sumComputer = sumComputer + computerScore;
        sumPlayer = sumPlayer + playerScore;
        console.log(`Computer has ${sumComputer} points`);
        console.log(`You have ${sumPlayer} points`);
        playerScore = 0;
        computerScore = 0;
    }

    if (sumComputer > sumPlayer) {
        console.log('You lost! Computer won!');
    } else if (sumPlayer > sumComputer) {
        console.log('You won!');
    } else {
        console.log('It`s a tie!')
    }
}

game();
