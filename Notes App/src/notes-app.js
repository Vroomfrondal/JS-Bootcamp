const notes = [
    {
        title: "My next trip",
        body: "I'd like to go to Spain",
    },
    {
        title: "Gym List",
        body: "List of Exercises for the gym",
    },
    {
        title: "Intern Checklist",
        body: "Clock in, Get Parking Token, Daily Logs",
    },
]

// Query & Remove single paragraph tag
//const paragraph = document.querySelector("p")
//paragraph.remove()

// Query & Remove multiple tags
const multiParagraphs = document.querySelectorAll("p")

multiParagraphs.forEach(function (paragraph) {
    //rename text in paragraph tags
    paragraph.textContent = "Encrypted Text"

    //print text to console
    //console.log(paragraph.textContent)

    //paragraph.remove()
})

// Create a new paragraph in our html page. 3 step process:
const newParagraph = document.createElement("p")
newParagraph.textContent = "This is a new element containing text. Created in Js."
document.querySelector("body").appendChild(newParagraph)
