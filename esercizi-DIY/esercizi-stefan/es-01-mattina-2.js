// 1- Dato un array di numeri, trovare il massimo / minimo
let numbers = [10 ,20, 5, 2, 1, 11]

let max
let min

numbers.forEach(number => {
    if (number > max || max === undefined) {
        max = number
    } else if (number < min || min === undefined){
        min = number
    }
})
console.log(min, max);