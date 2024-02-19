//a partire dall'esercizio es-10.0 utilizzare le promise solo per la gestione dell'errore

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
            //controllo il tipo di dato inserito
            if (typeof data === "object") {
                //se è del tipo giusto allora restituisco un messaggio di successo
                resolve("Data filtered succesfully")
                //poi eseguo la callback per filtrare i dati
                const filteredData = callback(data)
                //e li stampo in console
                console.log(filteredData)
            } else {
                //se il tipo di dato è non valido restituisco un messaggio di errore
                reject("Data filtering failed: Invalid type of data")
            }
        }, 1000)
    })
}

//callback che filter a l'array di persone
function handleData(data) {
    let filteredData = data.filter((person) => person.name === "John")
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
const result = fetchDataFromAPI(persons, handleData)
    //.then e .catch stampano solo i messaggi di successo / fallimento dell'operazione
    .then((successMessage) => console.log(successMessage))
    .catch((errorMessage) => console.log(errorMessage))
