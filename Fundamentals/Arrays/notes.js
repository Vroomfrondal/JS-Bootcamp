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
    body: "Daily tasks that need done at the internship.",
  },
]

//console.log(notes.pop())
//notes.push("Note 4")

//console.log(notes.shift()) // removes first element from array
//notes.unshift("My first note")

//read documentation on splice()
//notes.splice(1, 1) //start at index 1 and remove that item
//notes.splice(1, 0, "This is the new second item") //adds item to the middle

notes[2] = "this is my new note 3"

// function that determines what to do with each item in the array (callback function)
notes.forEach(function (item, index) {
  console.log(index)
  console.log(item)
})

console.log(notes.length)
console.log(notes)
console.log("----------------------------------")

const index = notes.findIndex(function (note, index) {
  console.log(note)
  return note.title === "Intern Checklist"
})
console.log(index)
