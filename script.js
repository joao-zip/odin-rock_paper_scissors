function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(player, computer){
    if (player == computer) {
        console.log('You tied!');
        return 0;
    }else if((player == 'rock' && computer == 'scissors') ||
            (player == 'scissors' && computer == 'paper') ||
            (player == 'paper' && computer == 'rock')) {
                console.log('You won the round!');
                return 1;
    }else{
        console.log('You lose the round!');
        return -1;
    }
}

function game(){
    let playerChoice, result,
        playerPoints = 0, computerPoints = 0;

    while(playerPoints < 5 && computerPoints < 5){
        playerChoice = prompt("Your option: ", '');
        result = playRound(playerChoice, getComputerChoice());
        if(result == 1)
            playerPoints++;
        else if(result == -1)
            computerPoints++;
    }

    if(playerPoints == 5)
        console.log('You won the game!');
    else
        console.log('You lose the game!');
}

game();