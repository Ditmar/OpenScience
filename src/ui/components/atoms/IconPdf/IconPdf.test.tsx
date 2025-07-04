import React from 'react';
import { render } from '@testing-library/react';
import IconPdf from './IconPdf';

describe('IconPdf Component', () => {
  it('should render with transparent background by default', () => {
    const { container } = render(<IconPdf />);
    const box = container.firstChild as HTMLElement;

    expect(box).toHaveStyle('width: 56px');
    expect(box).toHaveStyle('height: 56px');
    expect(box).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    expect(box).toHaveStyle('display: flex');
  });

  it('should render with blue background when specified', () => {
    const { container } = render(<IconPdf background="blue" />);
    const box = container.firstChild as HTMLElement;
    expect(box).toHaveStyle('background-color: #0793BF');
  });

  it('should render the SVG icon with correct dimensions', () => {
    const { container } = render(<IconPdf />);
    const img = container.querySelector('img');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', 'Share icon');
    expect(img).toHaveStyle('width: 32px');
    expect(img).toHaveStyle('height: 35px');
  });

  it('should accept className prop', () => {
    const { container } = render(<IconPdf className="test-class" />);
    const box = container.firstChild as HTMLElement;
    expect(box).toHaveClass('test-class');
  });
});
