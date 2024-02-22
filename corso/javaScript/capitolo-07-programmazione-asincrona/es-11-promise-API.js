/*
Implementare le funzioni fetchPersonById e fetchJobById, le quali dato 
un id devono restituire rispettivamente:

-La persona che ha come identificativo l'id passato come parametro
-Il tipo di lavoro che ha come identificativo l'id passato come parametro
-Infine implementare il codice necessario che si occupa di stampare in console la persona e il tipo di lavoro trovato. 

N.B: la stampa dei risultati deve avvenire solo nel momento in cui entrambe le Promise sono state risolte.
*/
const persons = [
    {
        id: 1,
        firstName: "Mario",
        lastName: "Rossi",
        age: 25,
    },
    {
        id: 2,
        firstName: "Maria",
        lastName: "Verdi",
        age: 32,
    },
    {
        id: 3,
        firstName: "Giovanni",
        lastName: "Rossi",
        age: 35,
    },
]

const jobs = [
    {
        id: 1,
        jobTitle: "CEO",
    },
    {
        id: 2,
        jobTitle: "Project Manager",
    },
    {
        id: 3,
        jobTitle: "Developer",
    },
]

function fetchPersonById (id) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            //assegnamo l'elemento filtrato dall'array ad una variabile, per riutilizzarla come condizione dell'if, e per restituirla se la condizione è soddisfatta
            let filteredPerson = persons.find(person => person.id === id)
            //if (fitleredPerson) è true se c'è una persona con id === a quello passato come parametro, false se non c'è (undefined)
            if (filteredPerson){ 
                resolve (filteredPerson)
            } else {
                reject (`There's no person with id "${id}"`)
            }
        }, 2000)
    })
}

function fetchJobById (id) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
        //assegnamo l'elemento filtrato dall'array ad una variabile, per riutilizzarla come condizioen dell'if, e per restituirla se la condizione è soddisfatta
        let filteredJob = jobs.find(job => job.id === id)
        //if (filteredJob) è true se c'è un lavoro con id === a quello passato come parametro, false se non c'è (undefined)
        if (filteredJob){ 
            resolve (filteredJob)
        } else {
            reject (`There's no job with id "${id}"`)
        }
        }, 3000)
    })
}

//utilizzando Promise.all, solo quando entrambe le primse sono completate con successo (dopo 3000 ms) riceviamo il risultato
//(ovvero l'array contentente l'oggetto "persona" e l'oggetto "job" con quell'id)

Promise.all([fetchPersonById(2), fetchJobById(2)])
    .then(data => {
        console.log(data)
    })
    .catch(error => {
            console.log(error)
    })

//se una o più promise sono completata con errore, riceveremo come risultato l'errore della prima promise 
//completata con errore
