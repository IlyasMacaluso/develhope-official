/* 9- Dato un intero n stampare a video la sequenza di fibonacci dei primi n
numeri,
Esempio: se n = 8 stampo : 1, 1, 2, 3, 5, 8, 13, 21 */

const n = 9

let a = 0
let b = 1
let fibonacciArr = []

//soluzione 1
/* function fibonacci(number) {
    for (let i=0; i<number; i++) {
        c = b
        console.log(a + b)
        b = a + b
        a = c
    }
}
fibonacci(n) */

//soluzione 2
function oneToNArray(number) {
    let newArray = []
    for (let i = 1; i <= number; i++) {
        newArray.push(i)
    }
    return newArray
}

function fibonacci(number) {
    let array = oneToNArray(number)
    for (let i = 0; i < array.length; i++) {
        if (array[i-1] &&  array[i-2]) {
            array[i] = array[i-1] + array[i-2]
        }
    }
    console.log(array)
}
fibonacci(8)

