let array = [1, 2, 3, 4, 5]

array.push (10) //aggiungo 10 in coda
array.unshift (0) //aggiungo 0 in testa

console.log(array)

let pop = array.pop() //rimuovo il valore in coda (10) e lo assegno alla variabile pop
let shift = array.shift() //rimuovo il valore in testa (0) e lo assegno alla varaibile shift

console.log(array)
console.log(pop)
console.log(shift)

let numbers = [1, 2, 3]

numbers.forEach(function (number, index, array) { 
console.log(number, index)
})