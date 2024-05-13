const score= JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
    };

function playGame(playerMove){
    const computerMove = pickComputerMove();

    let result = '';

    if(playerMove === computerMove){
        result = 'Tie!';
    }

    else{
        if((playerMove === 'Rock' && computerMove === 'Paper') || (playerMove === 'Paper' && computerMove === 'Scissors') || (playerMove === 'Scissors' && computerMove === 'Rock')){
            result = 'You Win! :)';
        }

        else
        result = 'You Lose! :(';
    }

    if (result === 'You Win! :)') {
        score.wins += 1;
      } else if (result === 'You Lose! :(') {
        score.losses += 1;
      } else if (result === 'Tie!') {
        score.ties += 1;
      }

    localStorage.setItem('score', JSON.stringify(score));

    alert(`You picked ${playerMove}. Computer picked ${computerMove}.
Result: ${result} 
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function pickComputerMove(){
    let computerMove = '';
    const num = Math.random;

    if(num<=1/3){
        computerMove= 'Rock';
    }
    else if(1/3<=num<=2/3){
        computerMove= 'Paper';
    }
    else if(2/3<=num){
        computerMove= 'Scissors';
    }

    return computerMove;
}