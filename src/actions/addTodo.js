import ACTION_TYPES from "./ACTION_TYPES";

const addTodo = text => ({
    type: ACTION_TYPES.ADD_TODO,
    text
})

export default addTodo