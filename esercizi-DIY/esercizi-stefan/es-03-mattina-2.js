// 3- Dato un array di numeri, fare la media dei numeri
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let avg = numbers.reduce((number, sum) => sum = number+sum, 0) / numbers.length
console.log(avg);