//Description available on: https://www.hackerrank.com/challenges/simple-array-sum/problem

const numbers = [1, 2, 3, 4, 10, 11];

function simpleArraySum(ar) {
    let sum = 0;

    ar.forEach(element => {
        sum += element
    });

    return sum;
}

console.log(simpleArraySum(numbers));
