import { connect } from 'react-redux'
import TodoList from "../presentational/todo-list/TodoList"
import toggleTodo from '../../actions/toggleTodo';

const mapStateToProps = state => ({ todos: state.todos })

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => dispatch(toggleTodo(id))
    }
}

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoListContainer