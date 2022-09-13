import { Component } from 'react';
import TodoItem from './TodoItem';

class TodosList extends Component {
  render() {
    return (
      <ul>
        {
               this.props.todo.map((todo) => (
                 <TodoItem
                   key={todo.id}
                   todo={todo}
                   handleChangeAttr={this.props.handleChangeAttr}
                   deleteTodosAttr={this.props.delTodosAttr}
                   editTodoAttr={this.props.editTodoAttr}
                 />
               ))
            }
      </ul>
    );
  }
}

export default TodosList;
