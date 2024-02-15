let persons = [
    { name: "John", age: 30 },
    { name: "John", age: 20 },
  ];

function fetchDataFromAPI(data) {
    console.log("Filtering data...")
        return new Promise((resolve, reject) => {
            if (typeof data === "object"){
                //simula caricamento (non richiesto)
                let i = ""
                const loadingID = setInterval(() => {
                        console.log (i = i + ".")
                    },950)
                ////
                setTimeout(() => {
                    resolve ("Data filtered successfully")
                    console.log(data.filter((person) => person.name === "John"))
                    clearInterval(loadingID) //parte della simulazione caricamento
                }, 3000)
            } else {
                reject ("Error processing data: wrong type of data was inserted")
            }
        })
}


//chiamata della funzione + stampa del risultato e gestione dell'errore
const x = fetchDataFromAPI(persons)
    .then((data) => {  
        //.then = si è verificata resolve -> fulfilled
        console.log(data)
    })
    .catch((error) => { 
        //.catch = si è verificato un errore -> rejected
        console.log(error)
    })