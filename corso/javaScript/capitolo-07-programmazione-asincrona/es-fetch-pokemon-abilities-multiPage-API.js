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
            const pokemon = data.results.filter((poke) => poke.name.includes(name))
            if (pokemon.length > 0) {
                console.log(`${name.toUpperCase()} abilities are:`)
                const pokeInfo = await fetchData(`${pokemon[0].url}`)
                const pokeAbilities = pokeInfo.abilities
                pokeAbilities.forEach(abilityInfo => {
                    console.log(`- ${abilityInfo.ability.name}`)
                })
            } else if (data.next){
                data = await pokeFind (name, `${data.next}`)
            } else {
                console.log(`There is no Pokemon named "${name}" in this database`);
            }
        }
    }
}

// URL "https://pokeapi.co/api/v2/pokemon/"

pokeFind("treecko", "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100")
