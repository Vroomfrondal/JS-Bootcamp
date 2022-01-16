// 1. Convert array of strings to objects --> Properties: text, completed?
// 2. Create function that allows you to remove todo by text value (case sensitive)
// steps: find index of item, if found, delete the item.

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

// removes a task from a specific todo list, based on if todoText matches the string of our task
function deleteTodo(todos, todoText) {
    // find index of todoText you're passing into function argument
    const index = todos.findIndex(function (todoItem, index) {
        return todoItem.text.toLowerCase() === todoText.toLowerCase()
    })

    //check if index matches string we're looking for. -1 for match, 0+ for no match
    if (index > -1) {
        todos.splice(index, 1)
    } else {
        console.log("No todo item matches this search.")
    }
}
// console.log(todos)
// deleteTodo(todos, "groceries")
// console.log(todos)

function getThingsToDo(todos) {
    console.log("Tasks that still need done:")

    //filter array of todo tasks with a completed property of "false".
    return todos.filter(function (todoItem) {
        return !todoItem.completed
        //return todoItem.completed === false
    })
}
// console.log(getThingsToDo(todos))

// sorts all tasks within a todo list, incomplete tasks first.
function sortTodos(todos) {
    todos.sort(function (a, b) {
        // A = -1, B = 1, C = 0
        if (a.completed < b.completed) {
            return -1
        } else if (a.completed < b.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)
