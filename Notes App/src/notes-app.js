// Dom - Document Object MOdel

// Query & Remove single paragraph tag
//const paragraph = document.querySelector("p")
//paragraph.remove()

// Query & Remove multiple tags
const multiParagraphs = document.querySelectorAll("p")

multiParagraphs.forEach(function (paragraph) {
    //rename text in paragraph tags
    paragraph.textContent = "Encrypted Text"

    //print text to console
    //console.log(paragraph.textContent)

    //paragraph.remove()
})
