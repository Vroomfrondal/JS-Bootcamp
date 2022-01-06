// Global (name)
    // Local (name)
        // Local
    // Local

let name = "Christopher"

if (true) {
    let name = "Mike"

    if (true) {
        let name = "Jen" 
        console.log(name)    
    }
}

// Goes to parent-tree to find variable "Christopher"
if (true) {
    console.log(name)
}
