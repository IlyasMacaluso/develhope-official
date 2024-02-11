let persons = [{ name: "John", age: 30 }, { name: "John", age: 20 }] 

function fetchDataFromAPI(data, callback) {
    let filteredData = callback(data)

    console.log("Filtering data..")

    let loading = () => {
        console.log(".")
    }

    const loadingID = setInterval(loading, 950)

    setTimeout(() => {
        console.log(filteredData)
        clearInterval(loadingID)
    }, 2000)
}
  
function handleData(data) {
    return data.filter(person => person.name === "John")
}

fetchDataFromAPI(persons, handleData)