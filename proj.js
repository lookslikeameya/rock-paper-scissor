 let choices=['rock','paper','scissor'];
let humanScore=0, computerScore =0;
let humanchoice,computerchoice;

function getComputerChoice(){
   
    computerchoice= choices[getRandomInt(0, 3)];
}
function getRandomInt(min, max) {
  
  return Math.floor(Math.random() * (max - min) + min); 
}
function getHumanChoice(){
    let choice= parseInt(prompt("choose 0:rock , 1:paper, 2:scissor"));
    humanchoice=choices[choice];
}
function decide(x,y){

    if (x=='paper' && y=='rock'){
    alert( 'You win! paper defeated rock');
    humanScore++;
    }
    else if (x=='paper' && y=='scissor'){
    alert( 'You lose! scissor defeat paper');
    computerScore++;
    }
    
    else if (x=='rock' && y=='scissor'){
        alert('You win! rock defeat scissor');
        humanScore++;
    }
    else if (x=='rock' && y=='paper'){
    alert( "You lose! paper defeat rock");
    computerScore++;
    }
    else if (x=='scissor' && y=='rock'){
        alert('You lose! rock defeat scissor');

        computerScore++;
    }
    else if (x=='scissor' && y=='paper'){
        alert("You win! scissor defeat paper");
        humanScore++;
    }
    else{
        alert("play again...same choice")
        
    }
   
};

function playGame(){
    for(let i=0;i<5;i++){
        getComputerChoice();
        getHumanChoice();
        decide(humanchoice,computerchoice);

    }
    if(humanScore>computerScore){
    return('You win')}
    else if(computerScore>humanScore){
        return("You lose")
    }
    else{
        return("Draw!!")
    }
}
console.log(playGame())