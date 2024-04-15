/*In questo esercizio utilizzerete l’api di https://dictionaryapi.dev/ per creare il vostro dizionario.
Create nel vostro html un input e un bottone. Inserendo una parola nell’input e cliccando il bottone verrà fatto un fetch per
trovare la parola e mostrare in pagina 
- la definizione, 
- la pronuncia fonetica
- un esempio del suo utilizzo.
Fate in modo che se viene inserita una parola che non esiste oppure se non viene inserito nulla nell’input compaia 
in pagina un messaggio di errore per l’utente.Lascio a voi le scelte stilistiche e la scelta dei tag giusti da utilizzare per 
il contenuto che verrà mostrato in pagina.*/

const searchField = document.querySelector(".search-field")
const searchBtn = document.querySelector(".search-btn")

const answSection = document.querySelector(".answ-section")

async function searchData(toSearch) {
    try {
        const res = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${toSearch.toLowerCase()}`
        )
        const data = await res.json()
        //phonetics
        const phonetics = data[0].phonetics
        let phoneticNotFound = true
        phonetics.forEach((element) => {
            for (let key in element) {
                if (key === "text" && phoneticNotFound) {
                    const pronunciation = document.createElement("p")
                    pronunciation.textContent = `Pronunciation: ${element[key]}`
                    answSection.appendChild(pronunciation)
                    phoneticNotFound = false
                }
            }
        })
        //definizioni ed esempi
        const meanings = data[0].meanings
        meanings.forEach((meaning) => {
            console.log(meanings)
            const eachMeaning = document.createElement("section")
            eachMeaning.setAttribute("class", "meaning")
            if ("partOfSpeech" in meaning) {
                const type = document.createElement("p")
                type.textContent = `Type: ${meaning["partOfSpeech"]}`
                eachMeaning.appendChild(type)
            }
            if ("definitions" in meaning) {
                const definitions = meaning["definitions"]
                definitions.forEach((object, index) => {
                    for (key in object) {
                        if (key === "definition" || key === "example") {
                            const p = document.createElement("p")
                            p.textContent = `${index + 1}) ${key} : ${object[key]}`
                            eachMeaning.appendChild(p)
                        }
                    }
                })
            }
            answSection.appendChild(eachMeaning)
        })
    } catch (err) {
        const error = document.createElement("h1")
        error.textContent = `The word "${toSearch.toLowerCase()}" is not present in the database, ${err.message}`
        answSection.appendChild(error)
    }
}

searchBtn.addEventListener("click", () => {
    answSection.innerHTML = ""
    const toSearch = searchField.value
    if (toSearch === "") {
        const h1 = document.createElement("h1")
        h1.textContent = "Please enter a word"
        answSection.appendChild(h1)
    } else {
        searchData(toSearch)
    }
})
