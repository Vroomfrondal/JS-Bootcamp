class Hangman {
    //constructor function
    constructor(word, remainingGuesses) {
        //setup instance properties - first as array of lowercase letters so we can loop through
        this.word = word.toLowerCase().split("")
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = "Playing"
    }
    get puzzle() {
        let puzzle = ""

        // loop through game-word and sensor each letter that's not already been guessed
        this.word.forEach((letter) => {
            // check if letters in game-word have been guessed already and sensor those that haven't
            if (this.guessedLetters.includes(letter) || letter === " ") {
                puzzle += letter
            } else {
                puzzle += "*"
            }
        })
        return puzzle
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const badGuess = !this.word.includes(guess)

        // Make sure guess is unique.
        if (isUnique) {
            //console.log("This is a unique guess.")
            this.guessedLetters.push(guess)
        }

        if (isUnique && badGuess) {
            //console.log("But an incompatible guess")
            this.remainingGuesses--
        }
    }
    get statusMessage() {
        const solved = !this.puzzle.includes("*")

        if (this.remainingGuesses <= 0) {
            this.status = `Game Over :[ Correct Word: "${this.word.join("")}"`
        } else if (solved) {
            this.status = "You Won!"
        } else {
            this.status = "Playing"
        }

        return this.status
    }
}
