function sayHelloName(callback) {
    console.log("Hello")
    callback()
}
//è sbagliato
//console.log("Hello" + callback()) perché il console.log stampa il paramentro
//all'interno di callback(), ovvero undefined, perchè la funzione print name non
//restituisce alcun valore tramite "return"

function printName() {
    console.log ("Ilyas")
}

sayHelloName(printName)

//per scrivere "hello, name" nella stessa riga

// function printName() {
//     return "Ilyas"
//  }

// function sayHelloName(callback) {
//     let name = callback() //assume il valore che ritorna la funzione printName
//     console.log("Hello, " + name)

// }

//sayHelloName(printName)