import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemove: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onRemove: null,
};

const useStyles = makeStyles(() => ({
  root: {
    listStyleType: 'none',
    padding: 0,
  },

  item: {
    margin: '1rem 0',
  },
}));

function TodoList({ todoList, onRemove }) {
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      {todoList.map((todo) => (
        <li className={classes.item} key={todo.id}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography component="p" variant="body1">
                  {todo.value}
                </Typography>

                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<Delete />}
                  onClick={() => onRemove && onRemove(todo)}
                >
                  Delete
                </Button>
              </Box>
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
