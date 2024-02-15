/*Il metodo  filter  ci permette di creare un nuovo array 
contenente solo gli elementi che soddisfano una certa condizione:*/

/*vogliamo ritornare tutti gli utenti di nome Andrea*/
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

const myUsers = users.filter (item => item.name === "Andrea")

console.log(myUsers)

/*oppure tutti gli utenti di nome Andreache hanno più di 18 anni*/

const adultUser = users.filter (item => item.age > 18 && item.name === "Andrea")

console.log (adultUser)