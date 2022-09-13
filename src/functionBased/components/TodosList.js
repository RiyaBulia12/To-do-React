import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList({
  todos,
  handleChangeAttr,
  delTodosAttr,
  editTodoAttr,
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeAttr={handleChangeAttr}
          deleteTodosAttr={delTodosAttr}
          editTodoAttr={editTodoAttr}
        />
      ))}
    </ul>
  );
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ).isRequired,
  handleChangeAttr: PropTypes.func.isRequired,
  delTodosAttr: PropTypes.func.isRequired,
  editTodoAttr: PropTypes.func.isRequired,
};

export default TodosList;
