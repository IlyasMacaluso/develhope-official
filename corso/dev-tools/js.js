async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    return data
}

async function filterData (id) {
    const data = await fetchData()
    if (data){
        const filteredData = data.filter(element => element.userId === id)
        console.log(filteredData)
    }
}

filterData(2)