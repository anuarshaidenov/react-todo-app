import './todo-list.scss';

import TodoItem from '../todo-item/todoItem';

const TodoList = ({ todos, handleChange, delTodo, setUpdate }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        delTodo={delTodo}
        handleChange={handleChange}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

export default TodoList;
