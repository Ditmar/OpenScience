import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Location from './Location';
import facebookIcon from '../../../../assets/icons/facelocation.svg?raw';
import locationIcon from '../../../../assets/icons/location.svg?raw';

describe('Location Component', () => {
  test('renders location text and follow text', () => {
    render(
      <Location
        locationText="Ubicación"
        followUsText="Síguenos en Facebook"
        size="medium"
        icons={{ location: locationIcon, facebook: facebookIcon }}
      />,
    );

    expect(screen.getByText(/Ubicación/i)).toBeDefined();
    expect(screen.getByText(/Síguenos en Facebook/i)).toBeDefined();
  });

  test('renders at least one SVG icon', () => {
    const { container } = render(
      <Location
        locationText="Ubicación"
        followUsText="Síguenos en Facebook"
        size="medium"
        icons={{ location: locationIcon, facebook: facebookIcon }}
      />,
    );

    const icon = container.querySelector('svg');
    expect(icon).toBeDefined();
  });

  test('renders two SVG icons', () => {
    const { container } = render(
      <Location
        locationText="Ubicación"
        followUsText="Síguenos en Facebook"
        size="medium"
        icons={{ location: locationIcon, facebook: facebookIcon }}
      />,
    );

    const icons = container.querySelectorAll('svg');
    expect(icons.length).toBeGreaterThanOrEqual(2);
  });
});
