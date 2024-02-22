function firstPromise() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Error")
        }, 1000)
    })
}

function secondPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello from the second promise")
        }, 2000)
    })
}

// //nella sintassi classica per eseguire e gestire gli errori di più promise
// //dovremmo richiamarle singolamente
// firstPromise().then((data) => console.log(data))
// secondPromise().then((data) => console.log(data))

//la API "all" permette di eseguire e gestire gli errori di più promise in
//una singola riga di codice. Verranno stampate quando tutte le promise
//in questione saranno sono state completate

//Con questa sintassi, se anche solo una promise viene eseguita con errore,
//tutto il blocco .then sarà saltato, e verrà eseguito solo il .catch per la 
//prima promise completata con errore 

// Promise.all([firstPromise(), secondPromise()])
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => console.log(error))


//la API "race" restituisce la prima promise che viene completata (con successo o con errore)

Promise.race([firstPromise(), secondPromise()])
    .then((data) => {
        console.log(data)
    })
    .catch((error) => console.log(error))