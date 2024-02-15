//il metodo costruttore serve per creare la struttura di un oggetto
//che possiamo riutilizzare per creare una nuova istanza di un oggetto

function Person (name, age){ //la lettera maiuscola è una convenzione per le funzioni costruttrici
    this.name = name
    this.age = age
    //"this" rappresenta l'oggetto che sta venendo costruito (istanza di person)
    //e permette di assegnare ad ogni key di quell'istanza un valore
    this.growUp = function () {
       this.age += 1
    }
    this.sayHello = function(){
        console.log("Hello, my name is", this.name, "and I am", this.age, "years old")
    }
}

//per invocare la funzione Person dobbiamo usare la parola chiave "new"

let ilyas = new Person ("Ilyas", 26)
let rikyjoe = new Person ("Rickyjoe", 30)


//restituisce una nuova istanza di un oggetto che ha come prototipo (classe) Person

console.log(ilyas)

ilyas.growUp() //aumenta il valore di ilyas.age di 1
ilyas.sayHello() //richiama la funzione sayHello all'interno dell'oggetto "ilyas"
rikyjoe.sayHello() //richiama la funzione sayHello all'interno dell'oggetto "rikyjoe"






//note sul comportamento di this

let sayHello = ilyas.sayHello 
//sayHello è una nuova variabile a cui assegnamo il riferimento alla 
//funzione sayHello dell'oggetto ilyas

//se proviamo a richiamare la funzione ilyas.sayHello tramite la variabile sayHello
sayHello()
//noteremo che, nonostante il riferimento assegnatovi sia ilyas.sayHello
//la funzione restituisce undefined al posto del nome e dell'età

//questo accade perchè il valore della parola chiave "this" non dipende 
//da come la funzione che usa il this è stata definita 
//ma da come la funzione che usa il this è stata invocata

//se la invochiamo utilizzando la dot notation ilyas.sayHello(), allora this 
//assumerà come valore "ilyas", se non usiamo la dot notation per richiamare 
//la funzione il valore di "this" sarà un altro (in questo caso undefined)

//NOTA

//questo problema lo abbiamo sono con le funzioni definite come "function" (funzioni normali)
//ma non con le arrow function
sayHello() 
//-> resituisce i valori che ci aspettiamo se la funzione è stata definita come
//arrow function all'interno del prototipo

//questo perchè il this presente all'interno di una arrow function non è inizializzato
//nel momento in cui la funzione viene invocata, ma viene definito nel momento
//in cui la funzione viene creata

//-> nelle funzioni normali, il this dipende da come chiamiamo la funzione
//-> nelle arrow functions il this dipende da quello che era il valore di this 
//quando l'abbiamo creata -> quando creiamo l'oggetto "ilyas" viene creata
//una funzione ilyas.sayHello (this assume il valore "ilyas")