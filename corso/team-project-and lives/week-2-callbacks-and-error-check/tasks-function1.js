let tasks = [`Backup OS`, `Push tasks.js,`];

//function1: addTask
function addTask(task, callback){
    if (typeof task === "string" && task !== ""){
        //simula caricamento - inizio : stampa "." ogni secondo (non richiesto, rimosso su tasks.js)
        let i = ""
        const loadingID = setInterval(() => {
            console.log(i = i + "...")
        }, 950)
        //simula caricamento - fine
        setTimeout(() => {
            tasks.push(task)
            callback(null, `Task added successfully`)
            clearInterval(loadingID) //parte di "simula caricamento"
        }, 3000)
    } else {
        callback(new Error ("Task must be a non empy string"), null)
    }
}

function screenMessage (error, message){
    if (message){
        console.log(message);
    } else {
        console.log(error);
    }
}

addTask("Push task.js to GitHub repo", screenMessage)