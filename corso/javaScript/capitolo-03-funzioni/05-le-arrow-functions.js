//le arrow functions sono funzioni che per definizione
//sono sempre anonime, ovvero non hanno un nome 
// -> quando definiamo un arrow function dobbiamo o assegnarlo 
//come valore di una variabile, o passando la arrow function come callback
//di un altra funzione che si aspetta di ricevere una callback

let sum = (a, b) => {
    return a + b
}

console.log(sum(3, 7))

//quando la arrow function ha una sola espression di cui vogliamo restituire il
//risultato, possiamo ometter return e le parentesi graffe

let sub = (a, b) => a - b

console.log(sub(3, 7))

//nota: la parola chiave "this" non si comporta allo stesso modo
//con le arrow fucntion (rispetto alle funzioni normali)


//differenze con le funzioni normali nelle callback

//funzione normale
setTimeout(function() {
    console.log("Hello")
}, 1000)

//arrow functon
setTimeout(() => console.log("Hello"), 1000)

//ricordiamo quando non usiamo le {}, di non usare return, 
//e di usare le {} quando usiamo return per motivi di coerenza
