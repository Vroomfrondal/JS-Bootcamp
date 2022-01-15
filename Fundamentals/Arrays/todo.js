const todo = ["Order food", "Groceries", "Workout", "Internship", "School"]

const todo = [{
    text: "Order Food",
    completed: false,
}, {
    text: "Groceries",
    completed: true,
}, {
    text: "Workout",
    completed: true,
}, {
    text: "Internship",
    completed: true,
}, {
    text: "School",
    completed: false,
}]

// 1. Convert array of strings to objects --> Properties: text, completed?
// 2. Create function that allows you to remove todo by text value (case sensitive)
    // steps: find index of item, if found, delete the item.

deleteTodos(todos, "remove this todo")
console.log(todos)