import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText('Add todo'), { target: { value: 'New Todo' } });
    fireEvent.keyDown(screen.getByPlaceholderText('Add todo'), { key: 'Enter', code: 'Enter' });
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText('Add todo'), { target: { value: 'New Todo' } });

    const checkboxes = screen.getAllByRole('checkbox');
    const checkbox = checkboxes[0];
    fireEvent.click(checkbox);
    expect(screen.getByText('New Todo')).toHaveClass('completed');
  });
});
