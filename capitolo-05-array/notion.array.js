//creiamo una copia dell'array a
let a = [5, 1, 12]
let b = []

for (let i = 0; i < a.length; i++){
    b[i] = a[i]
}

console.log(b)

console.log(a === b) //false perchè hanno indirizzo diverso

let array = [
    {
        brand: "Google",
        name: "Pixel 8",
        price: 1300,
    },
    12, 8, 20

] 

console.log(array)

//copiamo un oggetto all'interno di un array in un altro oggetto

let object1 = {}

for (let key in array[0]){
    object1[key] = array[0][key]
}

console.log(object1)

//copiamo un oggetto all'interno di un array, 
//in un oggetto all'interno di un altro array

let array1 = [
    {
    },
    12, 8, 20
] 

for (let key in array[0]){
    array1[0][key] = array[0][key]
}

console.log(array1[0])