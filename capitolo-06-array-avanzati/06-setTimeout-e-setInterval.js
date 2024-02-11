// setTimeout permette di eseguire una funzione dopo un determinato numero di millisecondi,
// setInterval permette di eseguire una funzione a intervalli regolari


//setInterval utilizzata da sola ripete la funzione a intervalli regolati all'
//infinito. 

//La funzione setInterval ritorna un ID (un riferimento univoco all’intervallo 
//che stiamo creando) che possiamo salvare all’interno di una variabile, e 
//utilizzarlo per effettuare operazioni su di esso: possiamo utilizzare questo ID 
//in setTimeout per fermare l'iterazione dopo un certo intervallo di tempo

let counter = 0

const id = setInterval(() => {
    counter++
	console.log(`Hello world ${counter}`)
}, 1000)

setTimeout(() =>{
	clearInterval(id) //ferma l'iterazione della funzione
}, 5100)