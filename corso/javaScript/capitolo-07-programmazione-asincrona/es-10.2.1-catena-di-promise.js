//1 crea una promise che recupera i dati dell'utente
//2 crea una promise che recupera i post dell'utente
//chiama le funzioni per recuperare e stampare i dati e i post

const users = { id: 1, name: "John" }
const posts = ["post1", "post2"]

function fetchUserData(data) {
    console.log("Recovering user data...")
    return new Promise((resolve, reject) => {
        //controllo dell'errore
        if (typeof data === "object") {
            //resolve restituisce um messaggio di successo
            resolve("User data recovered successfully")
            //e stampa data
            console.log(data)
        } else {
            //reject restituisce solo un messaggio di errore
            reject("Data type invalid: user must be an object")
        }
    })
}

function fetchUserPosts() {
    return new Promise((resolve, reject) => {
        //controllo dell'errore
        if (posts.length > 0) {
            //resolve restituisce un messaggio di successo
            resolve("User posts recovered successfully")
            //e stampa i post
            console.log(posts)
        } else {
            //reject restituisce solo un messaggio di errore
            reject("User has no posts yet")
        }
    })
}

//richiamo la funzione fetchUserData
fetchUserData(users)
    //se non c'è errore passo come argomento il messaggio di successo; Inoltre la promise esegue le operazioni all'interno del {} if (vedi sopra)
    .then((successMessage) => {
        //poi stampa il messaggio
        console.log(successMessage)
        //e richiama la funzione fetchUserPosts
        fetchUserPosts()
            //se non c'è errore in fetchUserPosts passo come argomento il messaggio di successo; Inoltre la promise esegue le operazioni all'interno del {} if (vedi sopra)
            .then((successMessage) => console.log(successMessage))
            //se c'è errore in fetchUserPosts resctituisco il messaggio di errore e lo stampo (non ci sono altre operazioni da eseguire all'interno del {} else)
            .catch((errorMessage) => console.log(errorMessage))
    })
    //se c'è errore in fetchUserData passo come argomento il messaggio di errore e lo stampo;
    //Non richiamo fetchUserPosts in caso di errore (se non può accedere ai dati dell'utente, non può trovare i suoi post)
    .catch((errorMessage) => console.log(errorMessage))
