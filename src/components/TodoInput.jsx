export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue, editing } = props

    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter to do..." />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>{editing ? "Save" : "Add"}</button>
        </header>
    )
}