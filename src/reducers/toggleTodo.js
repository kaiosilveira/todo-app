const toggleTodo = (state = [], action) => state
    .map(
        todo => todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo
    )

export default toggleTodo