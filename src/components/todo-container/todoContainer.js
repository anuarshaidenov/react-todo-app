import { useState, useEffect } from 'react';
import './todo-container.scss';
import { v4 as uuidv4 } from 'uuid';

import TodoList from '../todo-list/todoList';
import Header from '../header/header';
import InputTodo from '../input-todo/inputTodo';

const TodoContainer = () => {
  const getInitialTodos = () => {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  };

  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodoItem = (title) => {
    const newTodo = {
      title,
      id: uuidv4(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoItem={addTodoItem} />
        <TodoList
          handleChangeProps={handleChange}
          delTodo={delTodo}
          todos={todos}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
