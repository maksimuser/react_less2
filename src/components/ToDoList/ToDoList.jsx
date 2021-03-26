import styles from './ToDoList.module.scss';

const ToDoList = ({ todos, onDeleteTodo }) => (
  <ul className={styles.ToDoList}>
    {todos.map(({ id, text, completed }) => (
      <li key={id} className={styles.ToDoList__item}>
        <p className={styles.ToDoList__text}>{text}</p>
        <button type="button" onClick={() => onDeleteTodo(id)}>
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default ToDoList;
