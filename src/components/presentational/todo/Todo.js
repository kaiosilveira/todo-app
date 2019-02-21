import React from 'react'
import PropTypes from 'prop-types'
import Link from '../link/Link'

const Todo = ({ text, completed, onTodoClick }) => (
    <li style={{
        textDecoration: completed ? 'line-through' : 'none'
    }}>
        <Link text={text} onClick={onTodoClick} />
    </li>
)

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default Todo