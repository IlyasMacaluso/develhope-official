//il contesto all'interno della quale la variabile è accesibile

let a = 42

function myFunction(){
    let b = 22

    if (true) {
        let c = 10
        console.log(c)
        console.log(b)
        console.log(a)
//non da poblemi perchè possiamo accedere a tutte le variabili definite a livello superiore 
    }
}

myFunction()

//se provassimo a stampare b al di fuori della funzione

//console.log(b) 

//error perchè possiamo accedere a variabili dichiarate in contesti esterni
//(a livello superiore), ma non a variabili dichiarate in contesti interni {} 
//(a livello inferiore) come funzioni, costrutti if/else, for, while etc

//questo perchè le variabili non vengono inizializzate fin quando non viene
//eseguito il loro specifico blocco di codice {}, e successivamente 
//quando viene completata l'esecuzione, le variabili al suo interno 
//vengono distrutte da js per liberare memoria


