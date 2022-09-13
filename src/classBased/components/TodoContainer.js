import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

// class-based component
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

class TodoContainer extends Component {
   state = {
      todos: [],
   };

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
      this.setState({
         todos: [
            ...this.state.todos.filter((todo) => todo.id !== id),
         ],
      });
   }

   addTodo = (title) => {
      const newTodo = {
         id: uuidv4(),
         completed: false,
         title,
      };

      this.setState({
         todos: [
            ...this.state.todos,
            newTodo,
         ],
      });
   }

   editTodo = (updateTitle, id) => {
      this.setState({
         todos: this.state.todos.map((todo) => {
            if (todo.id === id) {
               todo.title = updateTitle;
            }
            return todo;
         }),
      });
   }

   componentDidMount() {
      const temp = localStorage.getItem("todos");
      const loadedTodos = JSON.parse(temp);
      if (loadedTodos) {
         this.setState({ todos: loadedTodos });
      }
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevState.todos !== this.state.todos) {
         const temp = JSON.stringify(this.state.todos);
         localStorage.setItem("todos", temp)
      }
   }

   render() {
      return (
         <div className="container">
            <div className="inner">
               <Header />
               <InputTodo addTodoAttr={this.addTodo} />
               <TodosList
                  todo={this.state.todos}
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
