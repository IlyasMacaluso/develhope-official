/*Il metodo map, permette di trasformare ogni elemento di un array e restituire 
un nuovo array con gli elementi trasformati, o di modificare lo stesso array*/

/*ad esempio se vogliamo ottenere un array con il doppio di ogni valore
di un altro array: */
const numbers = [1, 2, 3, 4, 5]

const double = numbers.map(item => item * 2)

console.log(double)

//----

/*creiamo un nuovo array contenente solo users.name: */
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
        name: "Giorgio",
        surname: "Rossi",
        age: 25,
    },
]

const userNames = users.map(item => item.name)

console.log(userNames)

//----

/*creiamo un nuovo array modificando il contenuto di un array esistente*/
const updateUsers = users.map (item => {
    item.age = item.age + 1
    
    return item
    })

console.log(updateUsers)
/*return item copia ogni coppia key-item nel nuovo array dopo aver effettuato
le modifiche desiderate*/

//----

/*modifichiamo un array esistente*/
users.map (item => item.age = item.age + 1)

console.log(users)
/*in questo caso non è necessario utilizzare return, perchè stiamo 
aggiornando un array esistente -> non c'è bisogno di copiare le coppie
key-item che esistono già nel nostro array*/

//----