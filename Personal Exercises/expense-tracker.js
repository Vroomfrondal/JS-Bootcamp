// Challenge 1 Expenses:
// Expense properties -> description(string), amount(int),
// Two methods on account:
// addExpense -> takes two args: description and amount. Add new object onto expenses array in account.
// getAccountSummary -> no args. Sum up all expenses and
// print "Topher has $1250 in expenses to calc total.

//Challenge 2:
// 1. add income array to account
// 2. set up addIncome method -> takes description, amount as arguments.
// 3. Tweak getAccountSummary to find account balance (income - expenses)
// Ex. Output: Topher has a balance of $10. $100 in income. $90 in expenses.

// this version is better because it went from tracking a single...
// number to tracking an object of expenses, therfore more accurate.

const account = {
    name: "Topher Deleon",
    expenses: [],
    incomes: [],
    addExpense: function (description, amount) {
        // adds "description" & "amount" objects to "expenses" array within account
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
        let sumOfExpenses = 0
        let sumOfIncomes = 0
        let balance = 0

        //calculate total expenses & incomes based on properties in object-method
        this.expenses.forEach(function (expense) {
            sumOfExpenses += expense.amount
        })
        this.incomes.forEach(function (income) {
            sumOfIncomes += income.amount
        })

        //calculate balance
        balance = sumOfIncomes - sumOfExpenses

        return `${account.name} has a balance of $${balance.toLocaleString()}. $${sumOfIncomes.toLocaleString()} in income & $${sumOfExpenses.toLocaleString()} in expenses.`
    },
}

// Input (numbers are USD)
account.addExpense("Rent", 1405)
account.addExpense("Coffee", 2)
account.addIncome("Job", 1001)
account.addIncome("Stock Profits", 3423)

console.log(account.getAccountSummary())
