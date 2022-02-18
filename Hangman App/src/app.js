// Prototype chain (code is searching up the chain)
// product -> Object.prototype --> null (chain ends)
const product = {
    name: "Hitchhikers Guide to the Galaxy",
}

//hasOwnProperty
console.log(product.hasOwnProperty("hasOwnProperty"))
console.log(product)
