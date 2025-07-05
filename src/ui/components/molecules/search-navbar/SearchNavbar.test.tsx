import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import SearchNavbar from './SearchNavbar';

describe('SearchNavbar component', () => {
  it('must render the search button', () => {
    render(<SearchNavbar />);
    expect(screen.getByLabelText(/buscar/i)).toBeInTheDocument();
  });

  it('should display the input when the button is clicked', () => {
    render(<SearchNavbar />);
    const button = screen.getByLabelText(/buscar/i);
    fireEvent.click(button);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('you must execute the onSearch function when submitting', () => {
    const mockOnSearch = vi.fn();
    render(<SearchNavbar onSearch={mockOnSearch} />);
    fireEvent.click(screen.getByLabelText(/buscar/i));
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.submit(input);
    expect(mockOnSearch).toHaveBeenCalledWith('test');
  });
});

it('should display the custom placeholder', () => {
  render(<SearchNavbar placeholder="Buscar artículos..." />);
  fireEvent.click(screen.getByLabelText(/buscar/i));
  expect(screen.getByPlaceholderText(/Buscar artículos.../i)).toBeInTheDocument();
});

it('should display the input if showInputDefault is true', () => {
  render(<SearchNavbar showInputDefault />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

it('should focus the input automatically when displayed', () => {
  render(<SearchNavbar />);
  fireEvent.click(screen.getByLabelText(/buscar/i));
  expect(screen.getByRole('textbox')).toHaveFocus();
});
