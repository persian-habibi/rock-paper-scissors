



function playRound(playerSelection, computerSelection) {
    
   // for (let i = 0; i < 5; i++) {  }
    console.log(playerSelection+'f');
    console.log(computerSelection+'cccc');
    
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


  }
function getComputerChoice(){
    let i = Math.random()
    if(i>.33&&i<.66){
        
        rock.classList.add("cplaying");
        console.log("boys");
        console.log(rock.classList);
        return "rock";
    }
     else if (i<.33){
        paper.classList.add("cplaying");
        return "paper";
    }
     else{
        scissors.classList.add("cplaying");
        return "scissor";
     }
}
let pick='';
let choices=[];
let rchoices=[];
let rock=document.getElementsByClassName("rock")[0];
let left=document.getElementById("left");
let right=document.getElementById("right");
let winner=document.getElementById("winner");
let computer=document.getElementById("computer");
let paper=document.getElementsByClassName("paper")[0];
let scissors=document.getElementsByClassName("scissors")[0];
function game(){
    let computerwins=0;
    let playerwins=0;
            // waitForClick(pick);
    

           
    rock.addEventListener("click",function(){
        if(right.textContent==0&&left.textContent==0){
            winner.textContent=""
        }
                pick="rock";
                choices.push("rock");
                rock.classList.add("playing");
                rchoices.push(getComputerChoice());
               
                computer.textContent="computer choose "+rchoices[rchoices.length-1];
                if(playRound(choices[choices.length-1],rchoices[rchoices.length-1])=="player win"){
                  right.textContent++
                }
                if(playRound(choices[choices.length-1],rchoices[rchoices.length-1])=="draw"){
                    right.textContent++
                    left.textContent++
                }
                if(playRound(choices[choices.length-1],rchoices[rchoices.length-1])=="u lost to a npc"){
                    left.textContent++
                  }
            //alert("rock was clicked!")
            console.log(pick+"rock")
            if(left.textContent>2){
                right.textContent=0;
                left.textContent=0;
              winner.textContent="bozo";
              return "u are loser";
            }
            if(right.textContent>2){
                right.textContent=0;
                left.textContent=0;
                winner.textContent="winner";
                return "u are winner";
            }

    })
    paper.addEventListener("click",function(){
            //alert("paper was clicked!")
            choices.push("paper");
            rchoices.push(getComputerChoice());
            if(right.textContent==0&&left.textContent==0){
                winner.textContent=""
            }
            paper.classList.add("playing");
            computer.textContent="computer choose "+rchoices[rchoices.length-1];
            if(playRound(choices[choices.length-1],rchoices[rchoices.length-1])=="player win"){
                right.textContent++
              }
              if(playRound(choices[choices.length-1],rchoices[rchoices.length-1])=="draw"){
                  right.textContent++
                  left.textContent++
              }
              if(playRound(choices[choices.length-1],rchoices[rchoices.length-1])=="u lost to a npc"){
                  left.textContent++
                }
            if(left.textContent>2){
                    winner.textContent="bozo";
                    right.textContent=0;
                    left.textContent=0;
                    return "u are loser";
                  }
            if(right.textContent>2){
                      winner.textContent="winner";
                      right.textContent=0;
                      left.textContent=0;
                      return "u are winner";
                  }

            pick="paper";
            console.log(pick+"paper")
    })
    scissors.addEventListener("click",function(){
        //alert("scissors was clicked!")
        choices.push("scissor");
        if(right.textContent==0&&left.textContent==0){
            winner.textContent=""
        }
        rchoices.push(getComputerChoice());
        computer.textContent="computer choose "+rchoices[rchoices.length-1];
        scissors.classList.add("playing");
        if(playRound(choices[choices.length-1],rchoices[rchoices.length-1])=="player win"){
            right.textContent++
          }
          if(playRound(choices[choices.length-1],rchoices[rchoices.length-1])=="draw"){
              right.textContent++
              left.textContent++
          }
          if(playRound(choices[choices.length-1],rchoices[rchoices.length-1])=="u lost to a npc"){
              left.textContent++
              console.log(playRound(choices[choices.length-1],rchoices[rchoices.length-1]));
            }
        if(left.textContent>2){
                winner.textContent="bozo";
                right.textContent=0;
                left.textContent=0;
                return "u are loser";
              }
        if(right.textContent>2){
                  winner.textContent="winner";
                  right.textContent=0;
                  left.textContent=0;
                  return "u are winner";
        }

        pick="scissors";
        console.log(pick+scissors+"bugatii"+left.textContent)
    })
    function removeTransition(e) {
        console.log("bitching");
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove("playing");
        e.target.classList.remove("cplaying");
      }
    rock.addEventListener('transitionend', removeTransition);
    paper.addEventListener('transitionend', removeTransition);
    scissors.addEventListener('transitionend', removeTransition);
    console.log(pick+"here");
    console.log(rchoices[rchoices.length-1]+"fuck");

    // let playerSelection=prompt("choose wisely your weapon");
    //let computerSelection= getComputerChoice()
    // for (let i = 0; i < 3; i++)
    // { 
    //     // let playerSelection=prompt("choose wisely your weapon");
    //     // waitForClick(pick);
    //     let rock=document.getElementsByClassName("rock")[0];
    //     let paper=document.getElementsByClassName("paper")[0];
    //     let scissors=document.getElementsByClassName("scissors")[0];
        
    //     rock.addEventListener("click",function(){
    //         pick="rock";
    //     //alert("rock was clicked!")
    //     console.log(pick+"rock"+i)
    //     })
    //     paper.addEventListener("click",function(){
    //     //alert("paper was clicked!")
        
    //     pick="paper";
    //     console.log(pick+"paper")
    //     })
        
    //     scissors.addEventListener("click",function(){
    //     // alert("scissors was clicked!")
    //     //console.log(pick+"dick")
    //     pick="scissors";
    //     console.log(pick+"scr"+i)
    //     });
    //     setTimeout(checkCondition, 1000);
    //     console.log(i+"dddd"+pick);
    //     let computerSelection= getComputerChoice();
    //     let match =playRound(pick, computerSelection);
    //     if(match=="draw"){
    //         computerwins++;
    //         playerwins++;
    //     }else if(match=="u lost to a npc"){
    //         computerwins++;
    //     }
    //      else if(match=="player win"){
    //         playerwins++;
    //      }
         
    // }
    // if(computerwins>playerwins){
    //     return "loser";
    // }else if(computerwins==playerwins){
    //     return "draw";
    // }else{
    //     return "winner";
    // }
}

// function waitForClick(word) {
//     console.log(word+"b")
//     let rock=document.getElementsByClassName("rock")[0];
//     let paper=document.getElementsByClassName("paper")[0];
//     let scissors=document.getElementsByClassName("scissors")[0];
//     let pick="a";
//     rock.addEventListener("click",function(){
//         pick="rock";
//     alert("rock was clicked!")
//     })
//     paper.addEventListener("click",function(){
//     alert("paper was clicked!")
//     pick="paper";
//     })
    
//     scissors.addEventListener("click",function(){
//     // alert("scissors was clicked!")
//     console.log(pick+"dick")
//     pick="scissors";
//     },{once: true});
//     setTimeout(function() {
//         let rock=document.getElementsByClassName("rock")[0];
//         let paper=document.getElementsByClassName("paper")[0];
//         let scissors=document.getElementsByClassName("scissors")[0];
        
//         rock.addEventListener("click",function(){
//             pick="rock";
//         alert("rock was clicked!")
//         })
//         paper.addEventListener("click",function(){
//         alert("paper was clicked!")
//         pick="paper";
//         })
        
//         scissors.addEventListener("click",function(){
//         // alert("scissors was clicked!")
//         console.log(pick+"dick")
//         pick="scissors";
//         },{once: true});
//       if (pick.length>3) {
//         console.log(pick+"c")
//         console.log("Button clicked!");
//         pick="";
//       } else {
//         console.log("Waiting for button click...");
//         waitForClick(pick);
//       }
//     }, 1000);
//   }

//   //let playerSelection=prompt("choose wisely your weapon");
//    //let computerSelection= getComputerChoice()
//   //console.log(playRound(playerSelection, computerSelection));

    console.log(game());



