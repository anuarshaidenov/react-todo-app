import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import TodoContainer from './components/todo-container/todoContainer';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
