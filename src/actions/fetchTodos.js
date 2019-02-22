import receiveTodos from './receiveTodos'

const fetchTodos = () => {
    return dispatch => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, text: 'Learn React', completed: false }
            ])
        }, 100)
    })
    .then(data => dispatch(receiveTodos(data)))
}

export default fetchTodos