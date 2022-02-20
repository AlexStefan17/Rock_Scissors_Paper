
const rock_button = document.querySelector('.rock');
const paper_buttton = document.querySelector('.paper');
const scissors_button = document.querySelector('.scissors');
const rockComputer_button = document.querySelector('.rock_comp');
const paperComputer_button = document.querySelector('.paper_comp');
const scissorsComputer_button = document.querySelector('.scissors_comp');
const results_div = document.querySelector('.results');
const userScore_span = document.querySelector('.user-score');
const computerScore_span = document.querySelector('.computer-score');
const roundWinner_p = document.querySelector('.p1');
const gameWinner_p = document.querySelector('.p2');

let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const computerNumber = Math.floor(Math.random() * 3);
    if (computerNumber == 0) {
        rockComputer_button.classList.add('border');
        paperComputer_button.classList.remove('border');
        scissorsComputer_button.classList.remove('border');

    } else if (computerNumber == 1) {
        paperComputer_button.classList.add('border');
        rockComputer_button.classList.remove('border');
        scissorsComputer_button.classList.remove('border');

    } else if (computerNumber == 2) {
        scissorsComputer_button.classList.add('border');
        rockComputer_button.classList.remove('border');
        paperComputer_button.classList.remove('border');
    }
    return choices[computerNumber];
}

function win(playerSelection, computerSelection) {
    playerScore++;
    userScore_span.innerHTML = playerScore + ':';
    computerScore_span.innerHTML = computerScore;
    roundWinner_p.innerHTML = `You won: <strong>${playerSelection}</strong> beats <strong>${computerSelection}</strong>`;
    if (playerScore != 3 || computerScore != 3) {
        gameWinner_p.innerHTML = '';
    }
    if (playerScore == 3) {
        gameWinner_p.innerHTML = `You won the game`;
        computerScore = 0;
        playerScore = 0;
    }


}

function lose(playerSelection, computerSelection) {
    computerScore++;
    userScore_span.innerHTML = playerScore + ':';
    computerScore_span.innerHTML = computerScore;
    roundWinner_p.innerHTML = `You lost: <strong>${playerSelection}</strong> lose against <strong>${computerSelection}</strong>`;
    if (playerScore != 3 || computerScore != 3) {
        gameWinner_p.innerHTML = '';
    }

    if (computerScore == 3) {
        gameWinner_p.innerHTML = 'Computer won the game';
        playerScore = 0;
        computerScore = 0;
    }

}
function draw(playerSelection, computerSelection) {
    roundWinner_p.innerHTML = 'Draw!';
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();

    if (playerSelection == 'rock') {
        rock_button.classList.add('border');
        paper_buttton.classList.remove('border');
        scissors_button.classList.remove('border');
    } else if (playerSelection == 'paper') {
        paper_buttton.classList.add('border');
        rock_button.classList.remove('border');
        scissors_button.classList.remove('border');
    } else if (playerSelection == 'scissors') {
        scissors_button.classList.add('border');
        paper_buttton.classList.remove('border');
        rock_button.classList.remove('border')
    }

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        win(playerSelection, computerSelection);
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        lose(playerSelection, computerSelection);
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        lose(playerSelection, computerSelection);
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        win(playerSelection, computerSelection);
    } else if (playerSelection == 'scissors' && computerSelection == "rock") {
        lose(playerSelection, computerSelection);
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        win(playerSelection, computerSelection);
    } else return draw(playerSelection, computerSelection);


}

rock_button.addEventListener('click', () => playRound('rock'));
paper_buttton.addEventListener('click', () => playRound('paper'));
scissors_button.addEventListener('click', () => playRound('scissors'));
