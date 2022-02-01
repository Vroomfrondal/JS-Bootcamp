const todos = [
    {
        text: "Go to work",
        completed: false,
    },
    {
        text: "Go to internship",
        completed: false,
    },
    {
        text: "Go to the gym",
        completed: false,
    },
    {
        text: "Use the car wash",
        completed: true,
    },
]

const filters = {
    searchText: "",
}

function renderTodos(todos, filters) {
    // step 1: return new array with todos that have a text including our filtered word
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // step 2: clear div to avoid duplicate dynamic-html element creations (before rendering)
    document.querySelector("#filtered-todos-by-searchText").innerHTML = ""

    // step 3: itterate over filtered notes array and create new element for each note title
    filteredTodos.forEach(function (todo) {
        const newTodoElement = document.createElement("p")
        newTodoElement.textContent = todo.text
        document.querySelector("#filtered-todos-by-searchText").appendChild(newTodoElement)
    })

    // store incomplete or "false" todos for later use
    let incompleteTodoCount = 0
    filteredTodos.forEach(function (todo) {
        if (todo.completed == false) {
            incompleteTodoCount += 1
        }
    })

    // clear div to avoid duplicate dynamic-html element creations (after calculations, before rerendering)
    document.querySelector("#filtered-todos-by-searchText").innerHTML = ""

    // Let user know how many todos they have left
    let summaryMessage = document.createElement("h2")
    summaryMessage.textContent = `You have ${incompleteTodoCount} tasks left.`
    document.querySelector("#filtered-todos-by-searchText").appendChild(summaryMessage)

    // dynamically populate html paragraphs with todo items that are incompleted
    filteredTodos.forEach(function (todo) {
        if (todo.completed == false) {
            const addTodoTask = document.createElement("p")
            addTodoTask.textContent = todo.text
            document.querySelector("#filtered-todos-by-searchText").appendChild(addTodoTask)
        }
    })
    // Apend todo list with input from newTodo HTML form
    document.querySelector("#new-todo").addEventListener("submit", function (e) {
        e.preventDefault()
        console.log(e.target.newTodo.value)
        e.target.newTodo.value = ""

        //manipulate todos array with user form text-input from above
        todos.push({
            text: "test",
            completed: false,
        })
        renderTodos(todos, filters)
    })
}
renderTodos(todos, filters)

// event listener to make above filter function render
document.querySelector("#search-text").addEventListener("input", function (e) {
    // e.target.value targets the value which in this case is a string of the searchText
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})
