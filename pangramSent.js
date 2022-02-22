function isPangram(string) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let uniqueLetters = 0
    let check = false
    const stringArr = string.split('')
    for (let i = 0; i < alphabet.length; i++) {
        if (stringArr.includes(alphabet[i])) {
            uniqueLetters++
        }
    }
    if (uniqueLetters === alphabet.length) {
        check = true
    }
    return check

}




console.log(isPangram("The quick brown fox jumps over the lazy dog!"));