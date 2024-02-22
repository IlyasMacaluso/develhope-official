//non avendo ben compreso la consegna:
/*-Crea una catena di Promises per simulare un'operazione asincrona in più fasi. 
-La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. 
-La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3']. -
Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post. */

/*
ho fatto in questo modo: 
users e userPosts sono entrambi array con una key "id". I post con un certo "id" appartengono alla persona con quello stesso "id".
*/

const users = [{ id: 1, name: "John" }]
const userPosts = [{ id: 1, posts: ["post1", "post2", "post3",] }]

//la funzione fetchUserData riceve come argomento un numero (ID)
function fetchUserData(id) {
    console.log("Filtering data...")
    return new Promise((resolve, reject) => {
        //uso il find per trovare la persona con user.id === id(argomento), e assegno questa persona a thisUser
        const thisUser = users.find((user) => user.id === id)
        setTimeout(() => {
            //se esiste un utente con user.id === id(argomento)
            if (thisUser) {
                //restituisco id (per passarlo come argomento alla seconda promise)
                resolve(id)
                //e stampo i dati dell'utente con quell'id
                console.log(`User data are:`)
                console.log(thisUser)
            //se non esiste un utente con user.id = id (argomento) -> restituisco un messaggio di errore 
            } else {
                reject(`No person has id "${id}"`)
            }
        }, 1000)
    })
}

function fetchUserPosts(id) {
    console.log("Fetching posts...")
    //inizializzo la promise solo con resolve,perché se la prima promise va in errore, a questa non viene passato niente come argomento,
    //mentre se ha successo, allora sappiamo già che esiste quell'id e non c'è necessità di effettuare il controllo nuovamente
    return new Promise((resolve) => {
        //useo il find per trovare i post con posts.id === id (argomento) e li assegno a thisUserPosts
        const thisUserPosts = userPosts.find((post) => post.id === id).posts
        setTimeout(() => {
            //se l'utente con tale id ha dei posts (l'array dei post non è vuoto)
            if (thisUserPosts.length > 0) {
                //restituisco l'array contenente i post
                resolve(thisUserPosts)
            } else {
                //sennò restituisco un avviso
                resolve(`User with id "${id}" has no posts yet`)
            }
        }, 2000)
    })
}

//chiamo la promise passando come argomento "1"
fetchUserData(1)
    //in caso di successo, l'argomento "1" viene restituito dalla prima promise
    .then((data) => {
        //e viene passato come argomento alla seconda promise
        fetchUserPosts(data)
            //la seconda promise effettua le operazioni e restituisce i post o il messaggio di avviso, e li stampo nel .then
            .then((data) => console.log(data))
    })
    //in caso di errore della prima promise viene stampato il messaggio di errore e la seconda non riceve nulla come argomento
    .catch((error) => console.log(error))
