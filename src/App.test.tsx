import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders main content', () => {
    render(<App />);
    const linkElement = screen.getByTestId('main-container');
    expect(linkElement).toBeInTheDocument();
  });
})