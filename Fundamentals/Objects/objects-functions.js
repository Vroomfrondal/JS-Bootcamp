let myBook = {
    title: "Hitchhikers Galaxy Guide",
    author: "Me",
    date: "1.8.22.",
}

let myBook1 = {
    title: "1984",
    author: "George Orwell",
    date: "1.8.22.",
}

function getSummary(book) {
    return {
       summary: `Book title: ${myBook.title}, By: ${myBook.author}`, 
       pageCountSummary: `${myBook.title} was published on ${myBook.date}`,
    }
}

let bookSummary = getSummary(myBook)
let bookSummary1 = getSummary(myBook1)

console.log(bookSummary.pageCountSummary)

// Challenge Area: 
// Create a function that takes (Fahrenheit). return: Fahrenheit, converted celsius, and converted kelvin.


function exercise(fahrenheit) {
    let celsius =  5/9 * (fahrenheit - 32)
    let kelvin = celsius + 273.15
    return {
        summary: `The temp is ${fahrenheit}F -- Or: ${celsius}C -- Or: ${kelvin}`
    }
}

let weatherDetails = exercise(95)
console.log(weatherDetails.summary)