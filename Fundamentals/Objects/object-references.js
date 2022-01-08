let myAccount = {
    name: "Chris Deleon",
    expenses: 0, // default
    income: 0, // default
}

function addExpense(account, amount) {
    account.expenses = account.expenses + amount 
} 

addExpense(myAccount, 2.50) // adds a coffee-expense to certain account
console.log(myAccount)
console.log("--------------------")


// Challenge: Income/expense calculator

// function addIncome
// function resetAccount = resets expenses and income to 0
// getAccountSummary = prints summary object of account including balance and expenses in income

// Ex: Account for Chris has $900. $1000 in income. $100 in expenses
/* 
addIncome
addExpense
addExpense
getAccountSummary
resetAccount
getAccountSummary
*/



let account1 = {
    name: "Chris",
    Expenses: 0,
    Income: 0,
}

let account2 = {
    name: "Jeff",
    Expenses: 0,
    Income: 0,
}

function main() {
    addExpense()
    addIncome()
    getAccountSummary()
    resetAccount()
    getAccountSummary()
}
main()


function getAccountSummary() {
    let accountSummary = account1 
    console.log(`Account name: '${accountSummary.name}' has $${accountSummary.Expenses} in expenses. And an income of $${accountSummary.Income}.`)
}

function resetAccount() {
    account1.Expenses = 0
    account1.Income = 0
}

function addIncome() {
    let income = 10000 // Enter: persons income
    account1.Income =+ income

}
function addExpense() {
    let expense = 100 // Enter: new expense 
    account1.Expenses =+ expense
}