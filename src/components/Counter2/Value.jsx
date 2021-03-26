import styles from './Value.module.css';

const Value = ({ value }) => (
  <span className={styles.Counter__value}>{value}</span>
);
export default Value;
