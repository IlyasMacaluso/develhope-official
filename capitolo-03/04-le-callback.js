//le funzioni di callback
function calculate(a, b, callback) {
	return callback(a, b)
}

let result = calculate(1, 2, function (a, b) {
	return a + b
})

console.log(result)

//un uso comune delle callback functions è con la funzione setTimeout , che permette di
//eseguire una funzione dopo un certo numero di millisecondi.

function sayHello() {
    console.log('Hello')
    }

    setTimeout(sayHello, 2000)
    // Dopo 2 secondo verrà stampato sulla console: Hello