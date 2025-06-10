import { render, screen } from '@testing-library/react';
import TextTitle from './TextTitle';

describe('TextTitle', () => {
  it('renders the provided text inside an h1', () => {
    render(<TextTitle text="Sample Heading" />);
    const heading = screen.getByRole('heading', { name: 'Sample Heading' });
    expect(heading).toBeTruthy();
    expect(heading.nodeName).toBe('H1');
  });

  it('applies default classNames when no style props are given', () => {
    render(<TextTitle text="Default Classes" />);
    const heading = screen.getByRole('heading', { name: 'Default Classes' });
    expect(heading.className).toContain('lg');
    expect(heading.className).toContain('regular');
    expect(heading.className).toContain('default');
  });

  it('applies "medium" class when weight is medium', () => {
    render(<TextTitle text="Medium Weight" weight="medium" />);
    const heading = screen.getByText('Medium Weight');
    expect(heading.className).toContain('medium');
  });

  it('applies correct class for size "md"', () => {
    render(<TextTitle text="Medium Size" size="md" />);
    const heading = screen.getByText('Medium Size');
    expect(heading.className).toContain('md');
  });

  it('applies "regular" class when weight is regular', () => {
    render(<TextTitle text="Regular Weight" weight="regular" />);
    const heading = screen.getByText('Regular Weight');
    expect(heading.className).toContain('regular');
  });

  it('applies correct class for spacing "compact"', () => {
    render(<TextTitle text="Compact Spacing" spacing="compact" />);
    const heading = screen.getByText('Compact Spacing');
    expect(heading.className).toContain('compact');
  });
});

it('applies all custom style classes', () => {
  render(<TextTitle text="Custom Title" size="sm" weight="regular" spacing="default" />);
  const title = screen.getByText('Custom Title');
  expect(title.className).toMatch(/sm/);
  expect(title.className).toMatch(/regular/);
  expect(title.className).toMatch(/default/);
});
