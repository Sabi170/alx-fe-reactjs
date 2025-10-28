import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  // Test 1: Initial Render
  test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  // Test 2: Adding Todos
  test('allows users to add a new todo', () => {
    render(<TodoList />);

    const inputElement = screen.getByPlaceholderText('Add new todo');
    const addButton = screen.getByRole('button', { name: /add todo/i });

    fireEvent.change(inputElement, { target: { value: 'New Test Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    expect(inputElement.value).toBe(''); // Input should be cleared
  });

  // Test 3: Toggling Todos
  test('allows users to toggle a todo completion status', () => {
    render(<TodoList />);

    const todoItem = screen.getByText('Learn React');
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoItem); // Toggle it
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoItem); // Toggle it back
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  // Test 4: Deleting Todos
  test('allows users to delete a todo', () => {
    render(<TodoList />);

    const todoText = 'Build a Todo App';
    expect(screen.getByText(todoText)).toBeInTheDocument();

    // Find the delete button associated with 'Build a Todo App'
    // This is a bit tricky; we need to find the specific button next to the item.
    // A robust way would be to give the delete button a specific test id or better context.
    // For this example, let's assume the delete button is right next to the span.
    const todoItemElement = screen.getByText(todoText);
    const deleteButton = todoItemElement.nextElementSibling; // Assuming button is sibling

    fireEvent.click(deleteButton);

    expect(screen.queryByText(todoText)).not.toBeInTheDocument();
  });
});