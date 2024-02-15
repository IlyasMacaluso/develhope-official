/*Il metodo find ci permette di ritornare il primo elemento di un array
che soddisfa una condizione fornita*/

/*vogliamo ritornare il primo utente che abbia come nome Andrea*/
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
    }
]

const myUser = users.find (item => item.name === "Andrea")

console.log(myUser)

/*oppure il primo utente che ha più di 30 anni*/
const oldUser = users.find (item => item.age > 20)
console.log(oldUser)

