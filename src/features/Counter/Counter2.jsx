import { Button, Typography } from '@material-ui/core';
import React from 'react';
import useCounter from './hooks/useCounter';

Counter2.propTypes = {};

function Counter2() {
  const { count, increase, decrease } = useCounter(50);

  return (
    <div>
      <Typography component="h2" variant="h2">
        {count}
      </Typography>

      <Button
        variant="outlined"
        color="secondary"
        style={{ marginRight: '.5rem' }}
        onClick={decrease}
      >
        Decrease
      </Button>

      <Button variant="contained" color="secondary" onClick={increase}>
        Increase
      </Button>
    </div>
  );
}

export default Counter2;
