const todos = [
    {
        text: "Go to work",
        completed: false,
    },
    {
        text: "Cook food",
        completed: true,
    },
    {
        text: "Go to the gym",
        completed: true,
    },
    {
        text: "Car Wash",
        completed: false,
    },
    {
        text: "Internship",
        completed: false,
    },
]

const filters = {
    searchText: "",
    hideCompleted: false,
}

function renderTodos(todos, filters) {
    // return new array with todos that have text including our filtered word
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    // keep track of todos with incompleted property within todo Array
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    // clear div to avoid duplicate dynamic-html element creations
    document.querySelector("#filtered-todos-by-searchText").innerHTML = ""

    // Let user know how many todos they have left
    const summaryMessage = document.createElement("h2")
    summaryMessage.textContent = `You have ${incompleteTodos.length} incomplete todos left.`
    document.querySelector("#filtered-todos-by-searchText").appendChild(summaryMessage)

    // itterate over filtered notes array and create new element for each note title
    filteredTodos.forEach(function (todo) {
        const newTodoElement = document.createElement("p")
        newTodoElement.textContent = todo.text
        document.querySelector("#filtered-todos-by-searchText").appendChild(newTodoElement)
    })
}
renderTodos(todos, filters)

// filter tasks left based on search text
document.querySelector("#search-text").addEventListener("input", function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// Apend todo list with input from newTodo HTML form
document.querySelector("#new-todo").addEventListener("submit", function (e) {
    //prevent page reload on submit
    e.preventDefault()

    //append todos array with user form text-input from above
    todos.push({
        text: e.target.newTodo.value,
        completed: false,
    })

    // clear input form and re-render todo list
    renderTodos(todos, filters)
    e.target.newTodo.value = ""
})

// filter completed task when #hide-completed-button is checked
document.querySelector("#hide-completed-button").addEventListener("change", function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
