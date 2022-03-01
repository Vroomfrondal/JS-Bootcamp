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
