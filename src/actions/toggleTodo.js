import ACTION_TYPES from "./ACTION_TYPES";

const { TOGGLE_TODO } = ACTION_TYPES
const toggleTodo = id => ({ type: TOGGLE_TODO, id })

export default toggleTodo