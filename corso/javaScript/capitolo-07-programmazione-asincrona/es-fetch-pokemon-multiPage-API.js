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

let pokemons = []

async function pokeFind(name, URL) {
    let data = await fetchData(URL)
    if (data) {
        if (typeof name !== "string") {
            console.log("Error: pokeFind requires a string type value")
        } else {
            data.results.filter((poke) => {
                if (poke.name.includes(name)) {
                    pokemons.push(poke)
                }
            })
        }
    }
    if (data.next) {
        data = await pokeFind(name, data.next)
    } else {
        console.log(pokemons)
    }
}

// URL "https://pokeapi.co/api/v2/pokemon/"

pokeFind("ba", "https://pokeapi.co/api/v2/pokemon/")
