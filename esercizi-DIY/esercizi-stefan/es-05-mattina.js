// 5- Stampare nel terminale la tavola pitagorica dei numeri
let colNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let rowNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

colNums.forEach((numberA) => {
    let row = []
    rowNums.forEach((numberB) => row.push(numberA * numberB))
    console.log(row)
})
