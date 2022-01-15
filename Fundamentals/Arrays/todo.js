// 1. Convert array of strings to objects --> Properties: text, completed?
// 2. Create function that allows you to remove todo by text value (case sensitive)
// steps: find index of item, if found, delete the item.

const todos = [
    {
        text: "Order Food",
        completed: false,
    },
    {
        text: "Groceries",
        completed: true,
    },
    {
        text: "Workout",
        completed: true,
    },
    {
        text: "Internship",
        completed: true,
    },
    {
        text: "School",
        completed: false,
    },
]

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

function getThingsToDo(todos) {
    console.log("Tasks that still need done:")

    //filter array of todo tasks with a completed property of "false".
    return todos.filter(function (todoItem) {
        return !todoItem.completed
        //return todoItem.completed === false
    })
}
console.log(getThingsToDo(todos))

// console.log(todos)
// deleteTodo(todos, "groceries")
// console.log(todos)
