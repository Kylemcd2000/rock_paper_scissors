//define variables rock, paper, scissors as strings
//use Math.random to get random number from 0 to less than one
//assign rock, paper, scissor to random number that all outcomes are equal
//3 choices therefore one third or 33.33333...% chance for each
// (0 - 0.333...) (0.344.. - 0.666..) (0.0677.. - 0.999...) double check math
//randomly returns sting values of rock paper scissor

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

//getComputerchoice() function returns random rock, paper scissor choice
function getComputerChoice() {
    // assings a random number variable 
    let random = Math.random();
    // assigns rock to lower 1/3 random number range
    if (random <= 0.33) {
        return rock;
    // assigns paper to middle 1/3 random number range    
    } else if (random <= 0.66) {
        return paper;
    // assigns scissors to upper 1/3 random number range
    } else {
        return scissors;
    }
}

