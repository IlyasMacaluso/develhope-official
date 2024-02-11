//number
let number = 5 * 2 + 8 *2 / 3 //si può assegnare un'espressione ad una variabile. 
//è possibile modificare l'ordine di svolgimento delle operazioni, utilizzando le parentesi tonde

//string
let message = 'hello, '
let person = "rikijoe"
let greeting = message + person 
//possiamo concatenare più stringhe utilizzando l'operatore somma
console.log(greeting)

//boolean
let isRaining = true
let iOwnAnUmbrella = false

//operatore and (&&)
let shouldIGoOut = isRaining && iOwnAnUmbrella 
//se tutte le condizioni si verificano -> true, se almeno una non si verifica -> false
console.log (shouldIGoOut) //risultato -> false

//operatore or
let shouldItakeAnUmbrella = isRaining || iOwnAnUmbrella
//se almeno una condizione si verifica -> true
console.log (shouldItakeAnUmbrella) //risultato -> true

//null
let empty = null //contenuto della variabile esplicitamente vuoto

//undefined
let variable //non è definito il tipo di variabile poichè non è inizializzata
//tutte le variabili che vengono definite ma non inizializzate, saranno di tipo undefined
variable = 5 //variable viene inizializzato, ed è ora di tipo number

//possiamo assegnare ad una variabile un dato di tipo differente da quello che posseva in precedenza
let something = 5 
something = 'something else'
//da number, it tipo di dato passa a string