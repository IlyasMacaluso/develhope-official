// Dato un array di numeri, trovare i numeri pari / dispari

let numbers = [1,2,3,4,5,6,7,8,9,10]

let odds = []
let even = []

numbers.forEach(number => {
    if (number % 2 === 0) {
        even.push(number)
    } else {
        odds.push(number)
    }
})

console.log(odds, even);