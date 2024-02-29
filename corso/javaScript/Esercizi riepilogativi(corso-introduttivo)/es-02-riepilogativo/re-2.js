/*Scrivi una funzione che prenda come parametro un array di oggetti, ognuno dei quali rappresenta una macchina 
con le seguenti proprietà: brand, model, year. La funzione dovrebbe restituire un nuovo array di stringhe che contenga 
la marca e il modello di ogni macchina nel formato "brand model". Stampare il nuovo array.*/

let cars = []

function car(brand, model, year) {
    this.brand = brand
    this.model = model
    this.year = year
}

cars.push(
    new car("Mercedes", "C220", 2019),
    new car("BMW", "Serie 1", 2021),
    new car("Honda", "Cyvic", 2018)
)

//con i metodi degli array
function listCars(cars) {
    return (carList = cars.map((car) => `${car.brand} ${car.model}`))
}

console.log(listCars(cars))


// //senza i metodi degli array
// function listCars (cars) {
//     let carList = []
//     for (i = 0; i < cars.length; i++) {
//         carList.push (`${cars[i].brand} ${cars[i].model}`)
//     }
//     return carList
// }

// console.log(listCars(cars))
