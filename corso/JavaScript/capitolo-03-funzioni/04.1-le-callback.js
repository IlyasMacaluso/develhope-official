//concetto di callback: una funzione che noi passiamo ad un altra
//funzione perchè questa possa chiamarla in un secondo momento

function sum (a, b, callback){
    callback (a+b)
}

//chi richiamerà la funzione sum avrà il compito di passare i parametri
//e di implementare la funzione callback

let cb = function printResult (result){ 
    console.log ("the result is: " + result)
}
//in questo modo assegnamo al parametro (result) <- (a+b) e poi lo stampiamo in console
//
sum (1, 5, cb)
//richiamiamo la funzione

//può anche essere scritta come 
sum (1, 5, function printResult (result){
    console.log ("the result is: " + result)
})

//js mette a disposizione molte funzioni con callback utili, come ad esempio
//la funzione setTimeout, una funzione globale che permette di eseguire un'operazione dopo un certo
//lasso di tempo. Si aspetta di ricevere 2 parametri: un handler (callback), e il delay desiderato

setTimeout(function sayHello(){
    console.log("hello")
}, 2000)

//staperà in console il messaggio hello dopo 2 sec
//può anche essere scritto in questo modo se la funzione è stata definita in precendenza

function sayHello () {
    console.log("hello")
}

setTimeout(sayHello, 2000) 
//se il nome della funzione è usato come riferimento (parametro da passare)
//non è necessario aggiungere le () come nel caso in cui la si richiama