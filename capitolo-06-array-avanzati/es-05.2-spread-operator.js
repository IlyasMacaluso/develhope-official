const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, c: 4 }

const mergedObject = { ...obj1, ...obj2 }

//se non volessimo sovrascrivere nessuna variabile?
//anche Object.assign sovrascrive "b"

let unionObject = Object.assign({}, obj1, obj2)

console.log (mergedObject)
console.log (unionObject)