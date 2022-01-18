import './todo-list.scss';

import TodoItem from '../todo-item/todoItem';

const TodoList = ({ todos, handleChange, delTodo }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        delTodo={delTodo}
        handleChange={handleChange}
      />
    ))}
  </ul>
);

export default TodoList;
