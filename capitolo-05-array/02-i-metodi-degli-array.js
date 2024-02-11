//gli array come tutto il resto in JS sono degli oggetti
//quindi possiamo utilizzare dei metodi su di essi

let numbers = [1,2,3,4,5]

//AGGIUNGI uno o più nuovi elemeti IN CODA all'array
numbers.push(6) //possiamo aggiungere più elementi separati da una virgola
console.log(numbers);

//RIMUOVI l'ultimo elemento (IN CODA) da un array
numbers.pop()
console.log(numbers);

//AGGIUNI uno o più nuovi elementi IN TESTA all'array
numbers.unshift(10) //possiamo aggiungere più elementi separati da una virgola
console.log(numbers);

//RIMUOVI il primo elemento (IN TESTA) da un array
numbers.shift()
console.log(numbers);

//JOIN ci permette di UNIRE due array
let names = ["ilyas", "olio", "ilio"]
console.log(names.join(", ")) 
/*unisce le tre stringhe in un unica stringa, e ci permette di separare 
i singoli elementi con un carattere a nostra scelta (in questo caso ", ") */

//possiamo utilizzare il ciclo FOR per ITERARE sui singoli elementi di un array
for(let i = 0; i < names.length; i++){
    //codice da iterare
}

/*esiste un metodo più conveniente per ITERARE su un ARRAY, ovvero 
utilizzare il metodo FOREACH */

/*forEach ci permette di eseguire una callback che passiamo come parametro 
al metodo forEach su ciascun elemento dell'array sul quale stiamo chiamando forEach */

names.forEach(function (item, index, items) {}
    //content da iterare
) 

/* forEach riceve come parametro una funzione che viene eseguita su 
ogni elemento dell'array su cui viene utilizzato il metodo forEach, 
l'indice dell'elemento sul quale stiamo iterando, e tutti gli elementi
(un riferimento all'array sul quale stiamo lavorando). Solitamente ci serve
 solo il primo parametro, a volte servirà il secondo, quasi mai servirà il terzo */

names.forEach((item) => {
    console.log(item)
    //questa funzione viene eseguita su tutti gli elementi dell'array
})

/*non è sempre la scelta giusta, ma in certi casi è molto più comodo perche
non dobbiamo preoccuparci di qual'è l'indice dell'elemento sul quale stiamo
iterando, ma possiamo semplicemente scrivere una funzione che riceve l'elemento
sul quale stiamo iterando (item), e lo possiamo utilizzare direttamente */