// Making HTTP Requests via fetch
const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error("Unable to get Puzzle")
    }
}

// const getPuzzleOld = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//         .then((response) => {
//             if (response.status === 200) {
//                 // returns promise that resolves with our JSON data
//                 return response.json()
//             } else {
//                 throw new Error("Unable to fetch puzzle.")
//             }
//         })
//         .then((data) => {
//             //console.log(data)
//             return data.puzzle
//         })
// }

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

// Check which country user is in
const getLocation = () => {
    return fetch("http://ipinfo.io/json?token=f876dfebbeed96")
        .then((response) => {
            // ensure API ping is OK and parse response as json data if so
            if (response.status === 200) {
                return response.json()
            } else {
                throw new Error("Try enabling location services to check country")
            }
        })
        .then((locationInfo) => {
            return locationInfo
        })
}
