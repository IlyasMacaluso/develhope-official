import { useState } from "react"

function ToDoList() {
    const [todos, setTodos] = useState(["task1", "task2", "task3"])
    const [newTask, setNewTask] = useState("")

    //funzione che stampa e gestisce i singoli elementi della lista
    function ToDoListItem({ task }) {

        function handleTaskRemove() {
            setTodos((prevData) => {
                const newData = prevData.filter((todo) => {
                    if (todo !== task) {
                        return todo
                    }
                })
                console.log(newData);
                return [...newData]
            })
        }
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
    function handleInputChange(event) {
        setNewTask(() => event.target.value)
    }
    function handleTaskAddition() {
        if (newTask != "") {
            setTodos((prevData) => {
                const newData = [...prevData, newTask]
                handleInputClear()
                return newData
            })
        }
    }
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
