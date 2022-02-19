// Primitive Value: string, number, boolean, null, undefined

// This is the prototype chain (inspect in the browser dev tools)
// Object: myObject --> product --> Object.prototype --> null (chain ends)
// Array: myArray --> Array.prototype --> Object.prototype --> null (chain ends)
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBool --> Boolean.prototype --> Object.prototype --> null

// const team = new Array(["Luke", "Maddison"])
// console.log(team.hasOwnProperty("length"))

const product = "computer"
console.log(product.split(""))

// string constructor function
const otherProduct = new String("Phone")
console.log(otherProduct)
