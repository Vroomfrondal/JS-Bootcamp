// Challenge 1:
// 1) Model a realworld expense with 2 properties: -> 1) description 2) amount
// 2) Two methods needed inside object:
// a) addExpense() -> 2 arguments: description, amount. Adds expense to an account
// b) getAccountSummary() -> No arguments. Totals up all expenses -> print example: "Chris bOnk has $10 in expenses"
// hint: to calculate total... forEach() each item in array

// Challenge 2:
// 1) create addIncome() method
// 2) tweak getAccountSummary() to include income
// 3) calculate balance in getAccountSummary and add it to a template string

const account = {
    name: "Chris bOnk",
    expenses: [],
    incomes: [],
    addExpense: function (description, amount) {
        //
        this.expenses.push({
            description: description,
            amount: amount,
        })
    },
    addIncome: function (description, amount) {
        this.incomes.push({
            description: description,
            amount: amount,
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncomes = 0
        let accountBalance = 0

        // calculate expenses & income based on arrays in object
        this.expenses.forEach(function (expenseSource) {
            totalExpenses += expenseSource.amount
        })
        this.incomes.forEach(function (incomeSource) {
            totalIncomes += incomeSource.amount
        })

        // balance logic
        accountBalance = totalIncomes - totalExpenses

        // output
        return `${account.name} has a balance of $${accountBalance.toLocaleString()}. $${totalExpenses.toLocaleString()} in expenses and $${totalIncomes.toLocaleString()} in income.`
    },
}

// input:
let a = performance.now()

account.addExpense("Rent", 1050)
account.addExpense("Electric", 123)
account.addExpense("Wifi", 75)
account.addIncome("Unrealized stock gains Jan. 2022", 967)
account.addIncome("Snoopy's Paychecks Jan. 2022", 1500)
console.log(account.getAccountSummary())

let b = performance.now()
let c = b - a

console.log(`Runtime: ${c.toFixed(3)} ms.`)
