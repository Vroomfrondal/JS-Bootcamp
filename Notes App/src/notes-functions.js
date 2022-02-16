// Read Existing notes from local storage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem("notes")

    // If there is data in local storage, parse it to our array. Else, new array (Falsy null)
    return notesJSON ? JSON.parse(notesJSON) : []
}

// Save notes to local storage
const saveNotes = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes))
}

// removes note from list (used in generateDOM())
const removeNote = (id) => {
    // return note only if ID is matches index
    const noteIndex = notes.findIndex((note) => note.id === id)

    //"id >= 0" -> match found. "id < -1" -> match found
    if (noteIndex > -1) {
        console.log(`Note with ID of "${id}" has been deleted.`)
        notes.splice(noteIndex, 1)
    }
}

// Generate DOM structure for a new note
const generateNoteDOM = (note) => {
    const noteElement = document.createElement("div")
    const textElement = document.createElement("a")
    const button = document.createElement("button")
    const id = uuidv4()

    // Setup the remove note button
    button.textContent = "Del"
    noteElement.appendChild(button)
    button.addEventListener("click", () => {
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

// Sort Notes by one of three values in dropdown list
const sortNotes = (notes, sortBy) => {
    if (sortBy === "byEdited") {
        // if a before b return -1. if b before a return 1
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === "byCreated") {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === "alphabetical") {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}

// render application notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    // clear notes div before adding new filteredNotes to list
    document.querySelector("#filtered-notes-by-searchText").innerHTML = ""

    //itterate over filtered notes array and create new element for each note title
    filteredNotes.forEach((note) => {
        const noteElement = generateNoteDOM(note)
        document.querySelector("#filtered-notes-by-searchText").appendChild(noteElement)
    })
}

// Generate last edited message for note-edit.js
const generateLastEdited = () => `Last edited ${moment(note.updatedAt).fromNow()}`
