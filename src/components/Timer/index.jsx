import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Timer.scss';

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
};

function Timer({ seconds }) {
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((x) => {
        if (x <= 0) {
          clearInterval(interval);
          return 0;
        }

        return x - 1;
      });
    }, 1000);

    // clean up function
    return () => clearInterval(interval);
  }, [seconds]);

  return <div className={`timer ${count === 0 ? 'finished' : ''}`}>{`0${count}`.slice(-2)}</div>;
}

export default Timer;
