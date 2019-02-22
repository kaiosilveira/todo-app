import { connect } from "react-redux"
import AddTodo from "../presentational/add-todo/AddTodo"
import addTodo from '../../actions/addTodo'

const mapStateToProps = state => ({
    ble: 'ble'
})

const mapDispatchToProps = dispatch => ({
    onAddTodo: text => {
        dispatch(addTodo(text))
    }
})

const AddTodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo)

export default AddTodoContainer