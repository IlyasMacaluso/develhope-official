//Esegui il casting delle variabili seguendo i suggerimenti e stampa il risultato dell'operazione.
//Spiega il casting della variabile hello

let hello = 'Ciao';     // number
let age = 18;       // boolean
let isGraduated = false;     // string

console.log(Number(hello)) //da come risultato NaN perchè non può corvertire una parola in un numero
console.log(Boolean(age)) // -> true perchè non fa parte di quei specifici valori di tipo Falsy
console.log(String(isGraduated)) 