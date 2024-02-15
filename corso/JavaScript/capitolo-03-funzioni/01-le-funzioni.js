function somma (a, b){ 
    return a + b   
}
//function -> definizione della funzione 
//(a, b) -> parametri della funzione
//return -> dice a js che vogliamo uscire dalla funzione restituendo un valore (in questo caso a + b)

//riutilizzare una funzione

let result = somma (2, 3) 
// somma -> invocazione della funzione
//(2, 3) -> assegnazione dei parametri ad "a" e "b"
//result è una variabile che creiamo per potervi assegnare il valore che segue "return" (in questo caso "a + b")


console.log(result) 
//anche console.log è una funzione che ci permette di stampare sulla console il paramentro che inseriamo tra ()
//console.log riceve un parametro, ma non restituisce alcun valore


//un altro esempio di funzione che riceve dei parametri ma non restituisce un valore:
function sayHello(name){
    console.log("hello, " + name + "!")
}

sayHello("billy")

//stampa in console "hello, billy", ma non restituisce alcun valore sottoforma di codice

let iWillBeUndefined = sayHello("billy")
console.log(iWillBeUndefined)

//come possiamo vedere iWillBeUndefined è non definita perchè la funzione sayHello non restituisce alcun valore
