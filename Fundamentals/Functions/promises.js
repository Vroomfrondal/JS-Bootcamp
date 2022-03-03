// Callback Technique
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback("Callback Error", undefined)
    }, 2000)
}

getDataCallback((error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})

// Promise Technique - shorthand syntax for a function that returns a resolved promise
const getDataPromise = (data) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`this is my success data: ${data}`)
            //resolve("Data goes here. Promise Data")
            //reject("This is my promise error")
        }, 2000)
    })

const myPromise = getDataPromise(12345)
myPromise.then(
    (data) => {
        console.log(data)
    },
    (error) => {
        console.log(error)
    }
)

myPromise.then(
    (data) => {
        console.log(data)
    },
    (error) => {
        console.log(error)
    }
)
