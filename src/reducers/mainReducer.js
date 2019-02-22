import ACTION_TYPES from "../actions/ACTION_TYPES"
import toggleTodo from './toggleTodo'
import receiveTodos from "./receiveTodos";
import addTodo from './addTodo'

const initialState = {
    todos: []
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.TOGGLE_TODO:
            return { todos: toggleTodo(state.todos, action) }
        case ACTION_TYPES.RECEIVE_TODOS:
            return { todos: receiveTodos(state.todos, action) }
        case ACTION_TYPES.ADD_TODO:
            return { todos: addTodo(state.todos, action) }
        default:
            return state
    }
}

export default mainReducer