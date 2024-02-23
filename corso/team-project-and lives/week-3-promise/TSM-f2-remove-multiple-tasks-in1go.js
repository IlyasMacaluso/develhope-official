let tasks = [`Backup OS`, `Push tasks.js`, `Check Google Calendar`]

//fucntion2 completeTask
function completeTask(...indexes) {
    console.log(`Filtering out invalid indexes...`)
    let validIndexes = indexes.filter((index) => index < tasks.length && index >= 0) 
    return new Promise((resolve) => {
        setTimeout(() => {
                console.log(`Removing taks with valid indexes ${validIndexes}...`)
                const completedTasks = validIndexes.map((index) => `(${index})"${tasks[index]}"removed successfully`)
                tasks.splice(validIndexes, validIndexes.length)
                resolve (completedTasks)
            }, 1000)
    })
}

async function tasksManagement(callback, ...modifyTask) {
    try {

    } catch (error) {
        console.log(error)
    }
}