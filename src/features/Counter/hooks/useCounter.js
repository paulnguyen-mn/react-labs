import { useState } from 'react';

export default function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  const handleIncreaseClick = () => {
    setCount((x) => x + 1);
  };

  const handleDecreaseClick = () => {
    setCount((x) => x - 1);
  };

  return {
    count,
    increase: handleIncreaseClick,
    decrease: handleDecreaseClick,
  };
}
