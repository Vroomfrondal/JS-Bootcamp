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

// generate DOM structure for a new note
function generateNoteDOM(note) {
    const noteElement = document.createElement("p")

    if (note.title.length > 0) {
        noteElement.textContent = note.title
    } else {
        noteElement.textContent = "New Note"
    }
    return noteElement
}

// render application notes
// return a new array with notes that are included in our filter object, searchText: ""
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
