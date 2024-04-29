import { useState } from "react"

function ToDoList() {
    //lista di tasks
    const [todos, setTodos] = useState(["task1", "task2", "task3"])
    //controlled form per aggiungere nuovo task alla lista di task
    const [newTask, setNewTask] = useState("")

    //funzione che stampa e gestisce i singoli task
    function ToDoListItem({ task }) {

        //funzione per rimuovere un task dalla lista (variabile di stato "todos")
        function handleTaskRemove() {
            setTodos((prevData) => {
                //imposto il nuovo valore della variabile di stato "todos" filtrando tutti gli elementi
                //con valore diverso dal task attuale (si dovrebbe utilizzare l'Id in un caso reale, ma non ne abbiamo in questo caso)
                const newData = prevData.filter((todo) => {
                    if (todo !== task) {
                        return todo
                    }
                })
                //restituisco l'array filtrato che viene assegnato come valore di "todos" (in cui manca solo l'elemento corrente, che abbiamo quindi rimosso)
                return [...newData]
            })
        }
        //stampo tutti gli elementi di "todos" singolarmente
        return (
            <>
                <li>{task}</li>
                <button type="button" onClick={() => handleTaskRemove()}>
                    Remove Task
                </button>
            </>
        )
    }

    //altre funzioni di ToDoList
    // controlled form per aggiungere nuovo task
    function handleInputChange(event) {
        setNewTask(() => event.target.value)
    }
    //aggiunzione del nuovo task alla variabile di stato "todos"
    function handleTaskAddition() {
        if (newTask != "") {
            setTodos((prevData) => {
                const newData = [...prevData, newTask]
                handleInputClear()
                return newData
            })
        }
    }
    //reset del campo di testo 
    function handleInputClear() {
        setNewTask("")
    }

    return (
        <ul>
            <h1>ToDoList</h1>
            {todos.map((todo, index) => {
                return (
                    <>
                        <ToDoListItem key={todo + index} task={todo} />
                    </>
                )
            })}
            <input name="newTask" type="text" value={newTask} onChange={handleInputChange} />
            <button type="button" onClick={handleTaskAddition}>
                Add new task
            </button>
            <button type="button" onClick={handleInputClear}>
                Reset Input
            </button>
        </ul>
    )
}

export default ToDoList
