import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.scss';

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
    };
  }

  handleEdit = () => {
    this.setState({
      editing: true,
    });
  }

  handleEditDone = (e) => {
    if (e.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  render() {
    const viewMode = {};
    const editMode = {};
    // react/destructuring-assignment
    const { editing } = this.state;
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
      handleChangeAttr, deleteTodosAttr, editTodoAttr, id, title, completed,

    } = this.props;

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEdit} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => handleChangeAttr(id)}
          />
          <button type="button" onClick={() => deleteTodosAttr(id)}>Delete</button>
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
          onKeyDown={this.handleEditDone}
        />
      </li>
    );
  }
}

TodoItem.propTypes = {
  // react/prop-types : missing in prop validation
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
  editTodoAttr: PropTypes.func.isRequired,
  deleteTodosAttr: PropTypes.func.isRequired,
  handleChangeAttr: PropTypes.func.isRequired,
};

export default TodoItem;
