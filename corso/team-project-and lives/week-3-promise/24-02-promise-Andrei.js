//concatenare 3 promise

function insertNumber(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof number === "number") {
                resolve(number)
            } else {
                reject("Invalid type of data")
            }
        }, 1000)
    })
}

function moltiplyBy2(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let per2 = number * 2
            resolve(per2)
        }, 1000)
    })
}

function moltiplyBy3(number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let per3 = number * 3
            resolve(per3)
        }, 1000)
    })
}
//con il FOR (break rompe il ciclo) (continue permette di saltare un valore)

// async function performOperations() {
//     const initialNumber = await insertNumber(10)
//     console.log(initialNumber)
//     const numberBy2 = await moltiplyBy2(initialNumber)
//     console.log((numberBy2))
//     const numberBy3 = await moltiplyBy3(numberBy2)
//     console.log(numberBy3)
// }

// performOperations()


async function performOperations() {
    const initialNumber = await insertNumber(10)
    console.log(initialNumber)
    const numberBy2 = await moltiplyBy2(initialNumber)
    console.log((numberBy2))
    const numberBy3 = await moltiplyBy3(numberBy2)
    console.log(numberBy3)
}

