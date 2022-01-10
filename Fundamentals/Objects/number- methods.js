//let num = 103.624
//
//console.log(Math.round(num))
//console.log(Math.floor(num)) // forces round down
//console.log(Math.ceil(num)) // forces round up
//
//let min = 0
//let max = 1
//let randomNum = Math.floor(Math.random() * (max - min + 1)) + min // formula for generating random number in a range of 0 - 10
//console.log(randomNum) 

// Challenge Area
// create function that takes guess as argument,
// generates number in random range and determines if guess is correct
// if guess is 1-5 true. false if not

function makeGuess(guess) {
    let number = guess
    let min = 0
    let max = 5
    let randomNumber = Math.round(Math.random() * (max - min))
    console.log(randomNumber)
    //if (number == randomNumber) {
    //    return true
    //} else {
    //    return false
    //}

    return guess == randomNumber
}

console.log(makeGuess(1))