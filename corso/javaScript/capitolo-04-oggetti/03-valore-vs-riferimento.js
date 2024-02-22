//introdotti gli oggetti, dobbiamo chiarire un concetto fondamentale
//ovvero la differenza tra variabili passate come valore e quelle passate come riferimento

//VALUE TYPE

let a = 54 //-> il valore (value) viene fisicamente copiato all'interno dell'area di memoria dedicato ad "a"
let b = a //-> il valore (value) contenuto in "a" viene copiato dentro l'area di memoria dedicata a "b"

a = a + 1 

console.log(a, b, a === b)
//adesso "a" = 55, mentre "b" rimane 54 perché è una copia del valore effettuata prima di questa addizione
//quindi a = b non è un riferimento alla variabile b, ma una copia del valore (value) al suo interno

//le stringhe hanno un comportamento che assomiglia ai value types, ma sono in reltà
//implementate come reference type. Vediamo qualche esempio

let c = "ciao"
let d = c

c += "!" // c = c + "!"

console.log(c, d, c === d)

//per quello che ci interessa al momento è come se fossero dei value types

//-------------------------------------------------------------------------------------

//REFERENCE TYPE

//I reference type sono quelle variabili che vengono passate come riferimento
//quali sono i reference type?

//GLI OGGETTI

let person = {
    name: "Ilyas",
    age: 26,
    fn: () => {},
}
let personCopy = person
//nel caso degli oggetti, non effettuiamo una copia del contenuto,
//ma una copia dell'indirizzo dell'oggetto che associamo alla variabile

person.name = "Olio"
//quando modifichiamo un elemento di person, vedremo quella modifica anche in personCopy

console.log ("personCopy === person, true perché personCopy contiene l'indirizzo di person, sarebbe come dire person === person;")
console.log(person, personCopy, person === personCopy)

//-> personCopy richiama (tramite indirizzo) l'oggetto person nel suo stato attuale; 
//-> la variabile personCopy contiene un indirizzo che dice a JS dove
//si trova l'oggetto associato (person) all'interno della memoria

//is JS e anche in altri linguaggi, il motivo per cui si usano le assegnazioni
//by reference piuttosto che by value, è il risparmio della memoria


//LE FUNZIONI
//anche le funzioni sono variabili che vengono passate by reference

function fn(){

}

let fn2 = fn //fn2 contiene l'indirizzo di memoria di "function fn(){}"

console.log ("fn === fn2, true perché fn2 contiene l'indirizzo a fn, sarebbe come dire fn === fn;")
console.log(fn2, fn, fn2 === fn)

//----------------------------------------------------------------------------

//SUPPONIAMO DI voler effettuare una vero e propria copia di un oggetto (o una funzione)

//quello che possiamo fare è creare un nuovo oggetto e utilizzare un ciclo "for in"
//per copiare di volta in volta tutti gli elementi al suo interno

let personCopy2 = {} //creiamo un oggetto vuoto (quindi assegnamo della memoria personCopy2)
for(let key in person){
    personCopy2[key] = person[key] 
    //crea delle chiavi in personCopy2(perchè non esistono al momento) e assegna dei valori ad esee
}

console.log ("personCopy2 === person, false perché pur avendo lo stesso contenuto, sono due istanze separate (non hanno lo stesso indirizzo;")
console.log(personCopy2, person, personCopy2 === person)
//l'uguaglianza stretta darà come risultato false perchè l'indirizzo dei due oggetti non è lo stesso

//dunque se modificassimo il valore di una chiave in person, non modificheremmo 
//il valore della stessa chiave in personCopy2 -> sono due oggetti differenti

//pur essendo due copie, se confrontiamo il valore all'interno della chiave
//fn=, avremo come risultato che i due valori sono identici

console.log ("personCopy2.fn === person.fn, true perchè entrambe contengono lo stesso puntatore (indirizzo) alla funzione fn;")
console.log (personCopy2.fn === person.fn) 
//Da come risultato true perché a entrambe le chiavi è associato lo stesso
//puntatore (ovvero l'indirizzo) alla funzione fn