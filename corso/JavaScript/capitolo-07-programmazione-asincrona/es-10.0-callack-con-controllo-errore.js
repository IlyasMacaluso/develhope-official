//partendo dal codice sotto, utilizzare le promise per una migliore gestione dell'errore

/*
const persons = [
  { name: "John", age: 30 },
  { name: "Ilyas", age: 20 },
];

function fetchDataFromAPI(data, callback) {
//simula l'inizio dell'operazione
    console.log("Filtering data..");
  //simula l'attesa per il completamento dell'operazione
    setTimeout(() => {
    //controllo del tipo di dato
        if (typeof data === "object") {
        //se è del tipo giusto passo alla callback "null" come errore "data" come parametro da filtrare
            let filteredData = callback(null, data)
            //e poi li stampo
            console.log(filteredData);
        } else {
            //se è del tipo sbagliato allora passo l'errore (che la callback stamperà), e "null" come parametro perchè non può filtrare != array
            callback(new Error("Type of data not valid"), null);
        }
    }, 1000);
}

function handleData(error, data) {
    if (data) {
        //se riceve come parametro data -> errore = "null" -> posso filtrare i dati e restituire il risultato
        return data.filter((person) => person.name === "John");
    } else {
        //se data = null -> stampa il messaggio di errore
        console.log(error)
    }
}

fetchDataFromAPI(persons, handleData); */

//primo tentativo con le promise

let persons = [
    { name: "John", age: 30 },
    { name: "John", age: 20 },
]

function fetchDataFromAPI(data) {
    //simula inizio dell'operazione
    console.log("Filtering data...")
    return new Promise((resolve, reject) => {
        //simula attesa nel completamento dell'operazione
        setTimeout(() => {
            //controllo errore
            if (typeof data === "object") {
                //messaggio di successo
                resolve("Data filtered successfully")
                //operazioni da eseguire in caso di successo
                let filteredData = data.filter(
                    (person) => person.name === "John"
                )
                //controllo del risultato (che non sia un array vuoto)
                if (filteredData.length > 0) {
                    //stampa risultato se non è un array vuoto
                    console.log(filteredData)
                } else {
                    //stampa avviso se è un array vuoto
                    console.log("No one is called John")
                }
            } else {
                //messaggio di errore -> nessuna operazione viene effettuata sui dati
                reject("Error processing data: wrong type of data")
            }
        }, 1000)
    })
}

//Il .then e .catch ricevono solo il messaggio di errore e lo stampano. La promise filtra e stampa l'array in console (ma non lo restituisce)
const x = fetchDataFromAPI(persons)
    .then((successMessage) => {
        //.then = si è verificata resolve -> fulfilled
        console.log(successMessage)
    })
    .catch((errorMessage) => {
        //.catch = si è verificato un errore -> rejected
        console.log(errorMessage)
    })
