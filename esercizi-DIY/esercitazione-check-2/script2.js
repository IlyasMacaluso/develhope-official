const searchF = document.querySelector(".search-field")
const searchB = document.querySelector(".search-btn")
const answSection = document.querySelector(".answ-section")

async function fetchData(toSearch) {
    try {
        const res = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${toSearch.toLowerCase()}`
        )
        const data = await res.json()
        return data
    } catch (error) {
        const err = document.createElement("h1")
        err.textContent = `Error: ${error.message}`
        answSection.appendChild(err)
    }
}

searchB.addEventListener("click", async () => {
    const toSearch = searchF.value
    const data = await fetchData(toSearch)
    if (toSearch === "") {
        answSection.innerHTML = ""
        answSection.textContent = `Please fill the text field before submitting`
    } else if (data[0]) {
        answSection.innerHTML = `Word: ${data[0].word}`
        const phonetics = data[0].phonetics
        const meanings = data[0].meanings
        let phoneticNotFound = true
        phonetics.forEach((element) => {
            if ("text" in element && phoneticNotFound) {
                let phonetic = document.createElement("p")
                phonetic.textContent = `Phonetic: ${element["text"]}`
                answSection.appendChild(phonetic)
                phoneticNotFound = false
            }
        })
        meanings.forEach((meaning) => {
            const eachMeaning = document.createElement("section")
            eachMeaning.setAttribute("class", "meaning")
            if ("partOfSpeech" in meaning) {
                const type = document.createElement("p")
                type.textContent = `Type: ${meaning["partOfSpeech"]}`
                eachMeaning.appendChild(type)
            }
            if ("definitions" in meaning) {
                const definitions = meaning["definitions"]
                definitions.forEach((definition) => {
                    if ("definition" in definition) {
                        const def = document.createElement("p")
                        def.textContent = `Definition: ${definition["definition"]}`
                        eachMeaning.appendChild(def)
                    }
                    if ("example" in definition) {
                        const example = document.createElement("p")
                        example.textContent = `Example: ${definition["example"]}`
                        eachMeaning.appendChild(example)
                        example.setAttribute("class", "example")
                    }
                })
            }
            answSection.appendChild(eachMeaning)
        })
    } else {
        answSection.textContent = `The word "${toSearch.toLowerCase()}" was not found in the database`
    }
})
