/*- Dato un array di numeri, fare la compressione, ovvero tenere dentro i
valori non duplicati,
Esempio: [1,1,2,2,2,2,3,3] diventa [1,2,3]*/

let numbers = [1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 6, 7]

let arrLenght = Infinity


//primo tentativo (non esattamente ottimizzato anche se funziona, corretto se i numeri uguali non
//si trovano l'uno accanto all'altro, ma si potrebbe utilizzare sort ed il metodo sotto, in quel caso)
//confronta ogni numero con tutti gli altri numeri 

/* for (let i = 0; i < arrLenght; i++) {
    for (let j = 0; j < arrLenght; j++) {
        console.log(numbers[i], numbers[j])
        if (numbers[i] === numbers[j] && i !== j) {
            numbers.splice(numbers[i], 1)
            arrLenght = numbers.length
        }
    }
}
console.log(numbers)
 */

//molto più ottimizzato
//confronta ogni numero con il successivo

for (let i = 0; i < arrLenght; i++) {
    console.log(numbers[i], numbers[i + 1])
    if (numbers[i] === numbers[i + 1] || numbers[i] === numbers[i - 1]) {
        numbers.splice(numbers[i], 1)
        arrLenght = numbers.length
    }
}
console.log(numbers)
