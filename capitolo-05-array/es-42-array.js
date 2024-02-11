/* Scriviamo il nostro primo array. Scrivi un array di nome numbers 
dove avremo una collezione di numeri da 1 a 10. Di seguito dovremo:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Stampare in console il primo valore
Stampare la lunghezza dell'array
Stampare in console l'ultimo valore
Spiegare il risultato se proviamo a stampare l'elemento dell'array c
on indice venti */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numbers, typeof numbers)

console.log("il primo valore dell'array è:", numbers[0])

console.log("la lunghezza dell'array è di:", numbers.length)

console.log("l'ultimo valore dell'array è:", numbers[9])
/* oppure possiamo utilizzare il metodo numbers.lenght per accedere all'ultimo valore -> 
[numbers.length - 1] perché l'indicizzazione parte da 0, mentre il conteggio della lunghezza parte da 1! */
console.log("l'ultimo valore dell'array è:", numbers[numbers.length - 1])

console.log(numbers[20]); /*non trova alcun valore definito (undefined)
all'indice 20 perchè sono stati definiti valori fino all'indice 9 -> il valroe all'indice 20 non esiste */

console.log("il primo valore dell'array è:", numbers[0], ", la lunghezza dell'array è di:", numbers.length, ", l'ultimo valore dell'array è:", numbers[9])

console.log(`Il primo valore dell'array è: ${numbers[0]}, la lunghezza dell'array è di: ${numbers.length}, l'ultimo valore dell'array è: ${numbers[9]}`)
