import { useState, useEffect } from 'react';
import styles from './todo-item.module.scss';

const completedStyle = {
  fontStyle: 'italic',
  color: '#595959',
  opacity: 0.4,
  textDecoration: 'line-through',
};

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    const title = e.target.value;
    const id = props.todo.id;

    props.setUpdate(title, id);
  };

  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };

  useEffect(() => {
    return () => {
      console.log('Cleaning up...');
    };
  }, []);

  const { id, completed, title } = props.todo;

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          className={styles.checkbox}
          checked={completed}
          type="checkbox"
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.delTodo(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        value={title}
        className={styles.textInput}
        onChange={handleChange}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
