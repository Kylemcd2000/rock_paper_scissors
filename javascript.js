//PSEUDOCODE getComputerChoice PSEUDOCODE
//define variables rock, paper, scissors as strings
//use Math.random to get random number from 0 to less than one
//assign rock, paper, scissor to random number that all outcomes are equal
//3 choices therefore one third or 33.33333...% chance for each
// (0 - 0.333...) (0.344.. - 0.666..) (0.0677.. - 0.999...) double check math
//randomly returns sting values of rock paper scissor
//PSEUDOCODE getComputerChoice PSEUDOCODE


const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let HumanChoice;
let ComputerChoice;
let HumanScore = 0;
let ComputerScore = 0;
//getComputerchoice() function returns random rock, paper scissor choice
function getComputerChoice() {
    // assings a random number variable 
    let random = Math.random();
    // assigns rock to lower 1/3 random number range
    // assigns ComputerChoice to rock
    if (random <= 0.33) {
        ComputerChoice = rock
        return ComputerChoice;
    // assigns paper to middle 1/3 random number range    
    // assigns ComputerChoice to paper
    } else if (random <= 0.66) {
        ComputerChoice = paper
        return ComputerChoice;
    // assigns scissors to upper 1/3 random number range
    // assigns ComputerChoice to scissors
    } else {
        ComputerChoice = scissors
        return ComputerChoice;
    }
}

//PSEUDOCODE getHumanChoice PSEUDOCODE
//Prompt user to enter rock, paper or scissors to return answer as string
//create error if choice is null or not one of the three.
//Convert string to lower case to prevent case sensitivity
//compare user input to existing variable. i.e "rock" === rock --> return rock
//PSEUDOCODE getHumanChoice PSEUDOCODE

function getHumanChoice() {
    //ask for input from player
   HumanChoice = prompt(`Round ${i+1}: Rock, Paper or Scissors?`);
   //makes player input case-insensitive
   HumanChoice = HumanChoice.toLowerCase();
   //assigns player choice as rock
   if (HumanChoice === rock) {
    return HumanChoice;
    //assigns player choice as paper
   }else if (HumanChoice === paper) {
    return HumanChoice;
    //assigns player choice as scissors
   }else if (HumanChoice === scissors) {
    return HumanChoice;
    //error if player inputs anything else other than rock, paper or scissors.
   } else {
    //prevents HumanChoice variable being assigned a non-choice input
    HumanChoice = undefined
    alert("Please enter a valid choice.");
   }
}

//PSEUDOCODE playRound(1,2) PSEUDOCODE
//use getHumanChoice and getComputerChoice to get choices for comparison
//

function playRound(HumanChoice, ComputerChoice) {
    if (HumanChoice === ComputerChoice) {
        console.log(`It's a draw!`);
    }else if (HumanChoice != rock
        && HumanChoice != paper
        && HumanChoice != scissors) {
            console.log (`An invalid choice as been given`);
            i = i - 1;
    }else {
        if ((HumanChoice === rock && ComputerChoice === scissors)
            || (HumanChoice === paper && ComputerChoice === rock)
            || (HumanChoice === scissors && ComputerChoice === paper)) {
            console.log(`you win! ${HumanChoice} beats ${ComputerChoice}`);
            return ++HumanScore;
        } else {
            console.log (`You lose! ${ComputerChoice} beats ${HumanChoice}`);
            return ++ComputerScore;
        }
    }
    
}

function playGame() {
    HumanScore = 0;
    ComputerScore = 0;
    for (i = 0; i < 5; ++i) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Your choice: ${HumanChoice} || Computer's choice: ${ComputerChoice}`);
        console.log(`Your Score ${HumanScore} || Computer Score ${ComputerScore}`);
    }

    if (i === 5) {
        if (HumanScore === ComputerScore) {
            alert (`It's a draw!\nHuman Score: ${HumanScore}\nComputer Score: ${ComputerScore}`)
        } else if (HumanScore > ComputerScore) {
            alert (`Congratulations! You won!\nHuman Score: ${HumanScore}\nComputer Score: ${ComputerScore}`)
        } else {
            alert (`Oh no! You lost, how embarrassing!\nHuman Score: ${HumanScore}\nComputer Score: ${ComputerScore}`)
        }
    }



}
