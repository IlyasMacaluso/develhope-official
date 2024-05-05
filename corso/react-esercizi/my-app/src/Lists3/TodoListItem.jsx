function Todo({ taskName, id, deleteTodo }) {
    return (
        <>
            <li>{taskName}</li>
            <button type="button" onClick={() => deleteTodo(id)}>
                Delete
            </button>
        </>
    )
}

export default Todo