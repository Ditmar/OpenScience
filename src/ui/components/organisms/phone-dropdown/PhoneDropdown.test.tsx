import React from 'react';
import type { ReactNode } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, afterEach, expect } from 'vitest';

interface BoxProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
interface StyledComponentProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: unknown;
}
vi.mock('@mui/material', () => ({
  Box: ({ children, className, style }: BoxProps) => (
    <div className={className} style={style}>
      {children}
    </div>
  ),
  Collapse: ({ in: inProp, children }: { in: boolean; children?: ReactNode }) =>
    inProp ? <div data-testid="collapse">{children}</div> : null,
  ClickAwayListener: ({ children }: { children?: ReactNode }) => <div>{children}</div>,
  styled: (Component: React.ComponentType<StyledComponentProps>) => (styles: React.CSSProperties) =>
    function StyledComponent(props: StyledComponentProps) {
      // eslint-disable-next-line react/destructuring-assignment
      const mergedStyle = { ...(props.style ?? {}), ...styles };
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <Component {...props} style={mergedStyle} />;
    },
}));

interface InputPhoneProps {
  onChange: (val: string) => void;
  onCountryButtonClick: () => void;
  selectedCountry: { code: string };
  isOpen?: boolean;
  hintText?: string;
  iconText?: string;
  initialValue?: string;
}
vi.mock('../../molecules/input-phone/InputPhone', () => ({
  default: (props: InputPhoneProps) => {
    const {
      onChange,
      onCountryButtonClick,
      selectedCountry,
      hintText = 'Phone Number',
      iconText = 'Icon',
      initialValue,
    } = props;
    return (
      <div data-testid="phone-dropdown">
        <button data-testid="country-button" onClick={onCountryButtonClick}>
          Toggle Country List
        </button>
        <span data-testid="hint">{hintText}</span>
        <span data-testid="iconText">{iconText}</span>
        <input
          placeholder="Phone"
          defaultValue={initialValue}
          onChange={(e) => {
            onChange(e.target.value.replace(/\D/g, ''));
          }}
        />
        <span data-testid="country-code">{selectedCountry.code}</span>
      </div>
    );
  },
}));

interface Country {
  code: string;
  name: string;
  dialCode: string;
  src: string;
}
interface CountryListProps {
  countries: Country[];
  onCountrySelect: (c: Country) => void;
}
vi.mock('../../molecules/country-list/CountryList', () => ({
  CountryList: ({ countries, onCountrySelect }: CountryListProps) => (
    <div data-testid="country-list">
      {countries.map((c) => (
        <button
          key={c.code}
          onClick={() => {
            onCountrySelect(c);
          }}
        >
          {c.name}
        </button>
      ))}
    </div>
  ),
}));

vi.mock('../../atoms/icon-flag/countryMock', () => ({
  allCountries: [
    { code: 'AR', name: 'Argentina', dialCode: '54', src: '' },
    { code: 'BR', name: 'Brasil', dialCode: '55', src: '' },
  ],
}));

// eslint-disable-next-line import/first
import PhoneDropdown from './PhoneDropdown';

afterEach(() => {
  vi.clearAllMocks();
});

describe('PhoneDropdown (light)', () => {
  it('renders InputPhone with initial state CLOSED', () => {
    render(<PhoneDropdown hintText="Phone Number" />);
    const hints = screen.getAllByTestId('hint');
    expect(hints.length).toBeGreaterThan(0);
    expect(hints[0].textContent).not.toEqual('');
    expect(screen.queryByTestId('country-list')).not.toBeInTheDocument();
  });

  it('opens and closes the list on button click', () => {
    render(<PhoneDropdown />);
    const toggleButton = screen.getByTestId('country-button');
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('country-list')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.queryByTestId('country-list')).not.toBeInTheDocument();
  });

  it('calls onCountrySelect and updates selectedCountry', () => {
    const onCountrySelect = vi.fn();
    render(<PhoneDropdown onCountrySelect={onCountrySelect} />);
    const toggleButton = screen.getByTestId('country-button');
    fireEvent.click(toggleButton);
    const brazil = screen.getByText('Brasil');
    fireEvent.click(brazil);
    expect(onCountrySelect).toHaveBeenCalledWith({
      code: 'BR',
      name: 'Brasil',
      dialCode: '55',
      src: '',
    });
    expect(screen.getByTestId('country-code').textContent).toBe('BR');
  });

  it('filters digits and calls onChange when typing', () => {
    const onChange = vi.fn();
    render(<PhoneDropdown onChange={onChange} />);
    const input = screen.getByPlaceholderText('Phone');
    fireEvent.change(input, { target: { value: 'abc123!@#' } });
    expect(onChange).toHaveBeenCalledWith('123');
  });
});
