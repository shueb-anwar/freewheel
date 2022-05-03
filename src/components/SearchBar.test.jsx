import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  test('renders label and input', () => {
    render(<SearchBar />);
    const label = screen.getByText(/bike points search/i);
    const input = screen.getByTestId('search-input');

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});