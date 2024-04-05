/* Dati due array di numeri, trovare l’array intersezione, ovvero l’array
che contiene tutti i numeri che i 2 array hanno in comune,
Esempio: tra [1,2,3,4,5] e [2,2,5,3] l’intersezione è [2,3,5] */
let numbersA = [11, 10, 9, 1, 2, 2, 2, 3, 4, 5, 3, 4, 5, 6, 7, 8, 9]
let numbersB = [9, 8, 7, 5, 3, 1, 11]
let intersection = []

let noDoublesA = new Set (numbersA)
let noDoublesB = new Set (numbersB)

let arrNoDoublesA = [...(noDoublesA)]
let arrNoDoublesB = [...(noDoublesB)]

//manca l'intersezione
arrNoDoublesA.forEach(numberA => {
    arrNoDoublesB.forEach(numberB =>{
        console.log(numberA, numberB);
        if (numberB === numberA){
            intersection.push(numberA)
        }
    })
})
console.log(intersection.sort((a,b) => a - b))