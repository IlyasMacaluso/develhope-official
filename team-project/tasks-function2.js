let tasks = [`Backup OS`, `Push tasks.js,`];

//function2: complete task
function completeTask(index, callback){ //index of the task to be completed
    if (index < tasks.length && index >= 0){
        //simula caricamento - inizio : stampa "." ogni secondo (non richiesto, rimosso su tasks.js))
        let i = ""
        const loadingID = setInterval(() => {
            console.log(i = i + "...")
        }, 950)
        //simula caricamento - fine
        setTimeout(() => {
            tasks.splice(index, 1)
            callback(null, `Task completed successfully`)
            clearInterval(loadingID) //parte di "simula caricamento"
        }, 2000)
    } else {
        callback(new Error("Invalid task index"))
    }
}

function screenMessage (error, message){
    if (message){
        console.log(message);
    } else {
        console.log(error);
    }
}

completeTask(0, screenMessage)