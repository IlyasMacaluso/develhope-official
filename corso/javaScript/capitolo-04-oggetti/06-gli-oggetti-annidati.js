//ad una chiave di un oggetto è possibile associare un oggetto:

let person = {
    name: "Ilyaas",
    age: 26,
    address: {
        city: "Capaci (PA)",
        street: "Via Pozzoli",
        number: 12,
    },
}

//possiamo accedere ad oggetti annidati trmite la dot notation

console.log(person.address) //stampa tutti gli elementi di address
console.log(person.address.city) //stampa l'elemento city all'interno d address

//se proviamo ad accedere ad un valore che non esiste all'interno di un oggetto
//otterremo un errore

console.log(person.address.civic) 
//restituisce undefined (perchè trova l'oggetto address, ma la variabile 
//civic non esiste al suo interno -> undefined)

//console.log(person.personData.fiscalCode) 

//restituisce un errore, perché personData è undefined (e quindi non un oggetto),
//ma la nostra sintassi dice a JS che vogliamo accedere ad un elemento all'interno
//dell'oggetto personData -> non trova l'oggetto personData -> errore


//come fare per evitare questi problemi? 

//soluzione 1 -> if/else
if (person.personData) {
    console.log(person.personData.fiscalCode)
} else {
    console.log("'personData' is not an object")
}

//soluzione 2 (più semplice e conveniente) -> operatore di optional chaining

console.log(person.personData?.fiscalCode)
//verifica se personData esiste, se esiste stampa il valore desiderato se no stampa undefined


//possiamo usarelo insieme all'operatore nullish coalescing operator '??'

console.log(person.personData?.fiscalCode ?? "Address not found") 

//in questo caso se l'operando di sinistra (person.personData.fiscalCode) non è 
//Null o undefined allora utilizza quell'operando, se no, utilizza l'operando
//di destra ("Address not found")

//non abusare di questo operatore perchè può nascondere gli errori
//usarlo solo quando si è sicuri che l'accesso a un elemento
//può essere condizionale, e quando abbiamo un "piano b", ovvero
//la capacità di rispondere all'assenza di quella proprietà