import React from 'react';
import styles from './todo-item.module.scss';

const completedStyle = {
  fontStyle: 'italic',
  color: '#595959',
  opacity: 0.4,
  textDecoration: 'line-through',
};

class TodoItem extends React.Component {
  state = {
    editing: false,
  };

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleChange = (e) => {
    const title = e.target.value;
    const id = this.props.todo.id;

    this.props.setUpdate(title, id);
  };

  handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      this.setState({ editing: false });
    }
  };

  render() {
    const { id, completed, title } = this.props.todo;

    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            className={styles.checkbox}
            checked={completed}
            type="checkbox"
            onChange={() => this.props.handleChange(id)}
          />
          <button onClick={() => this.props.delTodo(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          type="text"
          style={editMode}
          value={title}
          className={styles.textInput}
          onChange={this.handleChange}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

export default TodoItem;
