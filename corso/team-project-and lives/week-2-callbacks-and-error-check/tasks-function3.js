let tasks = [`Backup OS`, `Push tasks.js,`];

//function3: list all tasks on console
function listTasks(tasksArray) {
    tasksArray.forEach((task) => {
      console.log(task);
    });
  }
  
  listTasks(tasks);