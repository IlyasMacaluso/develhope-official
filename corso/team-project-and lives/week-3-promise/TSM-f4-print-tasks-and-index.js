let tasks = [`Backup OS`, `Push tasks.js`, `Check Google Calendar`]

function listTasks(tasks) {
    const indices = tasks.map((element) =>
        tasks.findIndex((item) => item === element)
    )
    indices.forEach(indice => {
        console.log(`Index (${indice}) ${tasks[indice]}`);
    })
}

listTasks(tasks)

//metodo migliore

function betterListTasks (tasks) {
    tasks.forEach((task, index) => console.log(`Index (${index}) : ${task}`))
}

betterListTasks(tasks)