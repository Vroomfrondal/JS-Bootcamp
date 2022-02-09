// Read Existing notes from local storage
function getSavedNotes() {
    const notesJSON = localStorage.getItem("notes")

    // read & parse data when app starts up
    if (notesJSON !== null) {
        console.log("Notes Retrieved from Local Storage.")
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save notes to local storage
function saveNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes))
}

// removes note from list (used in generateDOM())
function removeNote(id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })

    //"id >= 0" -> match found. "id < -1" -> match found
    if (noteIndex > -1) {
        console.log(`Note with ID of "${id}" has been deleted.`)
        notes.splice(noteIndex, 1)
    }
}

// Generate DOM structure for a new note
function generateNoteDOM(note) {
    const noteElement = document.createElement("div")
    const textElement = document.createElement("a")
    const button = document.createElement("button")
    const id = uuidv4()

    // Setup the remove note button
    button.textContent = "Del"
    noteElement.appendChild(button)
    button.addEventListener("click", function () {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    // Setup the note title text
    if (note.title.length > 0) {
        textElement.textContent = note.title
    } else {
        textElement.textContent = "New Note"
    }

    textElement.setAttribute("href", `edit.html#${note.id}`)

    noteElement.appendChild(textElement)
    return noteElement
}

// render application notes
function renderNotes(notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // clear notes div before adding new filteredNotes to list
    document.querySelector("#filtered-notes-by-searchText").innerHTML = ""

    //itterate over filtered notes array and create new element for each note title
    filteredNotes.forEach(function (note) {
        const noteElement = generateNoteDOM(note)
        document.querySelector("#filtered-notes-by-searchText").appendChild(noteElement)
    })
}

// Generate last edited message for note-edit.js
function generateLastEdited() {
    return `Last edited ${moment(note.updatedAt).fromNow()}`
}
