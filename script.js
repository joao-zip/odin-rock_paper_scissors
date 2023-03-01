function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(player, computer){
    if (player == computer) {
        return 0;
    }else if((player == 'rock' && computer == 'scissors') ||
            (player == 'scissors' && computer == 'paper') ||
            (player == 'paper' && computer == 'rock')) {
                return 1;
    }else{
        return -1;
    }
}

function changePlayerScore(score){
    score++;
    document.querySelector('.playerScore').innerText = score;
    return score;
}

function changePCScore(score){
    score++;
    document.querySelector('.computerScore').innerText = score;
    return score;
}

function resetPoints() {
    document.querySelector('.playerScore').innerText = 0;
    document.querySelector('.computerScore').innerText = 0;
}

function game() {

    let playerScore = 0, computerScore = 0;
    
    document.querySelector('.rock').addEventListener('click', function(){
        let result = playRound('rock', getComputerChoice());
        if(result == 1)
            playerScore = changePlayerScore(playerScore);
        else if(result == -1)
            computerScore = changePCScore(computerScore);

        if(playerScore == 5){
            alert('You won!');
            playerScore = 0;
            computerScore = 0;
            resetPoints();
        }else if(computerScore == 5){
            alert('You lost!');
            playerScore = 0;
            computerScore = 0;
            resetPoints();
        }
    });

    document.querySelector('.paper').addEventListener('click', function(){
        let result = playRound('paper', getComputerChoice());
        if(result == 1)
            playerScore = changePlayerScore(playerScore);
        else if(result == -1)
            computerScore = changePCScore(computerScore);
        
        if(playerScore == 5){
            alert('You won!');
            playerScore = 0;
            computerScore = 0;
            resetPoints();
        }else if(computerScore == 5){
            alert('You lost!');
            playerScore = 0;
            computerScore = 0;
            resetPoints();
        }
    });

    document.querySelector('.scissors').addEventListener('click', function(){
        let result = playRound('scissors', getComputerChoice());
        if(result == 1)
            playerScore = changePlayerScore(playerScore);
        else if(result == -1)
            computerScore = changePCScore(computerScore);
        
        if(playerScore == 5){
            alert('You won!');
            playerScore = 0;
            computerScore = 0;
            resetPoints();
        }else if(computerScore == 5){
            alert('You lost!');
            playerScore = 0;
            computerScore = 0;
            resetPoints();
        }
    });
}

game();