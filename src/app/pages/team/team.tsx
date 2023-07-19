import styles from './team.module.css';

/* eslint-disable-next-line */
export interface TeamProps {}

export function Team(props: TeamProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Team Page!</h1>
    </div>
  );
}

export default Team;
