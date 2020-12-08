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

  const [selectedTodo, setSelectedTodo] = useState(null);
  // const [showForm, setShowForm] = useState(true);

  const handleRemoveClick = (todo) => {
    setTodoList((currentList) => currentList.filter((x) => x.id !== todo.id));
  };

  const handleEditClick = (todo) => {
    console.log('Edit  click', todo);
    // setShowForm(false);
    setSelectedTodo(todo);

    // setTimeout(() => setShowForm(true));
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
        value: formValues.value,
      };

      return [...currentList, newTodo];
    });
  };

  return (
    <Container fixed>
      {showForm && <TodoForm initialValues={selectedTodo} onSubmit={handleFormSubmit} />}
      <TodoList todoList={todoList} onRemove={handleRemoveClick} onEdit={handleEditClick} />
    </Container>
  );
}

export default TodoFeature;
