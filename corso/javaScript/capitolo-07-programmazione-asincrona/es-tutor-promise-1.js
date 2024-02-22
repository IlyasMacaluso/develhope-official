//parto da un array di persone che devo filtrare:
const persons = [
    { name: "John", age: 30 },
    { name: "Ilyas", age: 20 },
]

//fetchDataFromAPI dovrà ricevere come tipo di dato array non vuoto
function fetchDataFromAPI(data) {
    //simula l'inizio dell'operazione
    console.log("Filtering data...")
    return new Promise((resolve, reject) => {
        //simula delay
        setTimeout(() => {
            //verifico che il dato passato come argomento sia un array non vuoto
            if (data.length > 0) {
                //se non è vuoto, lo filtro per trovare le persone di nome "John" e assegno il risultato dell'operazione ad una variabile
                const filteredData = data.filter(
                    (person) => person.name === "John"
                )
                //se filteredData non è vuoto
                if (filteredData.length > 0) {
                    //restituisco fiteredData
                    resolve(filteredData)
                } else {
                    //se è vuoto restituisco un messaggio di avviso
                    resolve("There's no one called John")
                }
            } else {
                //se data non è un array non vuoto restituisco una stringa di errore
                reject("Data must be a non-empty array")
            }
        }, 1500)
    })
}

//richiamo la funzione passando il parametro persons
fetchDataFromAPI(persons)
    //in caso di resolve
    .then((data) => {
        //stampo "data", ovvero l'array filtrato
        console.log(data)
        //e un messaggio di successo
        console.log("Data filtered successfully")
    })
    //in caso di reject
    .catch((error) => {
        //stampo errore
        console.log(error)
    })

//nota: alcune parentesi tonde tipo "(person) => person.name === 'John'" me le aggiunge l'estesione Prettier!