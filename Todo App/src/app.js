const todos = [
    {
        text: "Email Dr. Klaus",
        completed: false,
    },
    {
        text: "Get the Groceries",
        completed: true,
    },
    {
        text: "Go to the park",
        completed: true,
    },
    {
        text: "The Intership paperwork",
        completed: true,
    },
    {
        text: "Email advisor for grad-appointment",
        completed: false,
    },
]

// remove each <p> with "the"
// itterate over each item in array and remove "the". query selector? foreach?includes?

// Select ALL paragraph tags
const contentOfParagraphs = document.querySelectorAll("p")

// itterate over each item in array if it contains "the".
contentOfParagraphs.forEach(function (paragraph) {
    if (paragraph.textContent.includes("the")) {
        paragraph.remove()
    }
})
