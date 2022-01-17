// Challenge 1:
// Expense properties -> description(string), amount(int),

// Two methods on account:
// addExpense -> takes two args: description and amount. Add new object onto expenses array in account.
// getAccountSummary -> no args. Sum up all expenses and print "Topher has $1250 in expenses to calc total... forEach each item in expenses array and store in variable.

const account = {
    name: "Topher",
    expenses: [],
    addExpense: function (description, amount) {
        // adds expense description and amount to "expenses" array so we can calculate in getAccountSummary()
        this.expenses.push({
            description: description,
            amount: amount,
        })
    },
    getAccountSummary: function () {
        let sumOfExpenses = 0
        this.expenses.forEach(function (expense) {
            sumOfExpenses += expense.amount
        })

        return `${account.name} has $${sumOfExpenses} in expenses.`
    },
}

// Input
account.addExpense("Rent", 950) // in dollars
account.addExpense("Coffee", 2)
console.log(account.expenses)
console.log(account.getAccountSummary())
