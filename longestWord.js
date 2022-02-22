function findLongestWord(wordArr) {


    let wordLength = []
    wordArr.forEach(element => {
        wordLength.push(element.length)
    });

    return Math.max(...wordLength)
}

console.log(findLongestWord(["hi", "hello"]))


//notation is O(n)