let tasks = [`Backup OS`, `Push tasks.js`, `Check Google Calendar`]

//function1: addTask
function addTask(...task) {
    let taskLenght = task.length - 1
    let promiseResults = []
    return new Promise((resolve) => {
        setTimeout(() => {
            task.forEach((task) => {
                let isDataValid = typeof task === "string" && task !== ""
                if (isDataValid && promiseResults.length !== taskLenght) {
                    tasks.push(task)
                    promiseResults.push(`Task "${task}" added successfully`)
                } else if (
                    isDataValid &&
                    promiseResults.length === taskLenght
                ) {
                    promiseResults.push(`Task "${task}" added successfully`)
                    resolve(promiseResults)
                } else if (
                    !isDataValid &&
                    promiseResults.length !== taskLenght
                ) {
                    promiseResults.push("Task must be a non empy string")
                } else if (
                    !isDataValid &&
                    promiseResults.length === taskLenght
                ) {
                    promiseResults.push("Task must be a non empy string")
                    resolve(promiseResults)
                }
            })
        }, 1000)
    })
}

//fucntion2 completeTask
// function completeTask(...index) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (index < tasks.length && index >= 0) {
//                 tasks.splice(index, 1)
//                 resolve(`Task "${tasks[index]}"removed successfully`)
//             } else {
//                 reject(`Invalid index: "${index}"`)
//             }
//         }, 1000)
//     })
// }

// async function tasksManagement() {
//     try {
//         const addedTasks = await addTask(
//             "Add promise to tasks.js",
//             "Add spread operator and promises",
//             10,
//         )
//         console.log(addedTasks)
//         const completedTask = await completeTask(1)
//         console.log(completedTask)
//     } catch (error) {
//         console.log(error)
//     }
// }

// tasksManagement()
    

async function printResults() {
    try {
        let addedTasks = await addTask("task3", "task4", "task5")
                console.log(addedTasks)
    } catch (error) {
        console.log(error)
    }
}

printResults()

// addTask("task3", "task4", "task5")
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
