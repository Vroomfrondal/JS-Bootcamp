// Callback Technique
const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === "number") {
            callback(undefined, num * 2)
        } else {
            callback("Number must be provided")
        }
    }, 2000)
}

// callback hell - don't write code like this. Use Promises
getDataCallback(2, (error, data) => {
    if (error) {
        console.log(error)
    } else {
        // update getDataCallback
        getDataCallback(data, (error, data) => {
            if (error) {
                console.log(error)
            } else {
                console.log(data)
            }
        })
    }
})

// Promise Technique - shorthand syntax for a function that returns a resolved promise
const getDataPromise = (num) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            typeof num === "number" ? resolve(num * 2) : reject("Number must be provided.")
        }, 2000)
    })

//taking 2 to get 4. then passing into getDataPromise() to get 8.
getDataPromise(2).then(
    (data) => {
        getDataPromise(data).then(
            (data) => {
                console.log(`Promise data: ${data}`)
            },
            (error) => {
                console.log(error)
            }
        )
    },
    (error) => {
        console.log(error)
    }
)

// Promise-chaining
getDataPromise(10)
    .then((data) => {
        // Promise-Chaining
        return getDataPromise(data)
    })
    .then((data) => {
        return `this is some test data`
    })
    .then((data) => {
        console.log(data)
    })
    //error handler function
    .catch((error) => {
        console.log(error)
    })
