const puzzleEl = document.querySelector("#word")
const remainingGuessesEl = document.querySelector("#remaining-guesses")
const statusEl = document.querySelector("#status")
let game1

// Keyboard guess functionality
window.addEventListener("keypress", (e) => {
    const guess = e.key

    // take new guesses only if status is "playing"
    if (game1.statusMessage === "Playing") {
        game1.makeGuess(guess)
    }
    render()
})

const render = () => {
    puzzleEl.textContent = game1.puzzle
    remainingGuessesEl.textContent = game1.remainingGuesses
    statusEl.textContent = game1.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle("2")
    game1 = new Hangman(puzzle, 8)
    render()
}

document.querySelector("#reset-button").addEventListener("click", startGame)

startGame()

// Testing stuff below

// Generate a random word via API request in requests.js
// getPuzzle("2")
//     .then((puzzle) => {
//         console.log(puzzle)
//     })
//     .catch((error) => {
//         console.log(`Error caught: ${error}`)
//     })

// get Current country
// getCurrentCountry()
//     .then((country) => {
//         console.log(country.name.official)
//     })
//     .catch((error) => {
//         console.log(`Error caught: ${error}`)
//     })
