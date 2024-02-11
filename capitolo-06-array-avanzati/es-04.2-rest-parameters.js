// Scrivi una funzione filterOutOdds che accetta un numero qualsiasi 
// di argomenti e restituisce un array contenente solo i numeri pari.
// Utilizzare il parametro rest per raccogliere gli argomenti.

function numFilter (...parameters) {
    let evenNums = []
    evenNums.push(parameters.filter(parameter => parameter%2 === 0))
    return evenNums
}

const evenNums = numFilter (1,2,3,4,5,6,7,8,9,10)

console.log(evenNums)