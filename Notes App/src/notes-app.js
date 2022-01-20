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

document.getElementById("create-note-button").addEventListener("click", function (e) {
    e.target.textContent = "The button was clicked."
})
