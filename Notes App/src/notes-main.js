let notes = getSavedNotes() //notes-function.js

const filters = {
    searchText: "",
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
