import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.scss';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing({
      editing: true,
    });
  };

  const handleEditDone = (e) => {
    if (e.key === 'Enter') {
      setEditing({ editing: false });
    }
  };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const {
    todo: { id, title, completed },
    handleChangeAttr, deleteTodosAttr, editTodoAttr,
  } = props;

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEdit} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => handleChangeAttr(id)}
        />
        <button type="button" onClick={() => deleteTodosAttr(id)} aria-label="Delete">
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={title}
        onChange={(e) => editTodoAttr(e.target.value, id)}
        onKeyDown={handleEditDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  // react/prop-types : missing in prop validation
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  editTodoAttr: PropTypes.func.isRequired,
  deleteTodosAttr: PropTypes.func.isRequired,
  handleChangeAttr: PropTypes.func.isRequired,
};

export default TodoItem;
