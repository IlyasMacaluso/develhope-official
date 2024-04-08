/*14- Data una stringa, contare il numero di vocali ( si può usare il metodo
includes ) */

let string = "Mi sento proprio chill"
let vocalsNum = 0

for (i = 0; i < string.length; i++) {
    if (
        string[i].includes("a") ||
        string[i].includes("e") ||
        string[i].includes("i") ||
        string[i].includes("o") ||
        string[i].includes("u")
    ) {
        vocalsNum++
    }
}
console.log(vocalsNum)
