let string = "5"
let string2 = "6"

console.log (string + string2) //concatenazione
console.log (Number(string) + Number (string2)) //conversione a tipo number e somma

//il dato iniziale deve essere convertibile al tipo di destinazione

console.log(string * string2) //effettua la conversione in automatico perchè riconosce che la moltiplicazione non esiste per il tipo stringa

let message = "qualcosa"
let number = 10

console.log (message + number) //effettua la conversione del numero a stringa ed effettua la concatenazione 

//conversione a booleano
console.log(Boolean(number)) // -> true
//a parte alcuni valori specifici definity Falsly, tutti gli altri sono di tipo Thruthy, ovvero restituiscono True quando vengono convertiti a boolean


//conversione da boolean a string
itIsNight = false
console.log(String(itIsNight)) // trasforma il valore boolean false, in una stringa con il contenuto "false"

console.log(typeof itIsNight) //typeof è utilizzato per sapere qual'è il tipo di dato all'interno di una variabile
