import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const handleInput = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const { addTodoAttr } = props;
    e.preventDefault();
    if (inputText.title) {
      addTodoAttr(inputText.title);
      setInputText({
        title: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Add Todo..."
        value={inputText.title}
        name="title"
        onChange={handleInput}
        required
      />
      <button type="button" className="input-submit" aria-label="Submit">
        <FaPlusCircle
          style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
        />
      </button>
    </form>
  );
};
// 'addTodoAttr' is missing in props validation --- react/prop-types
InputTodo.propTypes = {
  addTodoAttr: PropTypes.func.isRequired,
};
export default InputTodo;
