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
            //in caso di successo la promise restituisce data
            resolve(data)
        } else {
            //in caso di errore, restituisce un messaggio di errore
            reject("Data type invalid: user must be an object")
        }
    })
}

function fetchUserPosts() {
    return new Promise((resolve, reject) => {
        //controllo dell'errore
        if (posts.length > 0) {
            //in caso di successo restituisce posts
            resolve(posts)
        } else {
            //in caso di errore restituisce un messaggio di errore
            reject("User has no posts yet")
        }
    })
}

fetchUserData(users)
    //in caso di successo passo "data" come argomento a .then
    .then((userData) => {
        //poi stampo un messaggio di successo direttamente dentro .then
        console.log("User data filtered successfully")
        //e stampo userData (che ha come argomento "data")
        console.log(userData)
        //poi richiamo la funzione fetchUserPosts
        fetchUserPosts()
            //in caso di successo passo "posts" come argomento
            .then((userPosts) => {
                //poi stampo un messaggio di successo direttamente dentro .then
                console.log("User posts are:")
                //e stampo userPosts (che ha come argomento "posts")
                console.log(userPosts)
            })
            //in caso di errore in fetchUserPosts passo come argomento la stringa di errore e la stampo
            .catch((userDataError) => console.log(userDataError))
    })
    //in caso di errore in fetchUserData passo come argomento la stringa di errore e la stampo;
    //Non richiamo fetchUserPosts in caso di errore (se non può accedere ai dati dell'utente, non può trovare i suoi post)
    .catch((userPostsError) => console.log(userPostsError))
