let notes = []

const filters = {
    searchText: "",
}

// Check for existing saved data
const notesJSON = localStorage.getItem("notes")

// read & parse data when app starts up
if (notesJSON !== null) {
    notes = JSON.parse(notesJSON)
}

const userJSON = localStorage.getItem("user")
const user = JSON.parse(userJSON)
console.log(`${userJSON.name} is ${userJSON.age}`)

// return a new array with notes that are included in our filter object, searchText: ""
function renderNotes(notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // clear notes div before adding new filteredNotes to list
    document.querySelector("#filtered-notes-by-searchText").innerHTML = ""

    //itterate over filtered notes array and create new element for each note title
    filteredNotes.forEach(function (note) {
        const noteElement = document.createElement("p")

        if (note.title.length > 0) {
            noteElement.textContent = note.title
        } else {
            noteElement.textContent = "New Note"
        }

        document.querySelector("#filtered-notes-by-searchText").appendChild(noteElement)
    })
}

renderNotes(notes, filters)

// Push new note to notes object array -> store that object in local storage ->
document.querySelector("#create-note-button").addEventListener("click", function (e) {
    notes.push({
        title: "",
        body: "",
    })
    localStorage.setItem("notes", JSON.stringify(notes))
    renderNotes(notes, filters)
    document.querySelector("#new-todo")
})

// event listener to update filteredNotes and re Render function
document.querySelector("#new-note-input-textbox").addEventListener("input", function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

// drop down list to sort by certain value
document.querySelector("#filter-by-dropdown").addEventListener("change", function (e) {
    console.log(e.target.value)
})
