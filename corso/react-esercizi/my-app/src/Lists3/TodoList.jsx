import { useState } from "react"
import TodoListItem from "./TodoListItem"

function TodoList() {
    //lista di tasks
    const [todos, setTodos] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        if (formData.get("todo") !== "") {
            setTodos((prevData) => {
                return [...prevData, formData.get("todo")]
            })
            e.target.reset()
        }
    }

    function handleItemDeletion(id) {
        const deletedItem = todos.filter((todo, index) => id !== index)
        setTodos(deletedItem)
    }

    return (
        <div>
            <form action="#" onSubmit={handleSubmit}>
                <input type="text" name="todo" />
                <button type="submit">Add to-do</button>
            </form>
            {error && <h3>Errore: stringa vuota</h3>}
            <ul>
                {todos &&
                    todos.map((todo, index) => (
                        <TodoListItem key={index} id={index} taskName={todo} deleteTodo={handleItemDeletion} />
                    ))}
            </ul>
        </div>
    )
}
export default TodoList
