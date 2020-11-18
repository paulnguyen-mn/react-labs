import React, { useState } from 'react';
import './counter.scss';

Counter.propTypes = {};

function Counter(props) {
  const [count, setCount] = useState(0); // 0 la gia tri khoi tao, do coder dat, so, object, chuoi, array,... deu dc
  // const [count, setName] = useState('');

  const handleDecreaseClick = () => {
    setCount((x) => x - 1);
  };

  const handleIncreaseClick = () => {
    setCount((x) => x + 1);
  };

  return (
    <div className="counter">
      <p>{count}</p>
      <button onClick={handleDecreaseClick}>Decrease</button>
      <button onClick={handleIncreaseClick}>Increase</button>
    </div>
  );
}

export default Counter;
