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
    // allow for manipulation of the object-instance's name property
    set fullName(fullName) {
        const names = fullName.split(" ")
        this.firstName = names[0]
        this.lastName = names[1]
    }
    // for getBio() within subclasses
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

// Subclass containing employee methods
class Employee extends Person {
    // constructor function that calls super() parent object-constructor
    constructor(firstName, lastName, age, career, likes) {
        super(firstName, lastName, age, career, likes)
        this.career = career
    }
    // change getBio() object-method for workers since they don't want to reveal social-information
    getBio() {
        return `${this.fullName} is a ${this.career}. `
    }
    getRetireDate() {
        return 65 - this.age
    }
}

// Subclass containing student methods
class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, grade, likes)
        this.grade = grade
    }
    // change getBio() object-method for students to print grade message
    getBio() {
        if (this.grade < 70) {
            return `${this.firstName} ${this.lastName} is failing.`
        } else {
            return `${this.firstName} ${this.lastName} is passing.`
        }
    }
    updateGrade(pointsToCalculate) {
        console.log(this.grade + pointsToCalculate)
        return (this.grade += pointsToCalculate)
    }
}

//Challenge Instance
// const employee1 = new Employee("Chris", "Deleon", 23, 70, [])
// student1.fullName = "Kate DeLeon"
// console.log(student1.getBio())
// student1.updateGrade(-10)
// console.log(student1.getBio())

// Employee Instance (custom getters/setters)
const employee1 = new Employee("Chris", "Deleon", 23, "Intern", [])
employee1.fullName = "Kate K."
console.log(employee1.getBio())

//instance 1
// const person1 = new Employee("Chris", "Deleon", 23, "Intern", ["Power Lifting", "Coding"])
// person1.setName("Tuff Hale")
// console.log(person1.getBio())
// console.log(person1.getRetireDate())

//instance 2
// const person2 = new Person("Clancy", "Wright", 28)
// console.log(person2.getBio())
