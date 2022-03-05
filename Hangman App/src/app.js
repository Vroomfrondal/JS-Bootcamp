const puzzleEl = document.querySelector("#word")
const remainingGuessesEl = document.querySelector("#remaining-guesses")
const statusEl = document.querySelector("#status")
const game1 = new Hangman("Hello World", 9) // hardcode word and number of guesses

// Display Hangman Word & Remaining Guesses to screen
puzzleEl.textContent = game1.puzzle
remainingGuessesEl.textContent = game1.remainingGuesses
statusEl.textContent = game1.statusMessage

// Use the keyboard to make a guess
window.addEventListener("keypress", (e) => {
    const guess = e.key

    // take new guesses only if status is "playing"
    if (game1.statusMessage === "Playing") {
        game1.makeGuess(guess)
    }

    puzzleEl.textContent = game1.puzzle
    remainingGuessesEl.textContent = game1.remainingGuesses
    statusEl.textContent = game1.statusMessage
})

// Generate a random word via API request in requests.js
getPuzzle("2")
    .then((puzzle) => {
        console.log(puzzle)
    })
    .catch((error) => {
        console.log(`Error: ${error}`)
    })

//determine location of user
getLocation()
    .then((locationInfo) => {
        return getCountry(locationInfo.country)
    })
    .then((country) => {
        console.log(country.name.common)
    })
    .catch((error) => {
        console.log(`Error caught: ${error}`)
    })
