import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

TodoList.propTypes = {
  todoList: PropTypes.array,
};

TodoList.defaultProps = {
  todoList: [],
};

const useStyles = makeStyles(() => ({
  root: {
    listStyleType: 'none',
    padding: 0,
  },

  item: {
    padding: '.5rem 1rem',
    margin: '1rem 0',

    border: '1px solid #ddd',
    borderRadius: '4px',
  },
}));

function TodoList({ todoList }) {
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      {todoList.map((todo) => (
        <li className={classes.item} key={todo.id}>
          {todo.value}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
