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

//add new note button
document.querySelector("#create-note-button").addEventListener("click", function (e) {
    e.target.textContent = "The button was clicked."
    console.log("Create new note button clicked.")
})

// remove ALL notes
document.querySelector("#remove-all-notes-button").addEventListener("click", function () {
    document.querySelectorAll(".note").forEach(function (note) {
        note.remove()
        console.log("All notes removed.")
    })
})
