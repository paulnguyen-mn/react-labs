import { useEffect, useState } from 'react';

export function useCountDown({ initialSeconds, onFinished }) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSecond) => {
        const nextSecond = prevSecond - 1;

        if (nextSecond <= 0) {
          clearInterval(interval);
          return 0;
        }

        return nextSecond;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return seconds;
}
