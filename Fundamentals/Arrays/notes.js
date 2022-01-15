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

function findNote(notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

function findNotes(notes, searchText) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(searchText.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(searchText.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

console.log(findNotes(notes, "gym"))

// function findNote(notes, noteTitle) {
//   const index = notes.findIndex(function(note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
//   return notes[index]
// }

const note = findNote(notes, "Intern Checklist")
console.log(note)
