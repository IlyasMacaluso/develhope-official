let tasks = [`Backup OS`, `Push tasks.js`, `Check Google Calendar`]

//fucntion2 completeTask
function completeTasks(onCompleted, tasks, ...indexes) {
    console.log(`Removing completed tasks...`)
    setTimeout(() => {
        indexes.sort((a, b) => b - a)
        indexes.forEach((index) => {
            if (tasks[index]) {
                tasks.splice(index, 1)
                onCompleted(
                    `Task (${index}): ${tasks[index]} removed successfully`
                )
            } else {
                onCompleted(`Index (${index}) not valid... Skipping to next`)
            }
        })
    }, 1000)
}

function completeTasks2(onCompleted, tasks, ...indexes) {
    console.log(`Removing completed tasks...`)
    setTimeout(() => {
        indexes.sort((a, b) => b - a)
        indexes.forEach((index) => {
            if (tasks[index]) {
                tasks.splice(index, 1)
                onCompleted(
                    `Task (${index}): ${tasks[index]} removed successfully`
                )
            } else {
                onCompleted(`Index (${index}) not valid... Skipping to next`)
            }
        })
    }, 1000)
}

async function printResults() {
    try {
        const message =  await completeTasks((message) => console.log(message), tasks, 1, 2, 0)
        const message2 = await completeTasks2((message) => console.log(message), tasks, 1, 2, 0)
    } catch (errore) {
        console.log(errore)
    }
}

printResults()