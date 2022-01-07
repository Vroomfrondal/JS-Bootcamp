// Create a grade calculator function. arg1: students score. arg2: total possible score.
// Ex: 15/20 -> You got a "C" (75%) (return a string)

function calcGrade(studentScore, totalScorePossible) {
    //calc score & convert to percentage
    calculatedScore = (studentScore / totalScorePossible )
    scoreConvertedToPercentage = (calculatedScore * 100)

    return scoreConvertedToPercentage
}

function determineGradeLetter() {
    let A = {
        from: 90,
        to: 100,
    }
    let B = [89, 88, 87, 86, 85, 84, 83, 82, 81, 80]
    let C = [79, 78, 77, 76, 75, 74, 73, 72, 71, 70]
    let D = [69, 68, 67, 66, 65, 64, 63, 62, 61]
    let F = { 
        from: 0,
        to: 59
    }
    

    //if (score == A) {
    //    console.log("You recieved an A! ")
    //} else if(score == B) {
    //    console.log("You recieved a B! ")
    //}
//
    if (scoreConvertedToPercentage == A) {
        let score = "A"
        return score
    }
}

function main() {
    calcGrade(19, 20) // student's score, total possible score on test
    determineGradeLetter()
    console.log(score)
}

main()