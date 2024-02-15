const students = [
{ id: 1, name: "Luca", surname: "Rossi", age: 20 },
{ id: 2, name: "Mario", surname: "Bianchi", age: 24 },
{ id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

for (let i = 0; i < students.length; i++){
    console.log(students[i])
}

//stampa il contenuto dell'array (i 3 oggetti)

/* 
for(let i = 0; i < students.length; i++){
    for (let key in students[i]){
    console.log(`${key}: ${students[i][key]}`)
    }
}
*/

//stampa il contenuto dei singoli elementi all'interno dei 3 oggetti

//creiamo una copia dell'array

let students2 = [{}, {}, {}]

for(let i = 0; i < students.length; i++){
    for (let key in students[i]) {
        students2[i][key] = students[i][key]
    }
}

students2[0].name = "Ilyas" //modificare singoli valori
students2[0].surname = "Macaluso"
students2[0].age = 26

//students2[3] = {id: 11, name: "Mario", surname: "Palladino", age: "Old Gen"} //modificare / crea un oggetto e i suoi elementi
//students2.push ({id: 11, name: "Mario", surname: "Palladino", age: "Old Gen"}) //crea e popola un nuovo oggetto n coda

console.log(students2)

students.forEach((index, item) => {
    students2[index][item] = item
});
console.log(students2)
