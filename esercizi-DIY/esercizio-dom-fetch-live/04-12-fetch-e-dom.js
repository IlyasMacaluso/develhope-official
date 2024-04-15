//stampare i to-do con il campo completed settato a true

const body = document.querySelector("body")

async function elaborateData (status, url) {
    const res = await fetch(url)
    const data = await res.json()
    const filteredTasks = data.filter(element => element.completed === status)
    filteredTasks.forEach(element => {
        const task = document.createElement("div")
        task.innerHTML = `
        <h3>${element.title}</h3>
        <p>Task ID: ${element.id}</p>
        <p>User ID: ${element.userId}</p>
        <p>Completed: ${element.completed}</p>
        `
        body.appendChild(task)
    })
}

elaborateData(true, "https://jsonplaceholder.typicode.com/todos")
