// Crea una funzione chiamata somma che accetta un numero qualsiasi di 
// argomenti e restituisce la somma di tali argomenti.
// Utilizza il parametro rest per raccogliere gli argomenti.
//  -Stampa in console l'output della funzione somma.

function sum (...parameters) {
    return parameters.reduce((a, parameter) => a + parameter, 0)
}

const sumResult = sum (10,20,30,40,50,60)

console.log(sumResult)