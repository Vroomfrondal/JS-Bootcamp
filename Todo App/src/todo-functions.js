// Read Existing notes from user's browser cache
function getSavedTodos() {
    const todoJSON = localStorage.getItem("todos")

    if (todoJSON !== null) {
        console.log("Fetched notes from localStorage")
        return JSON.parse(todoJSON)
    } else {
        return []
    }
}

// Save Todo list to localStorage
function saveTodos() {
    console.log("Saving Notes to local storage.")
    localStorage.setItem("todos", JSON.stringify(todos))
}

// render application todos based on filters
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

    document.querySelector("#filtered-todos-by-searchText").appendChild(generateSummaryDOM(incompleteTodos))

    // itterate over filtered notes array and create new element for each note title
    filteredTodos.forEach(function (todo) {
        document.querySelector("#filtered-todos-by-searchText").appendChild(generateTodoDOM(todo))
    })
}

// Generate DOM elements for individual notes inside renderNotes()
function generateTodoDOM(todo) {
    const newTodoElement = document.createElement("p")
    newTodoElement.textContent = todo.text
    return newTodoElement
}

// Get DOM elements for a list summary
function generateSummaryDOM(incompleteTodos) {
    //Let user know how many todos they have left
    const summaryMessage = document.createElement("h2")
    summaryMessage.textContent = `You have ${incompleteTodos.length} incomplete todos left.`
    return summaryMessage
}
