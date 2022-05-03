import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  test('renders image logo', () => {
    render(<Header />);
    const imgElement = screen.getByTestId('logo');
    expect(imgElement).toBeInTheDocument();
  });
})