// 1- Dato un array di numeri, trovare il massimo / minimo

let numbers = [11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 6, 7]

let b = 0

for (i = 0; i < numbers.length; i++) {
  let a = numbers[i]
  if (a > b) {
    b = a
  }
}

console.log(b)

/* cercare ordinamento numeri array */