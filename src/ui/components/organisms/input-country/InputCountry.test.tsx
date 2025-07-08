import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import type { ICountry } from 'ui/components/atoms/country-list/interfaces/Country.interface';
import { InputCountry } from './InputCountry';

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

describe('InputCountry Component', () => {
  it('renders with label', () => {
    render(<InputCountry label="Select Country" helperText="hint" countryList={countryList} />);
    expect(screen.getByText('Select Country')).toBeInTheDocument();
  });

  it('renders with helperText and error', () => {
    render(
      <InputCountry
        label="Select Country"
        countryList={countryList}
        error
        helperText="Error text"
      />,
    );
    expect(screen.getByText('Error text')).toBeInTheDocument();
  });

  it('renders disabled state', () => {
    render(
      <InputCountry
        label="Select Country"
        countryList={countryList}
        helperText="Hint Text"
        disabled
      />,
    );
    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('aria-disabled', 'true');
  });

  it('changes value on select', async () => {
    render(<InputCountry countryList={countryList} />);

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
    const { container } = render(
      <InputCountry label="Country" countryList={countryList} helperText="Hint Text" />,
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with error', () => {
    const { container } = render(
      <InputCountry label="Country" countryList={countryList} error helperText="Hint Text" />,
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot disabled', () => {
    const { container } = render(
      <InputCountry label="Country" countryList={countryList} helperText="Hint Text" disabled />,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders with custom borderRadius', () => {
    render(<InputCountry label="Select Country" countryList={countryList} borderRadius="circle" />);
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });

  it('renders with custom colorVariant', () => {
    render(
      <InputCountry label="Select Country" countryList={countryList} colorVariant="primary" />,
    );
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });

  it('renders with small size', () => {
    render(<InputCountry label="Select Country" countryList={countryList} size="small" />);
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });

  it('renders with medium size', () => {
    render(<InputCountry label="Select Country" countryList={countryList} size="medium" />);
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });

  it('renders with custom borderRadiusMenu and matches snapshot', () => {
    const { container } = render(
      <InputCountry label="Select Country" countryList={countryList} borderRadiusMenu="radius" />,
    );
    expect(container).toMatchSnapshot();
  });
});
