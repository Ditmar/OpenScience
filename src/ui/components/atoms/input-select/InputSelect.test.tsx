import { render, screen, fireEvent } from '@testing-library/react';
import { InputSelect } from './InputSelect';

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

describe('InputSelect Component', () => {
  it('renders with label', () => {
    render(<InputSelect options={options} />);
    expect(screen.getByText('Select Country')).toBeInTheDocument();
  });

  it('renders with helperText and error', () => {
    render(<InputSelect options={options} error />);
    expect(screen.getByText('Error text')).toBeInTheDocument();
  });

  it('renders disabled state', () => {
    render(
      <InputSelect options={options} disabled />,
    );
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
    const { container } = render(
      <InputSelect options={options} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with error', () => {
    const { container } = render(
      <InputSelect options={options} error />,
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot disabled', () => {
    const { container } = render(
      <InputSelect options={options} disabled />,
    );
    expect(container).toMatchSnapshot();
  });
});
