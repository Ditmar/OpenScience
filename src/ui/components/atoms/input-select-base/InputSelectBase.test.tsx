import { render, screen } from '@testing-library/react';
import { InputSelectBase } from './InputSelectBase';
import type { ICountry } from '../country-list/interfaces/Country.interface';

export const options: ICountry[] = [
  { name: 'Argentina', code: 'ar', dialCode: '+51' },
  { name: 'Bolivia', code: 'bo', dialCode: '+51' },
  { name: 'Chile', code: 'cl', dialCode: '+51' },
  { name: 'Perú', code: 'pe', dialCode: '+51' },
];

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
