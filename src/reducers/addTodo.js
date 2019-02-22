const addTodo = (state, action) => {
    return [...state, { id: state.length + 1, text: action.text, completed: false }]
}

export default addTodo