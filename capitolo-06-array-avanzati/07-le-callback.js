/*Una callback, è una funzione chiamata come argomento a un’altra funzione e
che verrà eseguita dopo che quest’ultima ha terminato la sua esecuzione:*/

function sayHello (name, callback){
	setTimeout(() => {
	console.log (`Hello ${name}`)
	callback()
	}, 2000)
}

function myCallback(){
	console.log(`I'm the callback!`)
}

sayHello("Mario", myCallback)


//Sintassi più utilizzata (per compattezza)

function sayHello (name, callback){
	setTimeout(() => {
	console.log (`Hello ${name}`)
	callback()
	}, 2000)
}

sayHello("Mario", () => {
	console.log("I'm the callback")
})