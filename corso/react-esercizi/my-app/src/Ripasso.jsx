import { useState } from "react"
import Todo from "./Todo"

function Ripasso() {
    const [todos, setTodos] = useState([])
    const [error, setError] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        if (formData.get("todo") !== "") {
            setError(false)
            setTodos((prevData) => {
                return [...prevData, formData.get("todo")]
            })
            e.target.reset()
        } else {
            setError(true)
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
                        <Todo key={index} id={index} value={todo} deleteTodo={handleItemDeletion} />
                    ))}
            </ul>
        </div>
    )
}

export default Ripasso
