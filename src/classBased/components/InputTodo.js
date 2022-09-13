import { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    const { title } = this.state;
    const { addTodoAttr } = this.props;
    e.preventDefault();
    if (title) {
      addTodoAttr(title);
      this.setState({ title: '' });
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
          required
        />
        <button type="button" className="input-submit">Submit</button>
      </form>
    );
  }
}
// 'addTodoAttr' is missing in props validation --- react/prop-types
InputTodo.propTypes = {
  addTodoAttr: PropTypes.func.isRequired,
};
export default InputTodo;
