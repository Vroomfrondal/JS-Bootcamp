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
  return notes.find(function(note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

// function findNote(notes, noteTitle) {
//   const index = notes.findIndex(function(note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
//   return notes[index]
// }

const note = findNote(notes, "Intern Checklist")
console.log(note)



// console.log(notes.length)
// console.log(notes)
// console.log("----------------------------------")

// const index = notes.findIndex(function (note, index) {
//   console.log(note)
//   return note.title === "Intern Checklist"
// })
// console.log(index)
