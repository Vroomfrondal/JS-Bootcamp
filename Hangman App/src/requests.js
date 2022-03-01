// Making HTTP Request via XMLHTTP
const getPuzzle = (callback) => {
    const fetchData = new XMLHttpRequest()

    fetchData.addEventListener("readystatechange", (e) => {
        // ensure JSON is in "ready state value 4" and request is status "ok"
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            //callback pattern for getPuzzle() in app.js
            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback("An error has taken place", undefined)
        }
    })

    fetchData.open("GET", "https://puzzle.mead.io/puzzle?wordCount=2")
    fetchData.send()
}

// Get country data via HTTP
const getCountryData = (countryCode, callback) => {
    const fetchData = new XMLHttpRequest()

    fetchData.addEventListener("readystatechange", (e) => {
        // make sure API reponse is valid
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.cca2 === countryCode)

            callback(undefined, country)
        } else if (e.target.readyState === 4) {
            callback("An error has taken place", undefined)
        }
    })

    fetchData.open("GET", `https://restcountries.com/v3.1/all`)
    fetchData.send()
}
