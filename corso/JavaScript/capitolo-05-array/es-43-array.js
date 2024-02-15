/* Abbiamo bisogno di scrivere un array che chiameremo students. 
Questo array conterrà tre oggetti con le seguenti informazioni:

id
name
surname
age

Dobbiamo scrivere queste informazioni per tre studenti diversi. Dopo averlo fatto, 
vogliamo stampare le info solamente del primo studente.

Indicazioni utili:

Dentro il nostro array, avremo tre oggetti, ogni oggetto conterrà le info di uno studente
Dobbiamo stampare solamente il primo elemento dell'array */

let students = [
    {
        id: 1237,
        name: "Ilyas",
        surname: "Macaluso",
        age: 26,   
    },
    {
        id: 1238,
        name: "Silvio",
        surname: "Vutea",
        age: 30,   
    },
    {
        id: 1239,
        name: "Ludovico",
        surname: "Mazzucco",
        age: 34,   
    },
]

console.log(students[0])
//console.log(students[1])
//console.log(students[2])

//console.log(students);

