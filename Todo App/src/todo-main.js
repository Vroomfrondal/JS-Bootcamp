let todos = getSavedTodos()

const filters = {
    searchText: "",
    hideCompleted: false,
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
        id: uuidv4(), //unique identifier from external library
        text: e.target.newTodo.value,
        completed: false,
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.newTodo.value = "" // newTodo is the "name" of the input in HTML
})

// filter completed task when #hide-completed-button is checked
document.querySelector("#hide-completed-button").addEventListener("change", function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
