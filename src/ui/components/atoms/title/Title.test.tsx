import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Title Component', () => {
  it('renders text correctly', () => {
    render(<Title text="Main Title" />);
    const title = screen.getByText('Main Title');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H1');
  });

  it('applies default styles', () => {
    render(<Title text="Default Styled Title" />);
    const title = screen.getByText('Default Styled Title');
    expect(title.className).toMatch(/lg/);
    expect(title.className).toMatch(/regular/);
    expect(title.className).toMatch(/default/);
  });

  it('applies custom styles', () => {
    render(<Title text="Custom Title" size="sm" weight="regular" spacing="default" />);
    const title = screen.getByText('Custom Title');
    expect(title.className).toMatch(/sm/);
    expect(title.className).toMatch(/regular/);
    expect(title.className).toMatch(/default/);
  });
});
