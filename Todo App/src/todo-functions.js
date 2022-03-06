"use strict"

// Read Existing notes from user's browser cache
const getSavedTodos = () => {
    const todoJSON = localStorage.getItem("todos")

    try {
        // if local storage has items, parse those items onto array. if not, give fresh new array
        return todoJSON ? JSON.parse(todoJSON) : []
    } catch (e) {
        return []
    }
}

// Save Todo list to localStorage
const saveTodos = () => {
    console.log("Saving notes to local storage.")
    localStorage.setItem("todos", JSON.stringify(todos))
}

// render application todos based on filters
const renderTodos = (todos, filters) => {
    const todoElement = document.querySelector("#filtered-todos-by-searchText")
    // return new array with todos that have text including our filtered word
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    // keep track of todos with incompleted property within todo Array
    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    // clear div to avoid duplicate dynamic-html element creations
    todoElement.innerHTML = ""
    todoElement.appendChild(generateSummaryDOM(incompleteTodos))

    // if there are todos present in local storage, render. if not. Explain to user
    if (filteredTodos.length > 0) {
        // itterate over filtered notes array and create new element for each note title
        filteredTodos.forEach((todo) => {
            document.querySelector("#filtered-todos-by-searchText").appendChild(generateTodoDOM(todo))
        })
    } else {
        const messageElement = document.createElement("p")
        messageElement.classList.add("empty-message")
        messageElement.textContent = "Create a new task to get started"
        todoElement.appendChild(messageElement)
        console.log(messageElement.textContent)
    }
}

//Remove todo (button in generateTodoDOM())
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        console.log(`Todo with index of "${todoIndex}" has been removed.`)
        todos.splice(todoIndex, 1)
    }
}

// Generate DOM elements for individual notes inside renderNotes()
const generateTodoDOM = (todo) => {
    const todoElement = document.createElement("label")
    const containerElement = document.createElement("div")
    const checkbox = document.createElement("input")
    const textElement = document.createElement("span")
    const deleteButton = document.createElement("button")

    // Setup todo Checkbox
    checkbox.setAttribute("type", "checkbox")
    checkbox.checked = todo.completed
    containerElement.appendChild(checkbox)

    checkbox.addEventListener("change", (e) => {
        //make todo "completed" property true when checkbox is checked
        todo.completed = e.target.checked
        console.log("Completed todos defaulted to checkmarked.")
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Setup text
    textElement.textContent = todo.text
    containerElement.appendChild(textElement)

    // Setup container
    todoElement.classList.add("list-item")
    containerElement.classList.add("list-item__container")
    todoElement.appendChild(containerElement)

    // Setup Delete button
    deleteButton.textContent = "remove"
    deleteButton.classList.add("button", "button--text")
    todoElement.appendChild(deleteButton)
    deleteButton.addEventListener("click", () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    return todoElement
}

// Let user know how many todos they have left (from dom elements)
function generateSummaryDOM(incompleteTodos) {
    const summaryMessage = document.createElement("h2")
    const plural = incompleteTodos.length === 1 ? "" : "s"
    summaryMessage.textContent = ""
    summaryMessage.classList.add("list-title")

    summaryMessage.textContent = `You have ${incompleteTodos.length} incomplete todo${plural} left.`

    return summaryMessage
}
