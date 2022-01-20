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
    paragraph.textContent = "*********"
    //console.log(paragraph.textContent)
    //paragraph.remove()
})

// Add a new element:
// 1) select an area
const newParagraph = document.createElement("p")
// 2) give it content
newParagraph.textContent = "Newest element from JS"
// 3)select body and append new text, newParagraph (step 2)
document.querySelector("body").appendChild(newParagraph)
