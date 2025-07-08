import { render, screen, fireEvent } from '@testing-library/react';
import type { ICountry } from 'ui/components/atoms/country-list/interfaces/Country.interface';
import { InputSelect } from './InputSelect';

export const options: ICountry[] = [
  { name: 'Argentina', code: 'ar', dialCode: '+51' },
  { name: 'Bolivia', code: 'bo', dialCode: '+51' },
  { name: 'Chile', code: 'cl', dialCode: '+51' },
  { name: 'Perú', code: 'pe', dialCode: '+51' },
];

describe('InputSelect Component', () => {
  it('renders disabled state', () => {
    render(<InputSelect options={options} disabled />);
    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('aria-disabled', 'true');
  });

  it('changes value on select', () => {
    render(<InputSelect options={options} />);
    const select = screen.getByRole('combobox');
    fireEvent.mouseDown(select);
    const option = screen.getByText('Bolivia');
    fireEvent.click(option);
    expect(screen.getByText('Argentina')).toBeInTheDocument();
  });

  it('matches snapshot in empty state', () => {
    const { container } = render(<InputSelect options={options} />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with error', () => {
    const { container } = render(<InputSelect options={options} error />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot disabled', () => {
    const { container } = render(<InputSelect options={options} disabled />);
    expect(container).toMatchSnapshot();
  });
});
