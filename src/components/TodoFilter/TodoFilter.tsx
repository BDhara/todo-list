import React from 'react';

interface TodoFilterProps {
  filter: 'All' | 'Active' | 'Completed';
  setFilter: (filter: 'All' | 'Active' | 'Completed') => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter('All')} disabled={filter === 'All'}>
        All
      </button>
      <button onClick={() => setFilter('Active')} disabled={filter === 'Active'}>
        Active
      </button>
      <button onClick={() => setFilter('Completed')} disabled={filter === 'Completed'}>
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
