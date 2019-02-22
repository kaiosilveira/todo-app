import ACTION_TYPES from "./ACTION_TYPES";

const receiveTodos = todos => ({
    type: ACTION_TYPES.RECEIVE_TODOS,
    todos
})

export default receiveTodos