function sum (...numbers){
	return  numbers.reduce((a, number) => a + number, 0)
}

const mySum = sum (5,6,7,8,9,10,11)

console.log(mySum) //stampa 56

// Possiamo anche creare una funzione che prende come parametro un numero
// definito di valori specific, più un numero indefinito di altri valori

function sum1 (x, y, ...numbers){
    console.log (x + y) //stampa 11
	return  numbers.reduce((a, number) => a + number, 0)
}

const mySum1 = sum1 (5,6,7,8,9,10,11)

console.log(mySum1) //stampa 45