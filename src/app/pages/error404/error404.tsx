import { Link } from 'react-router-dom';
import styles from './error404.module.css';

/* eslint-disable-next-line */
export interface Error404Props {}

export function Error404(props: Error404Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Error404!</h1>
      <p>
        <Link to="/">Go to the Home</Link>
      </p>
    </div>
  );
}

export default Error404;
