async function fetchData(URL) {
    try {
        const response = await fetch(URL)
        if (response.ok) {
            console.log("Data retreived successfully")
            const data = await response.json()
            return data
        } else 
        throw new Error ("Error: could not retreive data from the server")
    } catch (err) {
        console.log(err.message)
    }
}

async function pokeFind (name) {
    const data = await fetchData ("https://pokeapi.co/api/v2/pokemon/")
        if(data){
            const pokemon = data.results.filter(poke => poke.name === name)
            if (typeof name !== "string") {
                console.log("Error: pokeFind requires a string type value");
            } else if (pokemon.length > 0) {
                console.log(pokemon)
            } else { 
                console.log(`There is no pokemon named "${name}" in this database`);
            }
        }

}
// URL "https://pokeapi.co/api/v2/pokemon/"

pokeFind("bulbasaur")