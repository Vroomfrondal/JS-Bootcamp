const puzzleEl = document.querySelector("#word")
const remainingGuessesEl = document.querySelector("#remaining-guesses")
const statusEl = document.querySelector("#status")
const game1 = new Hangman("Cat", 2)

// Display Hangman Word & Remaining Guesses to screen
puzzleEl.textContent = game1.getPuzzle()
remainingGuessesEl.textContent = game1.remainingGuesses
statusEl.textContent = game1.getStatus()

// Use the keyboard to make a guess
window.addEventListener("keypress", (e) => {
    const guess = e.key
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    remainingGuessesEl.textContent = game1.remainingGuesses
    statusEl.textContent = game1.getStatus()
})
