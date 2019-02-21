import ACTION_TYPES from "../actions/ACTION_TYPES"
import toggleTodo from './toggleTodo'

const initialState = {
    todos: [
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Learn Flux', completed: false },
        { id: 3, text: 'Learn Redux', completed: true },
    ]
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.TOGGLE_TODO:
            return { todos: toggleTodo(state.todos, action) }
        default:
            return state
    }
}

export default mainReducer