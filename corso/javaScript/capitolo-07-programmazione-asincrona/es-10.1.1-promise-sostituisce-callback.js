//a partire dall'esercizio es-10.0 utilizzare le promise al posto della callback
const persons = [
  { name: "John", age: 30 },
  { name: "Ilyas", age: 20 },
];

//riceve un array, se il tipo di dato è giusto, lo passa al .then, che ne esegue il .filter

function fetchDataFromAPI(data) {
    //simula l'inizio dell'operazione
    console.log("Filtering data...")
    return new Promise((resolve, reject) => { 
        //simula l'attesa per il completamento dell'operazione
        setTimeout(() => {
            //controllo del tipo di dato
            if (typeof data === "object") {
            //se è del tipo giusto ritorno data
                resolve(data);
            } else {
            //se è non valido ritorno una stringa di errore
                reject("Invalid type of data");
            }
        }, 1000);
    });
}

//richiamo la funzione passando il parametro persons
fetchDataFromAPI(persons)
    //se non c'è stato errore eseguo delle operazioni su data
  .then((data) => {
    //assegno ad una variabile il rusultato dell'array filtrato
    const filteredData = data.filter((person) => person.name === "John");
    //controllo che l'array filtrato non sia un array vuoto
    if (filteredData.length > 0){
        //se non è vuoto lo stampo
        console.log(filteredData);
    } else {
        //se è vuoto stampo un messaggio di avviso
        console.log("There's no one called 'John'");
    }
  })
  //se c'è stato un errore
  .catch((error) => {
    //stampo errore
    console.log(error);
  });


