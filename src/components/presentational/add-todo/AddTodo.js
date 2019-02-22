import React from 'react'
import PropTypes from 'prop-types'

const AddTodo = props => {

    // entender esse truque
    let input

    return (
        <form
            onSubmit={
                e => {
                    e.preventDefault()
                    props.onAddTodo(input.value)
                    input.value = ''
                }
            }
        >
            <input type="text" ref={node => input = node} placeholder="Type to-do description" />
            <button>Add</button>
        </form>
    )
}

AddTodo.propTypes = {
    onAddTodo: PropTypes.func.isRequired
}

export default AddTodo