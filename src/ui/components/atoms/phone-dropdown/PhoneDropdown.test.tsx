import { render, screen, fireEvent } from '@testing-library/react';
import { PhoneDropdown } from './PhoneDropdown';
import type { ICountry } from './types/IProps';
import '@testing-library/jest-dom';
import styles from './PhoneDropdown.module.scss';

const countries: ICountry[] = [
  { code: 'AR', name: 'Argentina', flag: '🇦🇷', dialCode: '+54' },
  { code: 'AL', name: 'Albania', flag: '🇦🇱', dialCode: '+355' },
  { code: 'DZ', name: 'Algeria', flag: '🇩🇿', dialCode: '+213' },
  { code: 'AD', name: 'Andorra', flag: '🇦🇩', dialCode: '+376' },
];

describe('PhoneDropdown Component', () => {
  it('should render the label and placeholder correctly', () => {
    render(<PhoneDropdown label="Phone" placeholder="Enter phone number" countries={countries} />);
    expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter phone number')).toBeInTheDocument();
  });

  it('should update selected country and phone number on interaction', () => {
    const mockOnChangeCalls: [string, string][] = [];
    const mockOnChange = (dialCode: string, phone: string) => {
      mockOnChangeCalls.push([dialCode, phone]);
    };

    render(<PhoneDropdown onChange={mockOnChange} countries={countries} />);

    fireEvent.click(screen.getByRole('button'));

    fireEvent.click(screen.getByText('Albania (+355)'));

    expect(mockOnChangeCalls).toContainEqual(['+355', '']);

    fireEvent.change(screen.getByPlaceholderText('Phone Number'), {
      target: { value: '123456789' },
    });

    expect(mockOnChangeCalls).toContainEqual(['+355', '123456789']);
  });

  it('should display error state', () => {
    render(<PhoneDropdown error helperText="Invalid phone number" countries={countries} />);
    expect(screen.getByText('Invalid phone number')).toBeInTheDocument();
    expect(screen.getByRole('button').classList).toContain(styles.error);
  });

  it('should render disabled state', () => {
    render(<PhoneDropdown disabled countries={countries} />);
    expect(screen.getByRole('button').classList).toContain(styles.disabled);
    expect(screen.getByPlaceholderText('Phone Number')).toBeDisabled();
  });

  it('should apply the correct size class', () => {
    const { container } = render(<PhoneDropdown size="large" countries={countries} />);
    expect(container.firstChild).toHaveClass(styles.large);
  });

  it('should select the default country correctly', () => {
    render(<PhoneDropdown defaultCountry="AR" countries={countries} />);
    expect(screen.getByText('🇦🇷')).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes('+54'))).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(<PhoneDropdown className="custom-class" countries={countries} />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
