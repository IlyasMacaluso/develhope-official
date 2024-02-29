async function fetchData(URL) {
    try {
        const response = await fetch(URL)
        if (response.ok) {
            const data = await response.json()
            return data
        } else throw new Error("Error: could not retreive data from the server")
    } catch (err) {
        console.log(err.message)
    }
}

async function pokeFind(name, URL) {
    let data = await fetchData(URL)
    if (data) {
        if (typeof name !== "string") {
            console.log("Error: pokeFind requires a string type value")
        } else {
            const pokemon = data.results.filter((poke) => poke.name === name)
            if (pokemon.length > 0) {
                console.log(pokemon)
            } else if (data.next){
                data = await pokeFind (name, `${data.next}`)
            } else {
                console.log(`There is no Pokemon named "${name}" in this database`);
            }
        }
    }
}
// URL "https://pokeapi.co/api/v2/pokemon/"

pokeFind("kyogre", "https://pokeapi.co/api/v2/pokemon/")
