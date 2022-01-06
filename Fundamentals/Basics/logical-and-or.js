// && - and operator
// || - or operator

let temp_f = 40 

// Logical And Operator - True if both sides are true. False otherwise
if (temp_f >= 60 && temp_f <= 90) {
    console.log("It is pretty nice outside.")
}

// Logical Or Operator - True if both sides are true. False otherwises
if (temp_f <= 45 || temp_f >= 105) {
    console.log("Extreme weather warning.")
    console.log("---------------------------")
}


// Challenge0 Area: 
// Are both vegan? log: Only offer vegan dishes in
// At least one guest is vegan. Log: Offer vegan and normal foods 
// No one is vegan. else: offer only normal food
// use if statements

function challenge0() {
    let isGuestOneVegan = true
    let isGuestTwoVegan = false

    if (isGuestOneVegan && isGuestTwoVegan) {
        console.log("Display vegan dishes only.")
    } else if (isGuestOneVegan && isGuestTwoVegan == false) {
        console.log("Display meat and vegan dishes.")
    } else if (isGuestOneVegan == false && isGuestTwoVegan == false) {
        console.log("Display meat dishes only")
    }
}
challenge0()


