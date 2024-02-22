const users = [
    {id: 1, name: "Mario", surname: "Rosse", username: "mariorossi", password: "s3cr3t",},
    {id: 2, name: "Alessandro", surname: "Verdi", username: "aleverdi", password: "pr1v4t3",},
]

const friends = {
    1: [
        { id: 2, name: "Lucia" }, { id: 3, name: "Giovanni" },
    ],
    2: [
        { id: 2, name: "Marco" },{ id: 3, name: "Giuseppe" },
    ],
}

function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(
                (user) =>
                    user.username === username && user.password === password
            )
            if (user) {
                resolve(user)
            } else {
                reject("Invalid credentials")
            }
        }, 1000)
    })
}

function getFriends(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userFriends = friends[id]
            if (userFriends) {
                resolve (userFriends)
            } else {
                reject(`User with id ${id} has no friends :(`)
            }
        }, 2000)
    })
}


//sintassi classica per eseguire più promise concatenate

// login("mariorossi", "s3cr3t")
//     .then((data) => {
//         console.log(data)
//         //e passiamo l'id alla seconda promise
//         getFriends(data.id)
//             .then((data) => {
//                 console.log(data)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     })
//     .catch((error) => {
//         console.log(error)
//     })


//Async Await rendono il codice asincrono più leggibile, facendolo apparire come se fosse sincrono

//creiamo una nuova funzione che si occupa di quello che facevano .then e .catch

async function loginAndFetchFriends () {
    try {
        //creiamo una nuova variabile all'interno del quale verrà inserito il risultato della prima promise
        const data = await login ("mariorossi", "s3cr3t")
        //e una all'interno della quale verrà inserito il risultato della seconda
        const friends = await getFriends(data.id)
        console.log (data)
        console.log (friends)
    //error contiene l'errore che si è verificato
    } catch (error) {
        console.log(error)
    }
}

loginAndFetchFriends()

//All’ interno del blocco try {} “proviamo” ad eseguire il codice in caso di successo delle due promise
//Se il codice non viene eseguito con successo (una o più promise completate con errore), passiamo al blocco catch{} che gestisce l’errore

//async e await vanno sempre utilizzati in coppia. Il primo indica che la funzione è asincrona, il secondo
//permette di attendere il completamento di una promise per poi assegnarne il risultato ad una variabile