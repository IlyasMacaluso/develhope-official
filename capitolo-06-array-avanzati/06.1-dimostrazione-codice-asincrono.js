let counter = 0
let counter1 = 0

const id = setInterval(() => {
    counter++
	console.log(`Un secondo di intervallo ${counter}`)
}, 1000)

setInterval(() => {
    counter1++
	console.log(`Due secondi di intervallo ${counter1}`)
}, 2000)

setTimeout(() =>{
	clearInterval(id) //ferma l'iterazione della funzione
}, 5100)

console.log(`Ciao bello`)