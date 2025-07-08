import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { InputSelect } from './InputSelect';

interface ICountry {
  name: string;
  code: string;
  dialCode: string;
}

const countryList: ICountry[] = [
  { code: 'ar', name: 'Argentina', dialCode: '+54' },
  { code: 'at', name: 'Austria', dialCode: '+43' },
  { code: 'bd', name: 'Bangladesh', dialCode: '+880' },
  { code: 'be', name: 'Belgium', dialCode: '+32' },
  { code: 'bo', name: 'Bolivia', dialCode: '+591' },
  { code: 'br', name: 'Brazil', dialCode: '+55' },
  { code: 'ca', name: 'Canada', dialCode: '+1' },
  { code: 'cl', name: 'Chile', dialCode: '+56' },
  { code: 'cn', name: 'China', dialCode: '+86' },
  { code: 'co', name: 'Colombia', dialCode: '+57' },
  { code: 'cr', name: 'Costa Rica', dialCode: '+506' },
  { code: 'cu', name: 'Cuba', dialCode: '+53' },
  { code: 'de', name: 'Germany', dialCode: '+49' },
  { code: 'dk', name: 'Denmark', dialCode: '+45' },
  { code: 'eg', name: 'Egypt', dialCode: '+20' },
  { code: 'pe', name: 'Peru', dialCode: '+51' },
];

describe('InputSelect Component', () => {
  it('renders disabled state', () => {
    render(<InputSelect countryList={countryList} disabled />);
    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('aria-disabled', 'true');
  });

  it('changes value on select', async () => {
    render(<InputSelect countryList={countryList} />);

    const button = screen.getByRole('combobox');
    fireEvent.mouseDown(button);

    const listbox = await screen.findByRole('listbox');

    const option = Array.from(listbox.querySelectorAll('[role="option"]')).find(
      (el) => el.textContent?.includes('Argentina'),
    );

    expect(option).toBeDefined();

    if (option) {
      fireEvent.click(option);
    }

    await waitFor(() => {
      expect(screen.getByText(/Argentina/i)).toBeInTheDocument();
    });
  });

  it('matches snapshot in empty state', () => {
    const { container } = render(<InputSelect countryList={countryList} />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with error', () => {
    const { container } = render(<InputSelect countryList={countryList} error />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot disabled', () => {
    const { container } = render(<InputSelect countryList={countryList} disabled />);
    expect(container).toMatchSnapshot();
  });

  it('renders with a custom borderRadius', () => {
    render(<InputSelect countryList={countryList} borderRadius="circle" />);
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });

  it('renders with a custom colorVariant', () => {
    render(<InputSelect countryList={countryList} colorVariant="primary" />);
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });

  it('renders with a small size', () => {
    render(<InputSelect countryList={countryList} size="small" />);
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });

  it('renders with a medium size', () => {
    render(<InputSelect countryList={countryList} size="medium" />);
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });

  it('renders with an error state and matches snapshot', () => {
    const { container } = render(<InputSelect countryList={countryList} error />);
    expect(container).toMatchSnapshot();
  });

  it('renders with a custom borderRadiusMenu and matches snapshot', () => {
    const { container } = render(
      <InputSelect countryList={countryList} borderRadiusMenu="radius" />,
    );
    expect(container).toMatchSnapshot();
  });
});
