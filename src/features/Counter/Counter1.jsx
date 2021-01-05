import { Button, Typography } from '@material-ui/core';
import React from 'react';
import useCounter from './hooks/useCounter';

Counter1.propTypes = {};

function Counter1() {
  const { count, increase, decrease } = useCounter(10);

  return (
    <div>
      <Typography component="h2" variant="h2">
        {count}
      </Typography>

      <Button
        variant="outlined"
        color="primary"
        style={{ marginRight: '.5rem' }}
        onClick={decrease}
      >
        Decrease
      </Button>

      <Button variant="contained" color="primary" onClick={increase}>
        Increase
      </Button>
    </div>
  );
}

export default Counter1;
