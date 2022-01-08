let myBook = {
    title: "Hitchhikers Galaxy Guide",
    author: "Me",
    date: "1.8.22.",
}

console.log(`${myBook.title} by ${myBook.author}`) // template string

myBook.title = "1984" // changes property on mybook's title within object

console.log(`${myBook.title} by ${myBook.author}`) // template string

// Challenge Area: 
// Instructions: Model person: name, age (num), location (country)

// Ex: Chris is 23 and lives in the United States
// Further Instructions: age 1 to age and reprint 


let personInformation = {
    name: "Chris",
    age: 23,
    Country: "United States"
} 

console.log(`${personInformation.name} is ${personInformation.age} and from the ${personInformation.Country}`)
personInformation.age += 1 // adds one to age

console.log(`${personInformation.name} is ${personInformation.age} and from the ${personInformation.Country}`)
