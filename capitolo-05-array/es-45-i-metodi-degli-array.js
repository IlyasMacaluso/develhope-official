/* Abbiamo il nostro array di nomi, dobbiamo svolgere le seguenti operazioni:

-Rimuovere il nome "Giovanni" dal nostro array
-Aggiungere il nome "Pippo" alla coda del nostro array
-Aggiungere il nome "Giovanni" come primo elemento del nostro array

Dopo ogni operazione inserire il console.log() del nostro array names */

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];
console.log("Array iniziale", names);

names.pop() //rimuoviamo "Giovanni" dalla coda
console.log("Rimuovo 'Giovanni' dalla coda:", names)

names.push("Pippo") //aggiungo "Pippo" in coda all'array
console.log("Aggiungo 'Pippo' in coda:", names)

names.unshift("Giovanni") //aggiungo "Giovanni" in testa
console.log("Aggiungo 'Giovanni' in testa:", names);

