//creiamo la copia di un oggetto

let object = {
    1: 1,
    2: 2,
    3: 3,
}

let objCopy = {}
for (key in object){
    objCopy[key] = object[key]
}

console.log(object)
console.log(objCopy)

//creiamo la copia di un array

let array = [
    1,
    2,
    3,
    4,
]

arrCopy = []

for (i = 0; i < array.length; i++){
    arrCopy[i] = array[i]
}

console.log(array)
console.log(arrCopy)