async function fetchData(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`) //?userId=1 => filtra solo gli elementi che hanno userId = 1 e poi scarica i dati
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

async function exercise(id) {
    const data = await fetchData(id) //assegno alla costante data il risultato della funzione fetchData(id), ovvero un array già filtrato tramite URL
    if (data.length > 0) {
        console.log(data);
    } else {
        console.log(`There are no users with userId: ${id}`);
    }
}

//chiamo la funzione passando a parametro un numero
exercise(6)
