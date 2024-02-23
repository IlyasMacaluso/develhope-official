//function 1
let tasks = [`Backup OS`, `Push tasks.js`, `Check Google Calendar`]

//function1: addTask
async function addTask(callback, ...tasksToAdd) {
    console.log("Adding task...")
    let i = 0
    while (i < tasksToAdd.length) {
        loadingID = setInterval(() => {
            if (typeof tasksToAdd[i] === "string" && tasksToAdd[i] !== "") {
                tasks.push(tasksToAdd[i])
                console.log(typeof tasksToAdd[i]);
                // callback(null, `Task "${tasksToAdd[i]}" added successfully`)
            } else {
                // callback(new Error("Task must be a non empy string"), null)
                console.log(typeof tasksToAdd[i])
            }
        }, 950)

            i++

    }
        
}

addTask(screenMessage, 10, "come", 10 )

//function2: complete task
// function completeTask(index, callback) {
//     setTimeout(() => {
//         console.log("Removing completed task...")
//     }, 2000)
//     setTimeout(() => {
//         if (index < tasks.length && index >= 0) {
//             tasks.splice(index, 1)
//             callback(null, `Task removed successfully`)
//         } else {
//             callback(new Error("Invalid task index"), null)
//         }
//     }, 3000)
// }

// completeTask(0, screenMessage)

//callback function for function 1 & 2
function screenMessage(error, message) {
    if (message) {
        console.log(message)
    } else {
        console.log(error)
    }
}

//function3: list all tasks on console
// function listTasks(tasksArray) {
//     console.log("Remaining tasks:")
//     tasksArray.forEach((task) => {
//         console.log(`- ${task}`)
//     })
// }

// setTimeout(() => {
//     listTasks(tasks)
// }, 4000)
