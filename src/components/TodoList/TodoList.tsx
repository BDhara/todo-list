import React, { useState } from 'react';
import { Todo } from '../../types/todo';
import TodoItem from '../TodoItem/TodoItem';
import TodoFilter from '../TodoFilter/TodoFilter';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import styles from './TodoList.module.css';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  const [filter, setFilter] = useState<'All' | 'Active' | 'Completed'>('All');

  const addTodo = (description: string) => {
    const newTodo = { id: Date.now().toString(), description, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  return (
    <div>
      <h1>Todo List</h1>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Add todo"
          onKeyDown={e => {
            if (e.key === 'Enter' && e.currentTarget.value.trim()) {
              addTodo(e.currentTarget.value.trim());
              e.currentTarget.value = '';
            }
          }}
        />
      </div>
      <TodoFilter filter={filter} setFilter={setFilter} />
      <ul>
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
