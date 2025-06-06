import { render, screen } from '@testing-library/react';
import TextContent from './TextContent';

describe('TextContent', () => {
  it('displays the received text in an h2', () => {
    render(<TextContent text="test text" />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('test text');
  });

  it('uses the default class when no size is specified', () => {
    render(<TextContent text="Default class" />);
    const heading = screen.getByText('Default class');
    expect(heading.className).toContain('lg');
  });

  it('adds the class corresponding to the received size', () => {
    render(<TextContent text="small size" size="sm" />);
    const heading = screen.getByText('small size');
    expect(heading.className).toContain('sm');
  });
});
