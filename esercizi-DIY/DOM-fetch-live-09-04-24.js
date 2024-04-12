async function fetchData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    return data
    console.log(data)
}


fetchData()