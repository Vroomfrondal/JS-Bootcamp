let a = performance.now()
// Loop over each paragraph and delete words that contain "the"
let allParagraphs = document.querySelectorAll("p")

allParagraphs.forEach(function (paragraph) {
    if (paragraph.textContent.toLowerCase().includes("the")) {
        paragraph.remove()
        console.log(`Items removed: ${paragraph}`)
    }
})

let b = performance.now()
let c = b - a

console.log(`Script runtime: ${c.toFixed(3)} ms.`)
