let array = [28, 43, -11, 30, 4, 0, 12]

function addToZero(arr) {
    let addZero = "false"
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let x = i; x >= 0; x--) {
            if (i !== x) {
                if (arr[i] + arr[x] === 0) {
                    addZero = "true"
                }
            }
        }
    }
    return addZero
}

console.log(addToZero(array))

//currently this fuction is O(n^2)