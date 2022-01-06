let isAccountLocked = false
let userRole = "admin"

if (isAccountLocked) {
    console.log("Account is locked.")
} else if (userRole == "admin") {
    console.log("Welcome, " + userRole + ".")
}

// Challenge 0: Create script that responds with: 
// "It is freezing outside" if its freezing.
// "Its hot outside" if its 70f or more
// "Go for it. It is pretty nice." if its in between 70 and 32.
function challenge0() {
    let temp = 65 

    if (temp <= 32) {
        console.log("It is freezing outside.")
    } else if (temp >= 70) {
        console.log("It is hot outside at " + temp + " degrees.")
    } else {
        console.log("Go for it. It's pretty nice outside at " + temp + " degrees")
    } 
}
challenge0()