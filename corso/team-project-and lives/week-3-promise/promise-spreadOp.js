let tasks = [`Backup OS`, `Push tasks.js`, `Check Google Calendar`]

//function1: addTask
function addTask(...task) {
    let taskLenght = task.length -1
    let results = []
    return new Promise((resolve) => {
        setTimeout(() => {
            task.map((task) => {
                let condition = (typeof task === "string" && task !== "")
                if (condition && results.length !== taskLenght) {
                    tasks.push(task)
                    results.push(`Task "${task}" added successfully`)
                } else if (condition && results.length === taskLenght) {
                    results.push(`Task "${task}" added successfully`)
                    resolve(results)
                } else if (!condition && results.length !== taskLenght) {
                    results.push("Task must be a non empy string")
                } else if (!condition && results.length === taskLenght) {
                    results.push("Task must be a non empy string")
                    resolve(results)
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

addTask("task3", "task4", "task5")
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })
