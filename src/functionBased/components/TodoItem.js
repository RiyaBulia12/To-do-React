import { Component } from 'react';
import styles from './TodoItem.module.scss';

class TodoItem extends Component {
   state = {
      editing: false,
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
   componentWillUnmount() {
      console.log("Cleaning up...")
   }
   render() {
      const viewMode = {};
      const editMode = {};
      if (this.state.editing) {
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
      const { id, title, completed } = this.props.todo;

      return (
         <li className={styles.item}>
            <div onDoubleClick={this.handleEdit} style={viewMode}>
               <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={completed}
                  onChange={() => this.props.handleChangeAttr(id)}
               />
               <button onClick={() => this.props.deleteTodosAttr(id)}>Delete</button>
               <span style={completed ? completedStyle : null}>
                  {title}
               </span>
            </div>
            <input
               type="text"
               className={styles.textInput}
               style={editMode}
               value={title}
               onChange={(e) => this.props.editTodoAttr(e.target.value, id)}
               onKeyDown={this.handleEditDone}
            />
         </li>
      );
   }
}

export default TodoItem;
