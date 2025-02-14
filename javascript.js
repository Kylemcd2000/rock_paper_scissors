//define variables rock, paper, scissors as strings
//use Math.random to get random number from 0 to less than one
//assign rock, paper, scissor to random number that all outcomes are equal
//3 choices therefore one third or 33.33333...% chance for each
// (0 - 0.333...) (0.344.. - 0.666..) (0.0677.. - 0.999...) double check math
//randomly returns sting values of rock paper scissor

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getComputerChoice() {
    let random = Math.random();
    if (random <= 0.33) {
        return rock;
    } else if (random <= 0.66) {
        return paper;
    } else {
        return scissors;
    }
        
}