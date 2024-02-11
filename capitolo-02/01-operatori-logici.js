let a = 5
let b = 20

let result = a > 2 && b < 5 // false perchè AND restituisce TRUE solo se tutte le condizioni sono verificate
let result2 = a > 2 || b <5 // true perchè OR restituisce FALSE  solo se tutte le condizioni non sono verificate

console.log(result) //false
console.log(result2) //true

let result3 = a > 2 || (b < 5 && a + b > 20) 
//nelle espressioni booleane AND ha la precedenza su OR

console.log(result3) //true (una delle due condizioni è verificata (a > 2))

//possiamo considerare AND come un operatore di moltiplicazione e OR come un operatore di somma
//ad esempio 

let c = true //possiamo considerare true = 1
let d = true 
let e = false //possiamo considerare false = 0

console.log("c AND d:" , c && d) // 1 * 1 = 1 -> true
console.log("c AND e:" , c && e) // 1 * 0 = 0 -> false
console.log("c OR d:" , c || d) // 1 + 1 = 2 -> true
console.log("c OR d:" , c || e) // 1 + 0 = 1 -> true

// ! operatore logico NOT -> inverte il valore in termini booleani
let A = true
let B = !A //false

console.log("A:" , A)
console.log("B (NOT A):" , B)

let C = 20 
let D = !C //20 in termini booleani è un valore Thruty -> true -> d = false

console.log("C:" , C , "Thruthy")
console.log("D (NOT C):" , D)

//anche in caso di stringhe, NOT prende in considerazione se è il vaore è Thruty o Falsy

//possiamo applicare l'operatore not due volte per convertire un valore di tipo number o string in un valore booleano
let E = !!C //si ottiene lo stesso risultato che con la conversione Boolean(c)

console.log("C:" , C , "Thruthy")
console.log("E (NOT NOT C):" ,E)