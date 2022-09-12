import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

// class-based component
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

class TodoContainer extends Component {
   state = {
     todos: [
       {
         id: uuidv4(),
         title: 'Setup development environment',
         completed: false,
       },
       {
         id: uuidv4(),
         title: 'Develop website and add content',
         completed: false,
       },
       {
         id: uuidv4(),
         title: 'Deploy to live server',
         completed: false,
       },
     ],
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
           />
         </div>
       </div>
     );
   }
}

export default TodoContainer;
