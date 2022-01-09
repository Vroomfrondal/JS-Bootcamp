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
console.log(" ----------End of Assignment -----------")


console.log(" ----------Challenge Area Below -----------")

// Challenge: Income/expense calculator
// Ex: Account for "Chris" has $900. $1000 in income. $100 in expenses (calculates balance)
// Hint: addIncome, resetAccount, addExpense, getAccountSummary are the required tasks


let account1 = {
    name: "Chris",
    expenses: 0,
    income: 0,
}

let account2 = {
    name: "Kate",
    expenses: 0,
    income: 0,
}

function main() {
    getAccountSummary(account1)
    addIncome(account1, 100)
    addExpense(account1, 20)
    getAccountSummary(account1)
    resetAccount(account1)
    getAccountSummary(account1)
    
}
main()

function addExpense(account, expenseAmount) {
    account.expenses = account.expenses + expenseAmount
}

function addIncome (account, income) {
    account.income = account.income + income
}

function resetAccount (account) {
    account.income = 0
    account.expenses = 0 
    console.log(`Account name "${account.name}" has been reset.`)
}

function getAccountSummary(account) {
    let accountBalance = account.income - account.expenses //calculates 
    console.log(`Account name: "${account.name}" has $${accountBalance}. $${account.income} in income. $${account.expenses} in expenses.`)
}