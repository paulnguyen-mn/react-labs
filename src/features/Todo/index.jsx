import { Box, Button, ButtonGroup, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, setFilters, updateTodo } from './actions';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const todoList = useSelector((state) => state.todos.list);
  const filters = useSelector((state) => state.todos.filters);
  const dispatch = useDispatch();
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem('todo_list', JSON.stringify(todoList));
  }, [todoList]);

  const handleRemoveClick = (todo) => {
    // setTodoList((currentList) => currentList.filter((x) => x.id !== todo.id));
    const action = removeTodo(todo.id);
    dispatch(action);

    // dispatch(removeTodo(todo.id));
  };

  const handleEditClick = (todo) => {
    setSelectedTodo(todo);
  };

  const handleFormSubmit = (formValues) => {
    const newTodo = {
      ...formValues,
      id: selectedTodo ? selectedTodo.id : new Date().getTime(),
    };
    const action = selectedTodo ? updateTodo(newTodo) : addTodo(newTodo);
    dispatch(action);
    setSelectedTodo(null);
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
            onClick={() => dispatch(setFilters({ completed: 'all' }))}
          >
            All
          </Button>

          <Button
            variant={filters.completed === true ? 'contained' : 'outlined'}
            onClick={() => dispatch(setFilters({ completed: true }))}
          >
            Completed
          </Button>

          <Button
            variant={filters.completed === false ? 'contained' : 'outlined'}
            onClick={() => dispatch(setFilters({ completed: false }))}
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
