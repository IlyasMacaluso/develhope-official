function sum(a, b) {
    return a + b
}

console.log(sum) //viene stampato "[function: sum]"

//proviamo a creare un variabile e ad assegnarle la funzione sum

let sumFn = sum
console.log(sumFn)

//le funzioni in js sono dei valori che possiamo assegnare a variabili

//possiamo assegnare una funzione a una variabile, anche nel 
//momento in cui creiamo la funzione

let subFn = function sub(a, b) {
    return a - b
}

//assegnando la funzione a una variabile, 
//possiamo richiamare la funzione utilizzando il nome della variabile

let subResult = subFn (9, 6)

console.log(subResult)

//quando assegnamo la funzione a una variabile alla sua creazione
//possiamo anche non darle un nome (in questo caso si parla di funzione anonima)

let multFn = function (a, b) {
    return a * b
}

//tale funzione può comunque essere invocata tramite la variabile a cui è assegnata

let multResult = multFn(3, 3)

console.log(multResult)
