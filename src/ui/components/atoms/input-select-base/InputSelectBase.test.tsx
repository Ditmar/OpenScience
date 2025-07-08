import { render, screen } from '@testing-library/react';
import { InputSelectBase } from './InputSelectBase';

describe('InputSelect Component', () => {
  it('renders disabled state', () => {
    render(<InputSelectBase disabled />);
    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('aria-disabled', 'true');
  });

  it('matches snapshot in empty state', () => {
    const { container } = render(<InputSelectBase />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with error', () => {
    const { container } = render(<InputSelectBase error />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot disabled', () => {
    const { container } = render(<InputSelectBase disabled />);
    expect(container).toMatchSnapshot();
  });
});
