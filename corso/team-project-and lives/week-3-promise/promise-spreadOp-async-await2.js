let tasks = [`Backup OS`, `Push tasks.js`, `Check Google Calendar`]

//function1: addTask
function addTask(...task) {
    let promiseResults = []
    task.forEach((task) => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let isDataValid = typeof task === "string" && task !== ""
                if (isDataValid) {
                    tasks.push(task)
                    resolve(`Task "${task}" added successfully`)
                } else {
                    reject("Task must be a non empy string")
                }
            }, 1000)
        })
        promiseResults.push(promise)
    })
    return Promise.all(promiseResults)
}

async function printResults() {
    try {
        let addedTasks = await addTask("task3", "task4", "task5")
        console.log(addedTasks)
    } catch (error) {
        console.log(error)
    }
}

printResults()
