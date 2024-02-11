//permette di decidere quali casistiche possiamo affrontare quando abbiamo
//una variabile o un'espression che può assuemre assume uno tra un set di valori predefiniti

let food = "pizza"

//all'interno delle parentesi tonde si trova la variabile di cui si effettua il controllo (food)
//-> in base al valore all'interno della variabile (food)
//eseguiamo uno dei possibili case definiti all'interno delle parentesi graffe.
//break indica il completamento di un case -> esce dal blocco switch e continua con il codice seguente
//importante NON dimenticare il break, altrimenti i case successivi verrano eseguiti anche se la loro condizione non viene verificata

switch (food) { 
    case "pizza": //se quando viene eseguito lo switch il valore all'interno della variabile la variabile food = "pizza" -> viene eseguito questo case
        console.log("I like pizza")
        break

    case "burrito": //se quando viene eseguito lo switch il valore all'interno della variabile food = "burrito" -> viene eseguito questo case
        console.log("I love burritos")
        break
        
    default: //se il valore all'interno della variabile food non corrisponde a quello di nessun case -> eseguirà default
        console.log("I don't know this food")

    //possiamo avere un numero "infinito" di case
}

//lo switch è molto utile quando abbiamo un set di casi ben definiti 
//che possono essere risolti (eseguiti) in base al contenuto dell'espessione associata allo switch
//switch (espressione) 

//conoscendo ognuno dei possibili casi, possiamo scrivere dei blocchi di codice molto specifici
//che verranno eseguiti quando si verifica la condizione corrispondente (a quel case)

//fa eccezzione default che non sarà specifico poiché considera tutti quei casi 
//(potenzialmente infiniti) in cui lo switch non soddisfa la condizione di alcun case

//si potrebbero eseguire le stesse operazioni con un if else, ma si perderebbe in leggibilità
//sta a noi imparare a decidere quando utilizzare determinate funzionalità 
//sia per raggiungere un obiettivo più velocemente, sia per mantere il codice con più facilità