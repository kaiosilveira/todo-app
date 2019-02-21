import ACTION_TYPES from '../actions/ACTION_TYPES'

const toggleTodo = (state = [], action) => {
    switch (action.type) {
        case ACTION_TYPES.TOGGLE_TODO:
            const todos = state.map(todo => {
                return todo.id === action.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            })
            return todos
        default:
            return state
    }
}

export default toggleTodo