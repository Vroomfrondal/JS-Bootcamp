// Multiple arguments
function add(a, b) {
    return a + b 
}
result = add(10, 1)
console.log(result)


// Default arguments
function getScoreText(name = "Anonymous", score = 0) { // sets default name and score value
    return "Name: " + name + " - Score: " + score
}
let scoreText = getScoreText(undefined, "99")
console.log(scoreText)
console.log("---------------")


// Challenge0: Tip calculator
// Create function getTip that figures out tip based on current bill (in USD), return dollar amount with 2 decimal places.
function createTip(billTotal, tipPercent = .20) { // sets 20% tip default
    let calculatedTip = billTotal * tipPercent
    let billAfterTip = billTotal + calculatedTip
    
    console.log("Base bill: " + "$" + billTotal.toFixed(2))
    console.log("Suggested tip: " + "$" + calculatedTip.toFixed(2))
    console.log("Total after courtsey: " + "$" + billAfterTip.toFixed(2))
}
createTip(405.23) // Enter bill total before tip 