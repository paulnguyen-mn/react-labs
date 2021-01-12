import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { addTodo, removeTodo, setFilters, updateTodo } from './actions';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const { t, i18n } = useTranslation(['common', 'todos']);
  // const [lng, setLng] = useState(i18n.language);
  const {
    url,
    params: { lng },
  } = useRouteMatch();
  const history = useHistory();

  const todoList = useSelector((state) => state.todos.list);
  const filters = useSelector((state) => state.todos.filters);
  const dispatch = useDispatch();
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    i18n.changeLanguage(lng);
  }, [i18n, lng]);

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

  const handleLanguageChange = (e) => {
    const selectedLng = e.target.value;
    // console.log('Language change: ', e.target.value);
    // setLng(selectedLng);
    // i18n.changeLanguage(selectedLng);
    const newUrl = url.replace(/^\/.{2}\//, `/${selectedLng}/`);
    history.push(newUrl);
  };

  const filteredTodos =
    filters.completed === 'all'
      ? todoList
      : todoList.filter((x) => x.completed === filters.completed);

  return (
    <Container fixed>
      <Typography variant="h2">{t('hello-world')}</Typography>
      <Typography variant="h2">{t('hello-someone', { name: 'Hau :P' })}</Typography>

      <Typography variant="body1">
        <Trans i18nKey="todos:go-to-easy-frontend">
          Go to <a href="#">Easy Frontend</a>. <br />
          New line here...
        </Trans>
      </Typography>

      <FormControl variant="outlined">
        <Select value={lng} onChange={handleLanguageChange}>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="vi">Tiếng Việt</MenuItem>
        </Select>
      </FormControl>

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
