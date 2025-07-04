import { render, screen, fireEvent } from '@testing-library/react';
import { InputCountry } from './InputCountry';

interface Option {
  country: string;
  code: string;
}
const options: Option[] = [
  { country: 'Argentina', code: 'ar' },
  { country: 'Bolivia', code: 'bo' },
  { country: 'Chile', code: 'cl' },
  { country: 'Perú', code: 'pe' },
];

describe('InputCountry Component', () => {
  it('renders with label', () => {
    render(<InputCountry label="Select Country" helperText="hint" options={options} />);
    expect(screen.getByText('Select Country')).toBeInTheDocument();
  });

  it('renders with helperText and error', () => {
    render(<InputCountry label="Select Country" options={options} error helperText="Error text" />);
    expect(screen.getByText('Error text')).toBeInTheDocument();
  });

  it('renders disabled state', () => {
    render(
      <InputCountry label="Select Country" options={options} helperText="Hint Text" disabled />,
    );
    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('aria-disabled', 'true');
  });

  it('changes value on select', () => {
    render(<InputCountry label="Select Country" options={options} helperText="Hint Text" />);
    const select = screen.getByRole('combobox');
    fireEvent.mouseDown(select);
    const option = screen.getByText('Bolivia');
    fireEvent.click(option);
    expect(screen.getByText('Argentina')).toBeInTheDocument();
  });

  it('matches snapshot in empty state', () => {
    const { container } = render(
      <InputCountry label="Country" options={options} helperText="Hint Text" />,
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with error', () => {
    const { container } = render(
      <InputCountry label="Country" options={options} error helperText="Hint Text" />,
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot disabled', () => {
    const { container } = render(
      <InputCountry label="Country" options={options} helperText="Hint Text" disabled />,
    );
    expect(container).toMatchSnapshot();
  });
});
