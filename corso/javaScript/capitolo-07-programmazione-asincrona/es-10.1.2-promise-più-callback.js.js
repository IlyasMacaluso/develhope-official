//a partire dall'esercizio es-10.0 utilizzare le promise solo per la gestione dell'errore

//parto da un array di persone
const persons = [
    { name: "John", age: 30 },
    { name: "Ilyas", age: 20 },
]

function fetchDataFromAPI(data, callback) {
    //messaggio iniziale per simulare l'inizio dell'operazione
    console.log("Fetching data..")
    return new Promise((resolve, reject) => {
        //setTimeout per simulare il completamento dell'operazione
        setTimeout(() => {
            //verifico il tipo di dato inserito per il controllo dell'errore (nota: mi da "object" e non "array" se faccio il console.log di typeof persons)
            if (typeof data === "object") {
                //poi eseguo la callback per filtrare i dati
                const filteredData = callback(data)
                //li stampo in console
                console.log(filteredData)
                //e il resolve restituisce un messaggio di successo
                resolve ("Data filtered successfully")
            } else {
                //se il tipo di dato è non valido restituisco un messaggio di errore
                reject("Data filtering failed: Invalid type of data")
            }
        }, 1000)
    })
}

//callback che filtra l'array di persone
function handleData(data) {
    let filteredData = data.filter(person => person.name === "John")
    //Controlla se il risultato del .filter non è un array vuoto
    if (filteredData.length > 0) {
        //se non è vuoto restituisce l'array filtrato
        return filteredData
    } else {
        //se è vuoto restituisce una stringa che informa di ciò
        return `There isn't anyone named "John"`
    }
}

//chiamo la funzione
fetchDataFromAPI(persons, handleData)
    //.then e .catch stampano solo i messaggi di successo / errore dell'operazione
    .then((successMessage) => console.log(successMessage))
    .catch((errorMessage) => console.log(errorMessage))
