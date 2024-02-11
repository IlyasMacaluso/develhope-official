//permette di condensare un costrutto if else all'interno di una singola riga di codice
//può essere utilizzato per effettuare un controllo condizionale per decidere quale valore assegnare a una variabile

let isRaining = false
let isCloudy = true

let result = isRaining ? "i should take an umbrella" : "it's a sunny day"
//subito dopo il punto interrogativo, abbiamo il valore che viene assegnato se la condizione si verifica
//subito dopo i due punti, abbiamo il valore che viene assegnato se la condizione non si verifica

console.log(result)

result = isRaining 
    ? "i should take an umbrella" 
    : isCloudy 
        ? "i could take an umbrella"
        : "it's a sunny day"

//si può concatenare l'operatore ternario ma è sconsigliato

console.log(result)