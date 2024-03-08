/*Crea una funzione asincrona che fa il fetch a questo indirizzo https://rickandmortyapi.com/api/character, 
filtra l'array in base al nome e fai il console.log degli status dei personaggi, lanciando un errore se il 
personaggio è morto*/

async function fetchData() {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data = await response.json()
    return data.results
}

async function filterCharacter(keyword) {
    const data = await fetchData()
    if (data) {
        const results = data.filter((char) => {
            const charName = char.name.toUpperCase()
            return (charName.includes(keyword.toUpperCase()))
        })
        results.forEach((element) => {
            if (element.status === "Alive") {
                console.log(`${element.name} is ${element.status}`)
            } else {
                console.log(`Oh no! ${element.name} is ${element.status}`);
            } 
        })
    }
}

filterCharacter("rick")
