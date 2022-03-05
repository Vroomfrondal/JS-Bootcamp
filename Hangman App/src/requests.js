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
            //console.log(data)
            return data.puzzle
        })
}

// Get Country Data
const getCountry = (countryCode) => {
    return fetch("https://restcountries.com/v3.1/all")
        .then((response) => {
            if (response.status === 200) {
                return response.json()
            } else {
                throw new Error("Unable to fetch this country.")
            }
        })
        .then((data) => {
            // search array of all countries for our specific countryCode
            const country = data.find((country) => country.cca2 === countryCode)
            return country
        })
}
