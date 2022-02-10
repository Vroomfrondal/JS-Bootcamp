let notes = getSavedNotes() //notes-function.js

const filters = {
    searchText: "",
    sortBy: "byEdited",
}

renderNotes(notes, filters)

// Push new note to notes object array -> store that object in local storage ->
document.querySelector("#create-note-button").addEventListener("click", function () {
    const id = uuidv4() // get unique ID from UUIDV4.js library
    const timeStamp = moment().valueOf() // get current time from moment.js library
    notes.push({
        id: id,
        title: "",
        body: "",
        createdAt: timeStamp,
        updatedAt: timeStamp,
    })
    saveNotes(notes)
    renderNotes(notes, filters)
    location.assign(`edit.html#${id}`) // Open note to start editing
})

// event listener to update filteredNotes and re Render function
document.querySelector("#new-note-input-textbox").addEventListener("input", function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
    console.log("Showing Filtered Results.")
})

// Sort notes by value selected in drop-down by user
document.querySelector("#filter-by-dropdown").addEventListener("change", function (e) {
    console.log("Showing sorted notes.")
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener("storage", function (e) {
    if (e.key === "notes") {
        notes = JSON.parse(e.newValue)

        renderNotes(notes, filters)
        console.log("Data Updated.")
    }
})
