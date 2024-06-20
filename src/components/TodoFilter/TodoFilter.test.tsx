import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoFilter from './TodoFilter';

const setFilter = jest.fn();

describe('TodoFilter', () => {
  test('renders TodoFilter component', () => {
    const { getByText } = render(<TodoFilter filter="All" setFilter={setFilter} />);
    expect(getByText('All')).toBeInTheDocument();
    expect(getByText('Active')).toBeInTheDocument();
    expect(getByText('Completed')).toBeInTheDocument();
  });

  test('calls setFilter with "All" when All button is clicked', () => {
    const { getByText } = render(<TodoFilter filter="Active" setFilter={setFilter} />);
    fireEvent.click(getByText('All'));
    expect(setFilter).toHaveBeenCalledWith('All');
  });

  test('calls setFilter with "Active" when Active button is clicked', () => {
    const { getByText } = render(<TodoFilter filter="All" setFilter={setFilter} />);
    fireEvent.click(getByText('Active'));
    expect(setFilter).toHaveBeenCalledWith('Active');
  });

  test('calls setFilter with "Completed" when Completed button is clicked', () => {
    const { getByText } = render(<TodoFilter filter="All" setFilter={setFilter} />);
    fireEvent.click(getByText('Completed'));
    expect(setFilter).toHaveBeenCalledWith('Completed');
  });

  test('disables current filter button', () => {
    const { getByText } = render(<TodoFilter filter="All" setFilter={setFilter} />);
    expect(getByText('All')).toBeDisabled();
    expect(getByText('Active')).not.toBeDisabled();
    expect(getByText('Completed')).not.toBeDisabled();
  });
});
