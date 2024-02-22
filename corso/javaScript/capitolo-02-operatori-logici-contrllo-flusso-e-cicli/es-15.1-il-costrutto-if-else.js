//risposta giusta

let name
let surname = 'Rossi'

let fullname = name + " " +  surname

if(name && surname){
    console.log(fullname)
} else {
    console.log("fullname is invalid")
}

//la condizione di if è sempre un valore booleano, quindi name e surname vengono automaticamente convertite
//surname è un valore truthy -> true
//name è un valose Farly (undefined) -> false
//di conseguenza name AND surname -> false -> salta il blocco