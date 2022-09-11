function playRound(playerSelection, computerSelection) {
    
   // for (let i = 0; i < 5; i++) {  }

    if(playerSelection==computerSelection){
        return "draw";
    }
        else if(playerSelection=="rock"&&computerSelection=="scissor"){
        return "player win";
    }
         else if (playerSelection=="paper"&&computerSelection=="rock"){
        return "player win";
    }
         else if (playerSelection=="scissor"&&computerSelection=="paper"){
        return "player win";
    }
         else{
        return "u lost to a npc";
    }

    // your code here!
  }
function getComputerChoice(){
    let i = Math.random()
    if(i>.33&&i<.66){
        return "rock";
    }
     else if (i<.33){
        return "paper";
    }
     else{
        return "scissor";
     }
}
function game(){
    let computerwins=0;
    let playerwins=0;
    let playerSelection=prompt("choose wisely your weapon");
    let computerSelection= getComputerChoice()
    for (let i = 0; i < 3; i++)
    { 
        let playerSelection=prompt("choose wisely your weapon");
        let computerSelection= getComputerChoice();
        let match =playRound(playerSelection, computerSelection);
        if(match=="draw"){
            computerwins++;
            playerwins++;
        }else if(match=="u lost to a npc"){
            computerwins++;
        }
         else if(match=="player win"){
            playerwins++;
         }
    }
    if(computerwins>playerwins){
        return "loser";
    }else if(computerwins==playerwins){
        return "draw";
    }else{
        return "winner";
    }
}
  //let playerSelection=prompt("choose wisely your weapon");
   //let computerSelection= getComputerChoice()
  //console.log(playRound(playerSelection, computerSelection));
console.log(game());