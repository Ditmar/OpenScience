import React from 'react';
import { render, screen } from '@testing-library/react';
import PhoneNumber from './IconPhone';

describe('PhoneNumber component', () => {
  test('renders phone icon and default text', () => {
    render(<PhoneNumber />);

    const icon = screen.getByTestId('phone-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src');
    expect(icon).toHaveAttribute('alt', 'phone icon');

    expect(screen.getByText('Phone Number')).toBeInTheDocument();
  });

  test('renders with custom classes and icon', () => {
    render(
      <PhoneNumber
        text="Emergency Contact"
        fontSizeClass="font-size-14"
        colorClass="color-gray"
        fontWeightClass="font-weight-300"
      />,
    );

    const textElement = screen.getByText('Emergency Contact');
    expect(textElement).toBeInTheDocument();
    expect(textElement.className).toMatch(/font-size-14/);
    expect(textElement.className).toMatch(/color-gray/);
    expect(textElement.className).toMatch(/font-weight-300/);

    const icon = screen.getByTestId('phone-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src');
    expect(icon).toHaveAttribute('alt', 'phone icon');
  });
});
