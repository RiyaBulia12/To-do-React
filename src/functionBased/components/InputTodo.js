import { Component } from 'react';

class InputTodo extends Component {
   state = { title: '' }

   handleInput = (e) => {
     this.setState({
       [e.target.name]: e.target.value,
     });
   }

   handleSubmit = (e) => {
     const { title } = this.state;
     e.preventDefault();
     if (title) {
       this.props.addTodoAttr(title);
       this.setState({ title: '' });
     } else {
       alert('Please write item');
     }
   }

   render() {
     const { title } = this.state;
     return (
       <form onSubmit={this.handleSubmit} className="form-container">
         <input
           type="text"
           placeholder="Add Todo..."
           value={title}
           name="title"
           onChange={this.handleInput}
         />
         <button type="button" className="input-submit">Submit</button>
       </form>
     );
   }
}

export default InputTodo;
