// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails
  const deleteTodoItem = () => {
    deleteTodo(id)
  }
  return (
    <li className="todoContainer">
      <p className="description">{title}</p>
      <button className="delete-btn" type="button" onClick={deleteTodoItem}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
