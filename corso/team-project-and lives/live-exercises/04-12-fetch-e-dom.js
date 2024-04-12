//stampare i to-do con il campo completed settato a true
const body = document.querySelector("body")

async function elaborateData(boolean, url) {
    try {
        const res = await fetch(url)
        const data = await res.json()
        const filtered = data.filter(element => element.completed === boolean)
        filtered.forEach(element => {
            const card = document.createElement("div")
            card.innerHTML = `
            <h3>Task: ${element.title}</h3>
            <p>Is the task completed?: ${element.completed}</p>
            `
            body.appendChild(card)
        })
    } catch (error) {
        console.error(error.message)
    }
}

elaborateData(true, "https://jsonplaceholder.typicode.com/todos")
