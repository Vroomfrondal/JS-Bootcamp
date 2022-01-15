const notes = ["Note 1", "Note 2", "Note 3"]

//console.log(notes.pop())
//notes.push("Note 4")

//console.log(notes.shift()) // removes first element from array
//notes.unshift("My first note")

//read documentation on splice()
//notes.splice(1, 1) //start at index 1 and remove that item
//notes.splice(1, 0, "This is the new second item") //adds item to the middle

notes[2] = "this is my new note 3"

 
notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
}) // function that determines what to do with each item in the array (callback function)


// Counting... 1 (forEach Example)
//console.log(`Counting...`)
//for (count = 0; count < 3; count++) {
//    console.log(count + 1)
//}


console.log(notes.length)
console.log(notes)
console.log("--------------")

