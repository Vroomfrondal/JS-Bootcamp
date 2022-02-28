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

// Making HTTP Request
// const fetchData = new XMLHttpRequest()

// fetchData.addEventListener("readystatechange", (e) => {
//     // ensure JSON is in "ready state value 4" and request is status "ok"
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         console.log(data)
//     } else if (e.target.readyState === 4) {
//         console.log("Request Sprung Error")
//     }
// })

// fetchData.open("GET", "https://puzzle.mead.io/puzzle?wordCount=2")
// fetchData.send()

// Challenge

const countryCode = "US"
const fetchData = new XMLHttpRequest()

fetchData.addEventListener("readystatechange", (e) => {
    // look through array for countryCode and return that object
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        const country = data.find((country) => country.cca2 === countryCode)
        console.log(country.name.official)
    } else if (e.target.readyState === 4) {
        console.log("Not a valid Country Code")
    }
})

fetchData.open("GET", "https://restcountries.com/v3.1/all")
fetchData.send()
