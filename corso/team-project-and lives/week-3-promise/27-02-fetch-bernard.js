async function fetchData() {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const data = await response.json()
    data.forEach(element => { 
        const countryName = element.name.official
        console.log(countryName)
    })
}

fetchData()
