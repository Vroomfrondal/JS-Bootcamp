function Hangman(word, remainingGuesses) {
    //setup instance properties - first as array of lowercase letters so we can loop through
    this.word = word.toLowerCase().split("")
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ["c", "w"]
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

const game1 = new Hangman("Cat", 2)
console.log(game1.getPuzzle())

const game2 = new Hangman("World", 5)
console.log(game2.getPuzzle())
