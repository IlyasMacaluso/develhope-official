// 3- Dato un array di numeri, fare la media dei numeri

let numbers = [11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 6, 7]

const sum = numbers.reduce((a, number) => a + number, 0)

const avg = sum / numbers.length

console.log(avg);