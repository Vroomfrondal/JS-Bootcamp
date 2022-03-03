// Making HTTP Request via XMLHTTP
const getPuzzle = (wordCount) =>
    new Promise((resolve, reject) => {
        const fetchData = new XMLHttpRequest()

        fetchData.addEventListener("readystatechange", (e) => {
            // ensure JSON is in "ready state value 4" and request is status "ok"
            if (e.target.readyState === 4 && e.target.status === 200) {
                const data = JSON.parse(e.target.responseText)
                resolve(data.puzzle)
            } else if (e.target.readyState === 4) {
                reject("An Error has taken place.")
            }
        })

        fetchData.open("GET", `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        fetchData.send()
    })

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
