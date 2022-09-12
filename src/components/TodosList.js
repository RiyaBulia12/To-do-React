import { Component } from 'react';
import TodoItem from './TodoItem';

class TodosList extends Component {
  render() {
    return (
      <ul>
        {
               this.props.todo.map((todo) => (
                 <TodoItem key={todo.id} todo={todo} />
               ))
            }
      </ul>
    );
  }
}

export default TodosList;