//Sintassi 1 (classica) per chiamate semplici e complesse
// async function fetchData () {
//     const fetchedData = await fetch("https://jsonplaceholder.typicode.com/posts") //fetch è una promise 
//     const actualData = await fetchedData.json()
//     console.log(actualData[0].body)
// }
// //stringify trasforma le chiavi dell'oggetto in stringa, parse fa il contrario

// fetchData()


//Sintassi 2 (per chiamate semplici) con .then
// const fetchData = fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => log(response.json()))
//     .then((data) => data)

// const print = async () => console.log(await fetchData)

// print()

// //Sintassi 3 (per chiamate semplici) con .then, se dobbiamo solo stampare il dato ricevuto, e non utilizzarlo
// const fetchData = fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(async (response) => console.log(await response.json()))

// fetchData