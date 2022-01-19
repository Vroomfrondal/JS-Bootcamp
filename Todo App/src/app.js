const todos = [
    {
        text: "Email Dr. Klaus",
        completed: false,
    },
    {
        text: "Get Groceries",
        completed: true,
    },
    {
        text: "Workout",
        completed: true,
    },
    {
        text: "Intership paperwork",
        completed: true,
    },
    {
        text: "Email advisor for grad-appointment",
        completed: false,
    },
]

const unfinishedTodos = todos.filter(function (todo) {
    return !todo.completed
})

const newTodo = document.createElement("h1")
newTodo.textContent = `You have ${unfinishedTodos.length} things to do`
document.querySelector("body").appendChild(newTodo)

// 1) print summary message how many todos they still need to complete. "You have 2 todos left" (put it in paragraph element)

// 2) add p for each todo above (use text value)
