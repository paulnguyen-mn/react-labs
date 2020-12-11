import { Box, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const [todoList, setTodoList] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('todo_list')) || [];
    } catch (error) {}

    return [
      { id: '1', value: 'Eat', description: 'Lorem ipsum dolor sit amet.' },
      { id: '2', value: 'Code', description: 'Lorem ipsum dolor sit amet.' },
      { id: '3', value: 'Sleep', description: 'Lorem ipsum dolor sit amet.' },
    ];
  });

  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem('todo_list', JSON.stringify(todoList));
  }, [todoList]);

  const handleRemoveClick = (todo) => {
    setTodoList((currentList) => currentList.filter((x) => x.id !== todo.id));
  };

  const handleEditClick = (todo) => {
    setSelectedTodo(todo);
  };

  const handleFormSubmit = (formValues) => {
    // EDIT MODE
    if (selectedTodo) {
      // clone todo list
      // find index
      // update value
      // set list = new list
      setTodoList((currentList) => {
        const newList = [...currentList];
        const updatedIdx = newList.findIndex((x) => x.id === selectedTodo.id);
        if (updatedIdx < 0) return currentList;

        // clone todo item
        newList[updatedIdx] = {
          ...newList[updatedIdx],
          ...formValues,
        };

        return newList;
      });
      setSelectedTodo(null);

      return;
    }

    // ADD MODE
    // Push to todoList
    setTodoList((currentList) => {
      // New item
      const newTodo = {
        id: new Date().getTime().toString(),
        ...formValues,
      };

      return [...currentList, newTodo];
    });
  };

  return (
    <Container fixed>
      <Box mt={3} mb={5}>
        <TodoForm initialValues={selectedTodo} onSubmit={handleFormSubmit} />
      </Box>

      <TodoList todoList={todoList} onRemove={handleRemoveClick} onEdit={handleEditClick} />
    </Container>
  );
}

export default TodoFeature;
