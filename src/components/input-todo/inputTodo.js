import { useState } from 'react';

import './input-todo.scss';

const InputTodo = (props) => {
  const [title, setTitle] = useState('');

  const onChange = (e) => setTitle(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim()) {
      props.addTodoItem(title);
      setTitle('');
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        className="input-text"
        type="text"
        placeholder="Add Todo..."
        name="title"
        value={title}
        onChange={onChange}
      />
      <button className="input-submit">Submit</button>
    </form>
  );
};
export default InputTodo;
