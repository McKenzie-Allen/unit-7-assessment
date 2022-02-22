function uniqueLetters(word) {
    let checkArr = new Set([])
    for (let i = 0; i < word.length; i++) {
        checkArr.add(word[i])
    }
    return (word.length === checkArr.size)
}

console.log(uniqueLetters("asdq"))
console.log(uniqueLetters("add"))

console.log(uniqueLetters("apple"))
console.log(uniqueLetters("sponge"))

//This is O(n)