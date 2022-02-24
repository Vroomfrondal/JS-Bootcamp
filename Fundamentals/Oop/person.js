//Prototypal Inheritance

class Person {
    //constructor function
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    setName(fullName) {
        const names = fullName.split(" ")
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

//instance 1
const me = new Person("Chris", "Deleon", 23, ["power lifting", "coding"])
//me.setName("Tuff Hale")
console.log(me.getBio())

//instance 2
const person2 = new Person("Clancy", "Wright", 28)
console.log(person2.getBio())
