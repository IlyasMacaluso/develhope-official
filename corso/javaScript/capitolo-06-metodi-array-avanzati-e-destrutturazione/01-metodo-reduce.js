/*Il metodo  reduce  ci permette di ridurre un array a un singolo valore,
 accumulando i risultati usando una funzione fornita.*/

 const numbers = [1, 2, 3, 4, 5]

 const sum = numbers.reduce ((a, number) => a + number, 0)
 //a: accumulatore, 0: valore iniziare del accumulatore
 console.log (sum)

 /* se volessimo stampare la media dell'età dei nostri utenti:*/
 const users = [
    {
    name: "Ilyas",
    surname: "Macaluso",
    age: 26,
    },
    {
    name: "Andrea",
    surname: "Audisio",
    age: 28,
    },
    {
    name: "Andrea",
    surname: "Rossi",
    age: 17,
    }
]

const ageSum = users.reduce ((a, user ) => a + user.age, 0)
const avgAge = ageSum / users.length

console.log(avgAge);