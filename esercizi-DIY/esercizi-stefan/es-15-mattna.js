/*15- Dato un array di stringhe, per ogni stringa dire il numero di vocali e
quello di consonanti*/
let strings = ["ciao", "come", "stai", "?"]
const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

strings.forEach(string => {
    let vocalsNum = 0
    let consonantsNum = 0 
    let specialCharNum = 0
    for (i = 0; i < string.length; i++) {
        if (
            string[i].includes("a") ||
            string[i].includes("e") ||
            string[i].includes("i") ||
            string[i].includes("o") ||
            string[i].includes("u")
        ) {
            vocalsNum++
        } else if (format.test(string)) {
            specialCharNum++
        } else {
            consonantsNum++
        }
    }
    console.log(`${string}
    - Vocals number: ${vocalsNum}
    - Consonants number: ${consonantsNum}
    - Special char number: ${specialCharNum}`);
})
