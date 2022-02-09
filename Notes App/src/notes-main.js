let notes = getSavedNotes() //notes-function.js

const filters = {
    searchText: "",
}

renderNotes(notes, filters)

// Push new note to notes object array -> store that object in local storage ->
document.querySelector("#create-note-button").addEventListener("click", function (e) {
    const id = uuidv4()
    notes.push({
        id: id,
        title: "",
        body: "",
    })
    saveNotes(notes)
    renderNotes(notes, filters)
    location.assign(`edit.html#${id}`) // Open note to start editing
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

window.addEventListener("storage", function (e) {
    notes = JSON.parse(e.newValue)

    renderNotes(notes, filters)
    console.log("Data Updated.")
})

// const now = moment()

// now.add("1", "year").subtract(20, "days")
// console.log(now.format("MMMM Do, YYYY"))
// console.log(now.fromNow())

// const nowTimeStamp = now.valueOf()
// console.log(moment(nowTimeStamp).toString())

const birthday = moment()
birthday.set("year", 1998).set("month", 5).set("date", 29)
console.log(birthday.format("MMM D, YYYY"))
