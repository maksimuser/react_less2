import styles from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className={styles.Counter__controls}>
    <button type="button" onClick={onIncrement}>
      Увеличить на 1
    </button>
    <button type="button" onClick={onDecrement}>
      Уменьшить на 1
    </button>
  </div>
);
export default Controls;
