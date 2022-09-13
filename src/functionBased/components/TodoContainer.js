import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import About from '../pages/About';
import NotMatch from '../pages/NotMatch';
import Navbar from './Navbar';

const TodoContainer = () => {
  const loadList = () => {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    return loadedTodos || [];
  };

  const [todos, setTodos] = useState(loadList());

  useEffect(() => {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);

    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, [setTodos]);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      completed: false,
      title,
    };
    setTodos([...todos, newTodo]);
  };

  const editTodo = (updateTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          // Assignment to property of function parameter 'todo'  no-param-reassign
          return {
            ...todo,
            title: updateTitle,
          };
        }
        return todo;
      }),
    );
  };

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  return (
    // [div] is not a <Route> component. All component children of <Routes>
    // must be a <Route> or <React.Fragment>
    // https://stackoverflow.com/questions/70074873/reactjs-home-is-
    // not-a-route-component-all-component-children-of-routes-m
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={(
            <div className="container">
              <div className="inner">
                <Header />
                <InputTodo addTodoAttr={addTodo} />
                <TodosList
                  todos={todos}
                  handleChangeAttr={handleChange}
                  delTodosAttr={delTodo}
                  editTodoAttr={editTodo}
                />
              </div>
            </div>
          )}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
};

export default TodoContainer;
