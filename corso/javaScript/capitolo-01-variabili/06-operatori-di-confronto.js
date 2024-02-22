let number = "5"
let anotherNumber = 4

// == operatore di uguaglianza
console.log(number == 5) // converte in automatico le stinghe contenenti numeri in numeri se necessario per il confronto
console.log(false == '') // converte in automatico valore Falsy in false se necessario per il confronto
console.log(number == anotherNumber)

// === operatore di uguaglianza stretta
console.log(number === 5) // i dati devono essere identici (anche dello stesso tipo), non viene effettuato type conversion

// >, >=, <, <= operatori di confronto maggiore(o uguale)/minore(o uguale)
let string1 = "a"
let string2 = "b"
console.log(number >= 5) // converte in automatico le stinghe contenenti numeri in numeri se necessario per il confronto
console.log(string1 < string2) // nel caso di confronto di stringhe prende in considerazione l'ordine lessicografico

// ordine lessicografico: prende in considerazione la lunghezza della stringa e la posizione del carattere all'interno della tabella dei caratteri unicode 
// da evitare il confronti >, >=, <, <= tra stringhe.