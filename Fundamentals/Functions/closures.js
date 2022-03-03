// Example 1:
// const createCounter = () => {
//     let count = 0

//     //inner function
//     return {
//         increment() {
//             count++
//         },
//         decrement() {
//             count--
//         },
//         get() {
//             return count
//         },
//     }
// }

// //input
// const counter = createCounter()
// counter.increment()
// counter.decrement()
// counter.decrement()
// console.log(counter.get())

// Example 2
// Adder
// const createAdder = (a) => {
//     //inner function
//     return (b) => {
//         return a + b
//     }
// }

// input
// const add10 = createAdder(10)
// console.log(add10(-2))
// console.log(add10(20))
// const add100 = createAdder(100)
// console.log(add100(-90))

// Challenge Closure - tipper
const createTipper = (baseTip) => {
    return (total) => {
        const calculatedTip = baseTip * total
        return calculatedTip + total
    }
}

// 10 percent tip
const calcTenPercentTip = createTipper(0.1)
console.log(calcTenPercentTip(67))

// 20 percent tip... and so on
const calcTwentyPercentTip = createTipper(0.2)
console.log(calcTwentyPercentTip(100))
