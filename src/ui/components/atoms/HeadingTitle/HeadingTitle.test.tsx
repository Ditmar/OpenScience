import { render, screen } from '@testing-library/react';
import HeadingTitle from './HeadingTitle';

describe('HeadingTitle Component', () => {
  test('renders correct heading level', () => {
    render(<HeadingTitle text="Editing Title version" Level="h2" />);
    const title = screen.getByRole('heading', { level: 2 });
    expect(title.textContent).toBe('Editing Title version');
  });

  test('renders h1', () => {
    render(<HeadingTitle text="Primary Heading" Level="h1" />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title.textContent).toBe('Primary Heading');
  });

  test('renders h2', () => {
    render(<HeadingTitle text="Secondary Heading" Level="h2" />);
    const header = screen.getByRole('heading', { level: 2 });
    expect(header.textContent).toBe('Secondary Heading');
  });

  test('renders h3', () => {
    render(<HeadingTitle text="Tertiary Heading" Level="h3" />);
    const title = screen.getByRole('heading', { level: 3 });
    expect(title.textContent).toBe('Tertiary Heading');
  });
});
