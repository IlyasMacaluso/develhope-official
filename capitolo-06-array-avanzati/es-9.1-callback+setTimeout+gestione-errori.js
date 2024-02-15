let persons = [{ name: "John", age: 30 }, { name: "John", age: 20 }] 

function fetchDataFromAPI(data, callback) { 
    console.log("Filtering data..")
    const loadingID = setInterval(() => {
         console.log(".");
    }, 950);
     setTimeout(() => {
        if (typeof data === "object") {
            callback(null, data)
        } else {
            callback(new Error("Error processing data"), null)
        }        clearInterval(loadingID);
    }, 2000);
}
    
function handleData(error, data) {
    if (data){
        console.log(data.filter((person) => person.name === "John"))
    } else {
        console.log(error)
    }
}

fetchDataFromAPI(persons, handleData)