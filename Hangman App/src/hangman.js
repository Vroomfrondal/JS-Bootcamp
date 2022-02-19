function Hangman(word, remainingGuesses) {
    //setup instance properties - first as array of lowercase letters so we can loop through
    this.word = word.toLowerCase().split("")
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ""

    // loop through game-word and sensor each letter that's not already been guessed
    this.word.forEach((letter) => {
        // check if letters in game-word have been guessed already and sensor those that haven't
        if (this.guessedLetters.includes(letter)) {
            puzzle += letter
        } else {
            puzzle += "*"
        }
    })

    return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
    console.log(this.guessedLetters) //debug
    //convert to lowercase and push to our array
    guess = guess.toLowerCase()

    // Make sure guess is unique and subtract 1 from remainingGuesses
    if (this.guessedLetters.includes(guess)) {
        console.log("Try a guess you haven't done")
        this.remainingGuesses += -1
        this.guessedLetters.pop()
    } else {
        console.log("This is a unique guess. Do step 3")
    }
    console.log(this.guessedLetters)
}

const game1 = new Hangman("Cat", 2)
console.log(game1.makeGuess("T"))
console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

// const game2 = new Hangman("World", 5)
// console.log(game2.getPuzzle())
