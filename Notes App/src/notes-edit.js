const titleElement = document.querySelector("#note-title")
const bodyElement = document.querySelector("#note-body")
const removeButtonElement = document.querySelector("#remove-note-button")
const dateElement = document.querySelector("#note-timestamp")
const noteID = location.hash.substring(1) // get all characters from unique ID except # symbol (URL)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteID)

//if no note present, send to homepage
if (!note) {
    location.assign("index.html")
}

//dynamically update index.html notes list with inputs on new note
titleElement.value = note.title
bodyElement.value = note.body
dateElement.textContent = generateLastEdited(note.updatedAt)

// update notes "title" in index.html based on edit.html inputs
titleElement.addEventListener("input", (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

// update notes "body" in index.html based on edit.html inputs
bodyElement.addEventListener("input", (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

// When remove-note button is pressed, delete note and redirect to homepage
removeButtonElement.addEventListener("click", () => {
    removeNote(noteID)
    saveNotes(notes)
    location.assign("index.html")
})

window.addEventListener("storage", (e) => {
    //check if browser console property "key" matches notes
    if (e.key === "notes") {
        //update notes with parse value
        notes = JSON.parse(e.newValue)

        note = notes.find((note) => note.id === noteID)

        if (!note) {
            location.assign("index.html")
        }

        titleElement.value = note.title
        bodyElement.value = note.body
        dateElement.textContent = generateLastEdited(note.updatedAt)
    }
})
