//-Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. -Utilizzare setTimeout per simulare un'operazione asincrona.

function simplePromise(a) {
    return new Promise((resolve, reject) => {
        if (a > 0) {
            setTimeout(() => resolve("Resolved"), 2000)
        } else {
            reject("Rejected")
        }
    })
}

simplePromise(1)
    .then((successMessage) => console.log(successMessage))
    .catch((errorMessage) => console.log(errorMessage))
