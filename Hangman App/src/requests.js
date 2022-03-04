// Making HTTP Request via XMLHTTP
const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        .then((response) => {
            if (response.status === 200) {
                // returns promise that resolves with our JSON data
                return response.json()
            } else {
                throw new Error("Unable to fetch puzzle.")
            }
        })
        .then((data) => {
            return data.puzzle
        })
}

// Get country data via HTTP Promise API request
const getCountryData = (countryCode) =>
    new Promise((resolve, reject) => {
        const fetchData = new XMLHttpRequest()

        fetchData.addEventListener("readystatechange", (e) => {
            // make sure API reponse is valid
            if (e.target.readyState === 4 && e.target.status === 200) {
                const data = JSON.parse(e.target.responseText)
                const country = data.find((country) => country.cca2 === countryCode)

                resolve(country)
            } else if (e.target.readyState === 4) {
                reject("Error")
            }
        })

        fetchData.open("GET", `https://restcountries.com/v3.1/all`)
        fetchData.send()
    })
