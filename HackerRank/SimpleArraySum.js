const size = 6
const numbers = [1, 2, 3, 4, 10, 11]

function simpleArraySum(ar) {
    var sum = 0

    ar.forEach(element => {
        sum += element
    })

    return sum
}

console.log(simpleArraySum(numbers))
