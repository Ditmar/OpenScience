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

  test('applies correct size class: small', () => {
    const { container } = render(
      <Footer locationText="UNIPOL.EDU.BO" followUsText="RECURSOS" size="small" />,
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className.includes('footer--small')).toBeTruthy();
  });

  test('applies correct size class: large', () => {
    const { container } = render(
      <Footer locationText="UNIPOL.EDU.BO" followUsText="RECURSOS" size="large" />,
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className.includes('footer--large')).toBeTruthy();
  });

  test('matches DOM structure snapshot', () => {
    const { asFragment } = render(
      <Footer locationText="UBICANOS" followUsText="SIGUENOS EN" size="medium" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
