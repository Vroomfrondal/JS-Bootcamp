function NewWord(word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}

const game1 = new NewWord("Hello", "9")
console.log(game1)

const game2 = new NewWord("World", "5")
console.log(game2)