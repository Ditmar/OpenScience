import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Footer from './Footer';

describe('Footer component', () => {
  test('renders static content', () => {
    render(<Footer locationText="UNIPOL.EDU.BO" followUsText="RECURSOS" />);
    expect(screen.getByText('ARTÍCULOS')).toBeDefined();
    expect(screen.getByText('VOLUMENES')).toBeDefined();
    expect(screen.getByText('PÁGINA')).toBeDefined();
  });

  test('renders at least two SVG icon containers (Location)', () => {
    const { container } = render(<Footer locationText="UNIPOL.EDU.BO" followUsText="RECURSOS" />);
    const icons = container.querySelectorAll('span[aria-hidden="true"]');
    expect(icons.length).toBeGreaterThanOrEqual(2);
  });
});
