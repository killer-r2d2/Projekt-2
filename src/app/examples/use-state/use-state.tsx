import styles from './use-state.module.css';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface UseStateProps {}

export function UseState(props: UseStateProps) {
  const [count, setCount] = useState(0);

  return (
    <div className={styles['container']}>
      <h1>Welcome to UseState!</h1>
      <h2 className="font-bold">useState example:</h2>
      <div className="">
        <button onClick={() => setCount(count - 1)} className="">
          -
        </button>
        <span className="mx-8">{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

export default UseState;
