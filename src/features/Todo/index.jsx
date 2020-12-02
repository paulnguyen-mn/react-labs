import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const [todoList, setTodoList] = useState([
    { id: '1', value: 'Eat' },
    { id: '2', value: 'Code' },
    { id: '3', value: 'Sleep' },
  ]);

  const handleRemoveClick = (todo) => {
    setTodoList((currentList) => currentList.filter((x) => x.id !== todo.id));
  };

  const handleFormSubmit = (formValues) => {
    // Push to todoList
    setTodoList((currentList) => {
      // New item
      const newTodo = {
        id: new Date().getTime().toString(),
        value: formValues.value,
      };

      return [...currentList, newTodo];
    });
  };

  return (
    <Container fixed>
      <TodoForm onSubmit={handleFormSubmit} />
      <TodoList todoList={todoList} onRemove={handleRemoveClick} />
    </Container>
  );
}

export default TodoFeature;
