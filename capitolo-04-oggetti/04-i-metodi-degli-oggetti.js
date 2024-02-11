let person = {
    name: "Ilyas",
    age: 26,
}

//in JS tutto è un oggetto, infatti se provassimo a creare una funzione

function myFunction(){}

//nel momento in cui digitiamo il punto, si aprirà una tendina con una serie
//di funzioni disponibili

myFunction //digita "." dopo myFunction per vedere

//quindi dopo il punto possiamo invocare delle funzioni su di essa

//stessa cosa vale anche per valori primitivi come stringhe
//e numeri (al secondo punto, perchè il primo considera i valori decimali)

//ad esempio possiamo utilizzare una funzione che trasforma un numero intero 
//in un decimale con due valori dopo la virgola 

console.log((1).toFixed(2))

//alcuni metodi (chiamati static methods) ci permettono di interagire con altri oggetti 
//(ovvero ricevono un oggetto come parametro), come ad esempio il metodo Object.freeze
//che permette di congelare (non modificabile) il contenuto di un oggetto

Object.freeze(person)

//utilizzando questo metodo pur provando a sovrasrivere un elemento di "person", questo non
//verrà modificato

person.name = "pinco" 
console.log(person.name) //stamperà "Ilyas"

//il metodo statico "assign", permette ad esempio di creare la copia di un oggetto 
//by value, senza dover utilizzare un ciclo for...in

let personCopy = Object.assign({}, person)

console.log(personCopy)

//assign ci permette anche di copiare gli elementi di più oggetti all'interno di un nuovo oggetto

let employeeData = {
    office: "12A",
    position: "Full Stack Dev",
}

let employee = Object.assign({}, person, employeeData)
//l'oggetto sul quale effettuiamo la copia non deve necessariamente essere vuoto
//possiamo avere delle chiavi esistenti che non vengono modificate, ed altre che vengono
//sovrascritte (nel caso abbiano lo stesso nome delle chiavi in "person" ed "employeeData")

let employee2 = Object.assign(
    {
    favoriteColor: "blue", //chiave esistente il cui valore non verrà modificato
    name: "pinco", //chiave esistente il cui valore verrà sovrascritto
    }, 
    person, 
    employeeData,
)

console.log(employee)
console.log(employee2)
