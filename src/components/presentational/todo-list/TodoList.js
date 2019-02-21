import React from 'react'
import PropTypes from 'prop-types'

import Todo from '../todo/Todo'

class TodoList extends React.Component {
    render() {
        return (
            <ul>{
                this.props.todos.map(todo => (
                    <Todo key={todo.id} {...todo} onTodoClick={() => this.props.onTodoClick(todo.id)} />
                ))
            }</ul>
        )
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired
}

export default TodoList