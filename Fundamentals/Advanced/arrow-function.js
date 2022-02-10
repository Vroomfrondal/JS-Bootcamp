// const square = (num) => num * num

// const squareLong = (num) => {
//     return num * num
// }

// console.log(square(20))

const people = [
    {
        name: "Chris",
        age: 23,
    },
    {
        name: "Kate",
        age: 22,
    },
    {
        name: "Zeppo",
        age: 25,
    },
]

// all the same function below
// const under30 = people.filter(function (person) {
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)
console.log(under30)

const is22 = people.find((person) => person.age === 22)
console.log(is22.name)
