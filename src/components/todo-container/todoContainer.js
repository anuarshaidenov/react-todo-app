import React from 'react';
import './todo-container.scss';

import TodoList from '../todo-list/todoList';
import Header from '../header/header';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Header />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodoContainer;
