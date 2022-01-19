import './todo-list.scss';

import TodoItem from '../todo-item/todoItem';

const TodoList = ({ todos, handleChangeProps, delTodo, setUpdate }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        delTodo={delTodo}
        handleChangeProps={handleChangeProps}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

export default TodoList;
