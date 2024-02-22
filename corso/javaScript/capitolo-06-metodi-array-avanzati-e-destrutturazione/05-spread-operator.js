const firstArray = [1, 2, 3, 4, 5]
const secondArray = [1, 2, 3, 4, 5]

const myArray = [...firstArray] //copia tutti gli elementi di firstArray in myArray
const chainArray = [...firstArray, ...secondArray] //concatena i due array all'interno del nuovo array chainArray

console.log(myArray)
console.log(chainArray);