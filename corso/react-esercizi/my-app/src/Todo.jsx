function Todo({ value, id, deleteTodo }) {
    return (
        <>
            <li>{value}</li>
            <button type="button" onClick={() => deleteTodo(id)}>
                Delete
            </button>
        </>
    )
}

export default Todo