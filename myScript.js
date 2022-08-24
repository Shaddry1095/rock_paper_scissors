let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
   let choices = ['rock', 'paper', 'scissors']
    let choicesRandom = Math.floor(Math.random() * choices.length)
    let computerChoice = choices[choicesRandom]
    //console.log(choices[choicesRandom])
    
    return computerChoice
}




const playRound = (playerSelection, computerSelection) =>{
    //computerSelection = getComputerChoice()
    //playerSelection;
    let result;
    
    
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
            result = "You won, rock beats scissors"
            playerScore ++;
            console.log(`${result} your score is ${playerScore}, computer score is ${computerScore}`)
            console.log(`Player Selection:${playerSelection} Computer Selection ${computerSelection}`)
        }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
            result = "You won, sissors beats paper"
            playerScore ++;
            console.log(`${result} your score is ${playerScore}, computer score is ${computerScore}`)
            console.log(`Player Selection:${playerSelection} Computer Selection ${computerSelection}`)
        }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
            result = "You won, paper beats rock"
            playerScore ++;
            console.log(`${result} your score is ${playerScore}, computer score is ${computerScore}`)
            console.log(`Player Selection:${playerSelection} Computer Selection ${computerSelection}`)
        }
    else if (playerSelection === 'rock' && computerSelection === 'paper'){
            result = 'You lost, paper beats rock'
            computerScore ++;
            console.log(`${result} your score is ${playerScore}, computer score is ${computerScore}`)
            console.log(`Player Selection:${playerSelection} Computer Selection ${computerSelection}`)
        }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
            result = 'You lost, rock beats scissors'
            computerScore ++;
            console.log(`${result} your score is ${playerScore}, computer score is ${computerScore}`)
            console.log(`Player Selection:${playerSelection} Computer Selection ${computerSelection}`)
        }
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
            result = 'You lost, scissors beats paper'
            computerScore ++;
            console.log(`${result} your score is ${playerScore}, computer score is ${computerScore}`)
            console.log(`Player Selection:${playerSelection} Computer Selection ${computerSelection}`)
        }
    
    else{
            console.log(`Tie game  you score ${playerScore}, computer score${computerScore}`)
            console.log(`Player Selection:${playerSelection} Computer Selection ${computerSelection}`)
        }
       
    
     
    
    //return result
    
   
}




function game(){
    
    
    for (let i = 0; i <5; i++){
        const playerSelection =prompt('Rock, Paper, Scissors').toLowerCase()
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection,computerSelection))
    }

    if (playerScore > computerScore){
        console.log('You won!!!')
    }
    else if (computerScore > playerScore){
        console.log("The computer won!!")
    }
    else{
        console.log("Tie Game!!!")
    }

}
game();

