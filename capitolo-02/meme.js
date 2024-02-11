let a = 3
let b = 2

let result = a > 2 || b < 5 // true (entramble le condizioni sono verificate)
let result2 = a > 2 || b < 2 // true (solo una condizione è verificata)
let result3 = a > 3 || b < 2 // false (nessuna delle condizioni è verificata)

console.log(result)
console.log(result2)
console.log(result3)