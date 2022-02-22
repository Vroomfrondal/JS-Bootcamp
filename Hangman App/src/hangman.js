function Hangman(word, remainingGuesses) {
    //setup instance properties - first as array of lowercase letters so we can loop through
    this.word = word.toLowerCase().split("")
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = "playing"
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
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const badGuess = !this.word.includes(guess)

    // Make sure guess is unique.
    if (isUnique) {
        //console.log("This is a unique guess.")
        this.guessedLetters.push(guess)
    }

    if (isUnique && badGuess) {
        //console.log("Try a guess you haven't given")
        this.remainingGuesses--
    }
}

// Status Logic
Hangman.prototype.getStatus = function () {
    const solved = !this.getPuzzle().includes("*")

    if (this.remainingGuesses <= 0) {
        this.status = "Game Over"
    } else if (solved) {
        this.status = "Finished!"
    } else {
        this.status = "Playing"
    }

    return this.status
}
