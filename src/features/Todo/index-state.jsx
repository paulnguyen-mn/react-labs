import { Box, Button, ButtonGroup, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './actions';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  // Connect to redux store
  const todos = useSelector((state) => state.todos.list);
  const todosFilters = useSelector((state) => state.todos.filters);
  console.log({ todos, todosFilters });

  const dispatch = useDispatch();

  useEffect(() => {
    const action = addTodo({ id: 2, title: 'Sleeping ' });
    dispatch(action);
  }, [dispatch]);
  // ----------------------

  const [filters, setFilters] = useState({
    completed: 'all',
  });
  const [todoList, setTodoList] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('todo_list')) || [];
    } catch (error) {}

    return [
      { id: '1', value: 'Eat', description: 'Lorem ipsum dolor sit amet.', completed: false },
      { id: '2', value: 'Code', description: 'Lorem ipsum dolor sit amet.', completed: false },
      { id: '3', value: 'Sleep', description: 'Lorem ipsum dolor sit amet.', completed: false },
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

  const filteredTodos =
    filters.completed === 'all'
      ? todoList
      : todoList.filter((x) => x.completed === filters.completed);

  return (
    <Container fixed>
      <Box mt={3} mb={5}>
        <TodoForm initialValues={selectedTodo} onSubmit={handleFormSubmit} />
      </Box>

      <Box textAlign="center">
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button
            variant={filters.completed === 'all' ? 'contained' : 'outlined'}
            onClick={() => setFilters({ completed: 'all' })}
          >
            All
          </Button>

          <Button
            variant={filters.completed === true ? 'contained' : 'outlined'}
            onClick={() => setFilters({ completed: true })}
          >
            Completed
          </Button>

          <Button
            variant={filters.completed === false ? 'contained' : 'outlined'}
            onClick={() => setFilters({ completed: false })}
          >
            Not Completed
          </Button>
        </ButtonGroup>
      </Box>

      <TodoList todoList={filteredTodos} onRemove={handleRemoveClick} onEdit={handleEditClick} />
    </Container>
  );
}

export default TodoFeature;
