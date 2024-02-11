let array = [1,2,3,4,5,6]
/*ad ogni elemento di un array, è associato un indice.*/

let array1 = [
    1, //indice 0
    2, //indice 1
    3,
    4,
    5, 
    6, //indice 5
]

let three = array[2] /* possiamo accedere agli elementi
di u array attraverso il loro indice (in questo caso
salviamo in una nuova variabile l'elemento corrispondente
all'indice 2 dell'array "array" */
console.log (three)

/* con gli array non possiamo usare la dot notation
per accedere al contenuto di un elemento specifico
all'interno dell'array, ma possiamo usare 
la bracket notation [] allo stesso modo */

//LENGTH
//ci permette di sapere quanti elementi ci sono all'interno di u narray

array1.length
console.log(array1.length);

//FOR negli array

for (let i = 0; i < array1.length; i++){
    console.log(`Ciclo for: ${array1[i]}`)
}

//OGGETTI negli ARRAY

let arrobject = [
    { name: "Olio", age: 26, },
    { name: "Ilio", age: 29, },
]

for (let i = 0; i < arrobject.length; i++){
    //console.log(`Ciclo for: ${arrobject[i]}`) da chiedere a riccardo
    console.log(arrobject[i]);
    //possiamo usare la dot notation per indicare un solo elemento all'interno dell'oggetto
    console.log(arrobject[i].name);
    //possiamo anche spezzare ^ in due passaggi
    let person1 = arrobject[i] //person1 contiene l'indirizzo di un oggetto all'interno di un array
    console.log(person1.age) //possiamo trattare person1 come un oggetto (sintatticamente)
}

//ARRAY negli OGGETTI

let objerray = {
    name: "Ilys",
    age: 21,
    favoriteColors: ["green", "yellow"]
}
    console.log(objerray.favoriteColors); //stampa l'array all'interno dell'oggetto
    console.log(objerray.favoriteColors[0]) 
    /*possiamo utilizzare la bracket notion per indicare 
    l'indice di un singolo elemento dell'array*/


//GLI ARRAY SONO SALVATI BY REFERENCE

let person = arrobject //copia l'indirizzo -> person e arrobject sono collegati

/* possiamo effettuare una copia come facevamo per gli oggetti, utilizzando un 
ciclo for (in quel caso si usa il for..in) */

let arrobjCopy = []

for (let i = 0; i < arrobject.length; i++){
    arrobjCopy[i] = arrobject[i]
}

console.log(arrobjCopy);