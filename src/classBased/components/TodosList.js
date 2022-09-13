import { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      handleChangeAttr, delTodosAttr, editTodoAttr, todoAttr,
    } = this.props;
    return (
      <ul>
        {
          todoAttr.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeAttr={handleChangeAttr}
              deleteTodosAttr={delTodosAttr}
              editTodoAttr={editTodoAttr}
            />
          ))
        }
      </ul>
    );
  }
}
// 'props.handleChangeAttr', 'props.delTodosAttr', 'props.editTodoAttr'
// is missing in props validation --- react/prop-types
TodosList.propTypes = {
  todoAttr: PropTypes.arrayOf.isRequired,
  handleChangeAttr: PropTypes.func.isRequired,
  delTodosAttr: PropTypes.func.isRequired,
  editTodoAttr: PropTypes.func.isRequired,
};
export default TodosList;
