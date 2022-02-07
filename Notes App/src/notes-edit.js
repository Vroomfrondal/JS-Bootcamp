const titleElement = document.querySelector("#note-title")
const bodyElement = document.querySelector("#note-body")
const removeButtonElement = document.querySelector("#remove-note-button")
const noteID = location.hash.substring(1) // get all characters from unique ID except # symbol
const notes = getSavedNotes()
const note = notes.find(function (note) {
    return note.id === noteID
})

if (note === undefined) {
    location.assign("index.html")
}

//dynamically update index.html notes list with inputs on new note
titleElement.value = note.title
bodyElement.value = note.body

// update notes "title" in index.html based on edit.html inputs
titleElement.addEventListener("input", function (e) {
    note.title = e.target.value
    saveNotes(notes)
})

// update notes "body" in index.html based on edit.html inputs
bodyElement.addEventListener("input", function (e) {
    note.body = e.target.value
    saveNotes(notes)
})

// When remove-note button is pressed, delete note and redirect to homepage
removeButtonElement.addEventListener("click", function () {
    removeNote(noteID)
    saveNotes(notes)
    location.assign("index.html")
})
