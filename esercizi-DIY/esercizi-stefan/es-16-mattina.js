/* 16- Data una frase (stringa) dire se è palindroma (si ignorano gli spazi),
Esempi di frasi palindrome:
i topi non avevano nipoti
il lavacavalli
amo ridere di roma */

let string = "amo ridere di roma"

let arrString = string.replaceAll(" ", "").split("")

if (arrString === arrString.reverse()) {
    console.log(`La frase "${string}" è polindroma`)
} else {
    console.log(`La frase "${string}" non è polindroma`)
}
