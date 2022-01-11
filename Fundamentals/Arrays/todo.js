//create an array with five todos
// you have X todos

const todo = ["Order food", "Groceries", "Workout", "Internship", "School"]

// delete third item
// add new item to end
// remove the first item from the list

todo.splice(2, 1)
todo.push("New item")
todo.shift()

console.log(`You have ${todo.length} todo's!`)
console.log(todo)

