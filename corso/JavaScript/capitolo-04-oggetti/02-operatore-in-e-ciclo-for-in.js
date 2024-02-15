let person = {
    name: "jimmy",
    age: 28,
    sayHello: function(){},
}

// person.age = person.age + 1 
// console.log(person.age)

//restituisce come valore Not a Number perchè person .age non è definito 
//-> undefined + 1 = NaN

//allora effettuiamo un controllo tramite un costrutto if/else
//"in" permette di verificare se una chiave esiste all'interno di un oggetto

if ("age" in person) {
    person.age = person.age + 1 
    console.log(person.age)
} else {
    console.log("Age not present on person Object")
}

//il ciclo for in permette di iterare su tutte le chiavi all'interno di un oggetto
//non possiamo iterare direttamente sugli elementi, ma solo sulle chiavi che li identificano

//nel "for in" definiamo un iteratore (key) e tramite l'operatore "in", JS 
//itererà su tutte le chiavi presenti all'interno dell'operando, ovvero l'oggetto (person)
//valorizzando l'iteratore (key) con la chiave stessa (quindi key sarà uguale a "name", 
//poi uguale a "age" e così via fino ad aver assunto il valore di tutte le chiavi)

for (let key in person) { 
    console.log(key) 
    //visualizza una alla volta tutte le chiavi dell'oggetto (non il loro contenuto)
}

for (let key in person) { 
    console.log(person[key]) 
    //visualizza una alla volta il contenuto di tutte le chiavi dell'oggetto
}

for (let key in person) { 
    console.log(key, person[key]) 
    //visualizza una alla volta la chiave e il contenuto di tutt gli elementi dell'oggetto
}


