const todos = [
    {
        text: "Go to work",
        completed: false,
    },
    {
        text: "Go to internship",
        completed: true,
    },
    {
        text: "Go to the gym",
        completed: true,
    },
    {
        text: "Use the car wash",
        completed: false,
    },
    {
        text: "Doctors appointment",
        completed: false,
    },
    {
        text: "Project Proposal",
        completed: true,
    },
]

// count false properties & keep track of that number
let todoCount = 0
todos.forEach(function (todo) {
    if (todo.completed == false) {
        todoCount += 1
    }
})

// Let user know how many todos they have left
let summaryMessage = document.createElement("h2")
summaryMessage.textContent = `You have ${todoCount} tasks left.`
document.querySelector("body").appendChild(summaryMessage)

// dynamically populate html paragraphs with todo items that are incompleted
todos.forEach(function (todo) {
    if (todo.completed == false) {
        const addTodoTask = document.createElement("p")
        addTodoTask.textContent = todo.text
        document.querySelector("body").appendChild(addTodoTask)
    }
})
