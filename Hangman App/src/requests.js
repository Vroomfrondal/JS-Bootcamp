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

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)

    return country
}

// Get Country Data based on found location from getLocation()
const getCountry = async (countryCode) => {
    const response = await fetch("https://restcountries.com/v3.1/all")

    if (response.status === 200) {
        const data = await response.json()

        // search array of all countries for our specific countryCode
        const country = data.find((country) => country.cca2 === countryCode)
        return country
    } else {
        throw new Error("Unable to get country's data. Try again later.")
    }
}

// Check which country user is in
const getLocation = async () => {
    const response = await fetch("http://ipinfo.io/json?token=f876dfebbeed96")

    if (response.status === 200) {
        const locationInfo = await response.json()
        //console.log(locationInfo)
        return locationInfo
    } else {
        throw new Error("Sorry, location services must be enabled.")
    }
}
