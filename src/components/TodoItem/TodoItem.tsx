import React from 'react';
import { Todo } from '../../types/todo';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li className={styles.todoItem} onClick={() => toggleTodo(todo.id)}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        onClick={(e) => e.stopPropagation()}  // Prevents the li onClick event from firing
        aria-label={`Mark ${todo.description} as ${todo.completed ? 'incomplete' : 'completed'}`}
      />
      <span className={todo.completed ? styles.completed : ''}>
        {todo.description}
      </span>
    </li>
  );
};

export default TodoItem;
