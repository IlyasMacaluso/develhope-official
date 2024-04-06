//13- Dato un array di stringhe, trovarmi la stringa con più caratteri
let strings = ["ciao", "come", "stai", "my friend","?"]
let longestString
let stringLenght = 0

strings.forEach(string => {
    const compactString = string.replaceAll(" ", "")
    if (compactString.length > stringLenght) {
        stringLenght = compactString.length
        longestString = string
    }
    
})

console.log(longestString)
console.log(stringLenght)