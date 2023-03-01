const choiceBtns= document.querySelectorAll(".choiceBtns");
const playerPts=document.querySelector(".playerPts");
const computerPts=document.querySelector(".computerPts");
const compChoice=document.querySelector(".compChoice");
const roundTxt=document.querySelector(".roundTxt");
const finalTxt=document.querySelector(".finalTxt");
const AgainBtn=document.createElement("button");
AgainBtn.style.cssText="background-color:#E3B448; font-size:30px; font-weight:500; \
margin-top:40px; padding:20px; border-color:#3A6B35; border-width:5px;";
AgainBtn.textContent="Play Again";
AgainBtn.addEventListener("click",()=>{
    window.location.reload();
});

function getComputerChoice(){
    let choice= Math.floor(Math.random()*3);
    if (choice===0){
        return "Rock";
    }
    else if (choice===1){
        return "Paper";
    }
    else{
    return "Scissors";
    }
}

let playerPoints=0;
let computerPoints=0;

function playRound(playerSelection,computerSelection){

    computerSelection=getComputerChoice();
    compChoice.textContent=`Computer choice: ${computerSelection}`;
    compChoice.classList.add("box");

    let win=`You win! ${playerSelection} beats ${computerSelection}`;
    let lose=`You lose, ${computerSelection} beats ${playerSelection}`;

    if (playerSelection==="Rock"){
        if (computerSelection==="Rock"){
            roundTxt.textContent="Tie";
        }
        if (computerSelection==="Paper"){
            roundTxt.textContent=lose;
            computerPoints++;
        }
        if (computerSelection==="Scissors"){
            roundTxt.textContent=win;
            playerPoints++;
        }
    }

    else if (playerSelection==="Paper"){
        if (computerSelection==="Paper"){
            roundTxt.textContent="Tie";
        }
        if (computerSelection==="Scissors"){
            roundTxt.textContent=lose;
            computerPoints++;
        }
        if (computerSelection==="Rock"){
            roundTxt.textContent=win;
            playerPoints++;
        }
    }

    else {
        if (computerSelection==="Scissors"){
            roundTxt.textContent="Tie";
        }
        if (computerSelection==="Rock"){
            roundTxt.textContent=lose;
            computerPoints++;
        }
        if (computerSelection==="Paper"){
            roundTxt.textContent=win;
            playerPoints++;
        }
    }

    playerPts.textContent=`Player: ${playerPoints}`;
    computerPts.textContent=`Computer: ${computerPoints}`;

    if (playerPoints>=5 || computerPoints>=5){
        if (computerPoints<playerPoints){
            finalTxt.textContent=`You win the game ${playerPoints} to ${computerPoints}`;
        }
        else {
            finalTxt.textContent=`You lose the game ${playerPoints} to ${computerPoints}`;
        }
        finalTxt.insertAdjacentElement("afterend",AgainBtn);
        choiceBtns.forEach((button)=>{
            button.setAttribute("disabled","disabled");
            });
    }
}

choiceBtns.forEach((button)=>{
    button.addEventListener("click",()=>{
        if (button.classList.contains("rockBtn")){
            playRound("Rock");
            }
        else if (button.classList.contains("paperBtn")){
                playRound("Paper");
            }
        else {
                playRound("Scissors");
            }
        });
    });

