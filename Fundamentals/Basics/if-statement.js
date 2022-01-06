let temp = 52

if (temp <= 32) {
    console.log("It is freezing outside!")
} else console.log("It is not freezing outside.")

function challenge0() {
    // Create age variable set to your age
    let age = 6
    // calc is child? If they are 7 or under
    let isChild = age <= 7
    //calc is senior? If they are 65 or older
    let isSenior = age >= 65 
    //print is child value
    console.log("Is a child? " + isChild)
    //print is senior value
    console.log("Is a senior? " + isSenior)
}

function challenge1() {
    let age = 66
    let isChild = age <= 7
    let isSenior = age >= 65

    if (isChild) {
        console.log("Your purchase will include a children's discount.")
    }
    if (isSenior) {
        console.log("Your purchase will include a senior citizen discount.")
    }
}

challenge1()


