const products = []
const product = products[0]

// Truthy: values that resolve to true in a boolean context
// Falsy: values that resolve to false in a boolean context
// Falsy Values - false, number 0, empty string "", null, undefined, NaN
// Truthy Values - anything else including empty arrays or objects

//if array is empty you're getting undefined
if (product) {
    console.log("Product found")
} else {
    console.log("Product not found")
}
