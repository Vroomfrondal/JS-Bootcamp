// Create a grade calculator function. arg1: students score. arg2: total possible score.
// Ex: 15/20 -> You got a "C" (75%) (return a string)

function main() {
    calcGrade(92, 100) // Enter: student's points, total possible points on test  
    determineGradeLetter() 
}

main()

function calcGrade(studentScore, totalScorePossible) {
    //calculate score & convert to percentage
    calculatedScore = (studentScore / totalScorePossible )
    scoreConvertedToPercentage = (calculatedScore * 100) 

    return scoreConvertedToPercentage
}

function determineGradeLetter() {
    let percentage = scoreConvertedToPercentage

    // Determine what Letter corresponds with scoreConvertedToPercentage 
    // Grading scale: 
    if (percentage >= 90 && percentage <= 100) {
        console.log("You made an A " + "with a " + percentage + "%" + "!")
    } else if (percentage >= 80 && percentage <= 89) {
        console.log("You made a B " + "with a " + percentage + "%" + "!")
    } else if (percentage >= 70 && percentage <= 79) {
        console.log("You made a C " + "with a " + percentage + "%" + "!")
    } else if (percentage >= 60 && percentage <= 69) {
        console.log("You made a D " + "with a " + percentage + "%" + "!")
    } else if (percentage <= 60) {
        console.log("You made a F " + "with a " + percentage + "%" + "!")
    }
}
