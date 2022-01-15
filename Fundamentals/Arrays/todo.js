const todo = ["Order food", "Groceries", "Workout", "Internship", "School"]

// delete third item
// add new item to end
// remove the first item from the list
todo.splice(2, 1)
todo.push("New item")
todo.shift()
console.log(`You have ${todo.length} todo's!`)


// forEach() Method
// print 1) The first item
// " 2) the second item
// " 3) the "new item"
todo.forEach(function(item, index) {
    console.log(` ${index + 1}. ${item}`)
})
console.log(`-----------`)

// for Loop method

for (items = 0; items < todo.length; items++) {
    const indexTracker = items + 1
    console.log(`${indexTracker}. ${todo[items]}`)
}