/*Implementa la funzione lanciaDadi che:

Generi casualmente due numeri tra 1 e 6 per rappresentare il lancio di due dadi.
Visualizzi in console il risultato del lancio Lancio dei dadi: 
Dado 1 = ${dado1}, Dado 2 = ${dado2}.

Utilizzi il metodo setTimeout per ritardare l' esecuzione della funzione 
"lanciaDadi" di 2 secondi. Prima dello scadere dei 2 secondi stampa in 
console il messaggio ""Lancio dei dadi in corso..." */

const dado = [1, 2, 3, 4, 5, 6]

function lanciaDadi () {
    const tiro1 = dado[(Math.floor(Math.random() * dado.length))]
    const tiro2 = dado[(Math.floor(Math.random() * dado.length))]
    console.log(`Lancio dei dadi: 
    - Dado A = ${tiro1}
    - Dado B = ${tiro2}`)
}

setTimeout(lanciaDadi, 2000)

console.log (`Lancio dei dadi in corso..`)

//in più stampa un "." ogni secondo fin quando il lancio del dado viene eseguito 

const loading = setInterval(() => {
    console.log(".")
}, 950)

setTimeout(() => {
    clearInterval(loading)
}, 2000)