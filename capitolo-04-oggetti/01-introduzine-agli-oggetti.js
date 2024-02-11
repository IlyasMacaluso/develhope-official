//un oggetto è un contenitore di elementi non ordinati che sono identificabili
//tramite una un etichetta (o nome) che in js viene chiamata "chiave" 

//per creare un oggetto definiamo una variabile e tramite {} vi 
//assegnamo delle coppie di chiave-valore separate da virgola

let person = { 
    name: "Ilyas", //chiave: valore, (e così via)
    age: 26, //la virgola nell'ultimo elemento si può omettere o meno (meglio metterla perchè torna utile se vogliamo riordinare le coppie chiave-valore)
}


//accedere agli elementi all'interno di un oggetto

console.log("L'intero oggetto (person):", person) //stampa l'intero contenuto dell'oggetto ovvero "{ name: 'Ilyas', age: 26 }"


//per stampare un singolo elemento all'interno di un oggetto esistono due metodi

//utilizzare la dot notation (person.name)
//utilizzare la bracket notation (person["name"])

console.log("Con dot notation (person.name):", person.name)

console.log("Con bracket notation (person['name']):", person["name"]) //inseriamo la key sotto forma di stringa perché le key di un oggetto sono di tipo string

//possiamo anche assegnare una key come valore ad una variabile ed utilizzare la variabile al psoto della key

let variabile = "name"

console.log("Tramite variable = 'name'-> (person[variabile]):", person[variabile])

//possiamo anche eseguire operazioni di concatenazione all'interno delle []

console.log("Tramite espressione (person['na' + 'me']):", person["na"+"me"])

//in generale utiizziamo le [] quando vogliamo calcolare espressioni 
//che restituiscono come risultato il nome di una chiave, o quando
//vogliamo accedere al contenuto ad una chiave tramite una variabile alla quale 
//abbiamo associato il suo valore (come ad esempio "keyble")

//per il resto è molto più comoda e leggibile la dot notation (person.name)

//possiamo anche definire una funzione all'interno di un oggetto
let personA = { 
    name: "Ilyas", 
    age: 26,
    sayHello: function(){
        console.log("Hello!")
    }
}

console.log(personA.sayHello) //in questo caso stamerà la definizione della funzione, ovvero [Function: sayHello]

personA.sayHello() //richiama la funzione, e quindi stampa "Hello!"

//possiamo valorizzare delle variabili utilizzando i valori corrispondenti
//ad una chiave di un oggetto, quindi operazioni di lettura

let totalAge = person.age + personA.age

console.log("person.age + personA.age:", totalAge)

//possiamo anche modificare il contenuto corrispondente ad una chiave
//quindi operazioni di scrittura

personA.age = 19
person.age = person.age + 1

console.log("Dopo aver sovrascritto personA.age:", personA.age)
console.log("Dopo aver sovrascritto person.age:", person.age)

//possiamo anche creare nuove chiavi per un oggetto, ad esempio

person.favouriteColor = "blue"

console.log("Stampiamo person.favouriteColor:", person.favouriteColor)

//se proviamo a stampare un elemento non esistente di un oggetto, ci verrà restituito undefined

console.log("Stampiamo person.eyeColor (elemento non definito):", person.eyeColor)