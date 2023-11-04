// console.log("Namaste Duniya");

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score_board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter == "r") return "Rock";
    else if (letter == "p") return "Paper";
    else return "Scissor";
}

function win(userChoice, computerChoice) {
    console.log("User win");
    userScore++;
    // console.log(userScore);
    userScore_span.innerHTML = userScore;
    // computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(2).sub();
    const smallCompWord = "comp".fontsize(2).sub();
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
}
function loose(userChoice, computerChoice) {
    console.log("User loose");
    computerScore++;
    // console.log(userScore);
    computerScore_span.innerHTML = computerScore;
    // computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(2).sub();
    const smallCompWord = "comp".fontsize(2).sub();
    result_div.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}. You loose!`;
}
function draw(userChoice, computerChoice) {
    console.log("It is a draw");
    const smallUserWord = "user".fontsize(2).sub();
    const smallCompWord = "comp".fontsize(2).sub();
    result_div.innerHTML = `${convertToWord(computerChoice)}${smallUserWord} equals ${convertToWord(userChoice)}${smallCompWord}. It is a draw!`;
}

function game(userChoice) {
    // console.log("userchoice => " + userChoice);
    // console.log("Computer choice => " + getComputerChoice());
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            loose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
    } 
}



function main() {
    
    rock_div.addEventListener('click', function() {
        game("r");
    })
    
    paper_div.addEventListener('click', function() {
        game("p");
    })
    
    scissor_div.addEventListener('click', function() {
        game("s");
    })
}

main();
