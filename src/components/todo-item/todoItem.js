import React from 'react';
import './todo-item.scss';

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input
          checked={this.props.todo.completed}
          type="checkbox"
          onChange={() => this.props.handleChange(this.props.todo.id)}
        />
        <button onClick={() => this.props.delTodo(this.props.todo.id)}>
          Delete
        </button>
        {this.props.todo.title}
      </li>
    );
  }
}

export default TodoItem;
