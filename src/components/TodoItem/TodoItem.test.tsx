import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';
import { Todo } from '../../types/todo';

const mockTodo: Todo = {
  id: '1',
  description: 'Test Todo',
  completed: false,
};

const toggleTodo = jest.fn();

describe('TodoItem', () => {
  test('renders TodoItem component', () => {
    const { getByText } = render(<TodoItem todo={mockTodo} toggleTodo={toggleTodo} />);
    expect(getByText('Test Todo')).toBeInTheDocument();
  });

  test('calls toggleTodo when checkbox is clicked', () => {
    const { getByRole } = render(<TodoItem todo={mockTodo} toggleTodo={toggleTodo} />);
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(toggleTodo).toHaveBeenCalledWith('1');
  });

  test('applies completed class when todo is completed', () => {
    const completedTodo = { ...mockTodo, completed: true };
    const { getByText } = render(<TodoItem todo={completedTodo} toggleTodo={toggleTodo} />);
    expect(getByText('Test Todo')).toHaveClass('completed');
  });
});
