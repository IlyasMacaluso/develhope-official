let tasks = [`Backup OS`, `Push tasks.js`, `Check Google Calendar`]

//function1: addTask
function addTask(task) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof task === "string" && task !== "") {
                tasks.push(task)
                resolve(`Task "${task}" added successfully`)
            } else {
                reject("Task must be a non empy string")
            }
        }, 1000)
    })
}

//fucntion2 completeTask
function completeTask(index) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (index < tasks.length && index >= 0) {
                tasks.splice(index, 1)
                resolve(`Task "${tasks[index]}"removed successfully`)
            } else {
                reject(`Invalid index: "${index}"`)
            }
        }, 1000)
    })
}

//function3 (manages async operations)
async function tasksManagement() {
    try {
        const addedTask1 = await addTask("Add promise to tasks.js")
        console.log(addedTask1)
        const addedTask2 = await addTask("Add spread operator and promises")
        console.log(addedTask2)
        const completedTask = await completeTask(1)
        console.log(completedTask)
    } catch (error) {
        console.log(error)
    }
}

tasksManagement()