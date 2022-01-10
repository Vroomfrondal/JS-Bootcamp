/*let name = "             Christopher Deleon"

// length property
console.log(name.length)

//convert to uppercase
console.log(name.toUpperCase())

//convert to lowercase
console.log(name.toLowerCase())

// includes method
let password1 = "ABC123password098"
console.log(password1.includes("ABC"))

// trim method (for data sanitation)
console.log(name.trim()) */


// Challenge area:

//create function isValidPassword 
//return true if length is more than 8 AND doesn't contain "password"

// Input Examples Below:
//console.log(isValidPassword('asdfp')) // return false cause not long enough
//console.log(isValidPassword('ABC123!@#(&*^')) // should return true cause it satisifies requirement
//console.log(isValidPassword('asdfgpassword')) // should return false cause it contains password

function isValidPassword1(checkPassword) {
    let password = checkPassword
    if (password.length < 8 && password.includes("pass")) {
        console.log("Password is less than 8 characters or contains the word 'pass'")
        return false
    } else {
        return true
    }
}
console.log(isValidPassword1("ABC123!@#(&*^'"))
