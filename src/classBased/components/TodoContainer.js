import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

// class-based component
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({ todos: loadedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //  react/destructuring-assignment
    const { todosState } = this.state;
    if (prevState.todos !== todosState) {
      const temp = JSON.stringify(todosState);
      localStorage.setItem('todos', temp);
    }
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  }

  delTodo = (id) => {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos.filter((todo) => todo.id !== id),
      ],
    }));
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      completed: false,
      title,
    };

    this.setState((prevState) => ({
      todos: [
        ...prevState,
        newTodo,
      ],
    }));
  }

  editTodo = (updateTitle, id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          // Assignment to property of function parameter 'todo'  no-param-reassign
          return {
            ...todo,
            title: updateTitle,
          };
        }
        return todo;
      }),
    }));
  }

  render() {
    // react/destructuring-assignment
    const { todosState } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoAttr={this.addTodo} />
          <TodosList
            todo={todosState}
            handleChangeAttr={this.handleChange}
            delTodosAttr={this.delTodo}
            editTodoAttr={this.editTodo}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
