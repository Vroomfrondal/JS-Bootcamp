// An Array of Objects
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

// sorts an array in a notes in alphabetical order.
function sortNotes(notes) {
    // B first? 1 -- A first? -1
    notes.sort(function (a, b) {
        //sort by title
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

//select a specific note list, and the note's title you want to find in that list
function findNote(notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

//finds specific note from notes list based on search text
function findNotes(notes, searchText) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(searchText.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(searchText.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

// console.log(findNotes(notes, "gym"))

// const note = findNote(notes, "Intern Checklist")
// console.log(note)

sortNotes(notes)
console.log(notes)
