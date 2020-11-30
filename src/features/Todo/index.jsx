import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const [todoList, setTodoList] = useState([
    { id: '1', value: 'Eat' },
    { id: '2', value: 'Code' },
    { id: '3', value: 'Sleep' },
  ]);

  return (
    <Container fixed>
      <TodoList todoList={todoList} />
    </Container>
  );
}

export default TodoFeature;
