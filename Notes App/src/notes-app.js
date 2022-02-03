const notes = [
    {
        title: "My next trip",
        body: "I'd like to go to Spain",
    },
    {
        title: "Gym List",
        body: "List of Exercises for the gym",
    },
    {
        title: "Intern Checklist",
        body: "Clock in, Get Parking Token, Daily Logs",
    },
]

const filters = {
    searchText: "",
}

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
        noteElement.textContent = note.title
        document.querySelector("#filtered-notes-by-searchText").appendChild(noteElement)
    })
}
renderNotes(notes, filters)

// event listener to update filteredNotes and re Render function
document.querySelector("#new-note-input-textbox").addEventListener("input", function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

//add new note button
document.querySelector("#create-note-button").addEventListener("click", function (e) {
    e.target.textContent = "The button was clicked."
    console.log("Create new note button clicked.")
})

// drop down list to sort by certain value
document.querySelector("#filter-by-dropdown").addEventListener("change", function (e) {
    console.log(e.target.value)
})
