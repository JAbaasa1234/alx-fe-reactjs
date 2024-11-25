import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from "../TodoList";

test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});

test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'Write Tests '} });
    fireEvent.click(addButton);

    expect(screen.getByText('Write Tests')).toBeInTheDocument();
});

test('toggles a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');

    screen.debug(todo);
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: none');
});

test('deletes a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Build a Todo App');
    const deleteButton = screen.getByText("Build a Todo App").nextElementSibling;

    fireEvent.click(deleteButton);
    expect(todo).not.toBeInTheDocument();
});