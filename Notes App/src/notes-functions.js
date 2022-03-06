"use strict"

// Read Existing notes from local storage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem("notes")

    try {
        // If there is data in local storage, parse it to our array. Else (null value), blank array
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        console.log(`JSON Error-crash protection.`)
        return []
    }
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
    const noteElement = document.createElement("a")
    const textElement = document.createElement("p")
    const statusElement = document.createElement("p")
    const id = uuidv4()

    // Setup the note title text
    if (note.title.length > 0) {
        textElement.textContent = note.title
    } else {
        textElement.textContent = "New Note"
    }
    textElement.classList.add("list-item__title")
    noteElement.appendChild(textElement)

    // Setup the link
    noteElement.setAttribute("href", `edit.html#${note.id}`)
    noteElement.classList.add("list-item")

    // Setup status message
    statusElement.textContent = generateLastEdited(note.updatedAt)
    statusElement.classList.add("list-item__subtitle")
    noteElement.appendChild(statusElement)

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
    const notesEl = document.querySelector("#filtered-notes-by-searchText")
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    // clear notes div before adding new filteredNotes to list
    notesEl.innerHTML = ""

    // if notes exist, loop over and create new element for each note's title
    if (filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteElement = generateNoteDOM(note)
            notesEl.appendChild(noteElement)
        })
    } else {
        const emptyMessage = document.createElement("p")
        emptyMessage.textContent = "Create a new note to get started!"
        emptyMessage.classList.add("empty-message")
        notesEl.appendChild(emptyMessage)
    }
}

// Generate last edited message for note-edit.js
const generateLastEdited = (timeStamp) => `Last edited ${moment(timeStamp).fromNow()}`
