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
    for(let i = 0; i < 5; i++){
        playerChoice = prompt("Your option: ");
        result = playRound(playerChoice.toLowerCase(),getComputerChoice());
        switch(result) {
            case 1:
                playerPoints++;
                break;
            case -1:
                computerPoints++;
                break;
            default:
                break;
        }
    }
    if(playerPoints > computerPoints)
        console.log("You won the game!");
    else
        console.log("You lose the game!");
}

game();