import { render, screen } from '@testing-library/react';
import SubTitle from './SubTitle';

describe('SubTitle Component', () => {
  it('renders text correctly', () => {
    render(<SubTitle text="Subtitle Text" />);
    const subtitle = screen.getByText('Subtitle Text');
    expect(subtitle).toBeInTheDocument();
    expect(subtitle.tagName).toBe('H2');
  });

  it('applies default size', () => {
    render(<SubTitle text="Default Subtitle" />);
    const subtitle = screen.getByText('Default Subtitle');
    expect(subtitle.className).toMatch(/lg/);
  });

  it('applies custom size', () => {
    render(<SubTitle text="Small Subtitle" size="sm" />);
    const subtitle = screen.getByText('Small Subtitle');
    expect(subtitle.className).toMatch(/sm/);
  });
});
