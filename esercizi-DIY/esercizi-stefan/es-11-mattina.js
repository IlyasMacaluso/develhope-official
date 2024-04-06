/*11- Dato un array di numeri o stringhe, stamparlo al contrario (senza
usare reverse), data una stringa stamparla al contrario*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let string = "ciao come stai?"
let inverseNums = []
let inverseString = []

for (let i = 1; i <= numbers.length; i++) {
    inverseNums.push(numbers[numbers.length - i])
    
}
for (let i = 1; i <= string.length; i++) {
    inverseString.push(string[string.length - i])
}

console.log(inverseNums);
console.log(inverseString.toString().replaceAll(",", ""));