async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        if (!response.ok) {
            //gestisco possibili errori (di rete, accesso negato, eccetera)
            throw Error("Fetch error: Could not retrieve data") // creo un nuovo errore più messaggio nell'eventualità
        } else {
            //se non ci sono errori ->
            const data = await response.json() //converto i dati in formato leggibile da JS
            console.log("Data retrieved successfully:") //messaggio di successo nel recupero dati
            return data //restituisco data
        }
    } catch (err) {
        //stampo in console il messaggio di errore "Fetch error: ..."
        console.log(err.message)
    }
}

async function exercise(keyword) {
    const data = await fetchData() //assegno alla costante data il risultato della funzione fetchData()
    if (data) {
        //se non ci sono stati errori allora data esiste -> truthy
        //filtro l'array di dati ricevuto confrontando lo userId di ogni elemento dell'array con "keyword"
        const filteredData = data.filter((element) => element.userId === keyword)
        if (typeof keyword !== "number") { //controllo se keyword non è un numero
            //se non è un numero stampo un messaggio di avviso
            console.log("Note: 'exercise' only accepts number parameters")
            //se è un numero -> controllo che l'array filtrato non sia vuoto
        } else if (filteredData.length > 0) {
            //e stampo l'array filtrato
            console.log(filteredData)
        } else {
            //se è vuoto stampo un messaggio per informare l'utente
            console.log(`No user found with userID "${keyword}"`)
        }
    }
}

//chiamo la funzione passando a parametro un numero
exercise(1)
