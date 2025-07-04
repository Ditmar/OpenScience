import React from 'react';
import { render } from '@testing-library/react';
import IconImage from './IconImage';

describe('IconImage Component', () => {
  it('should render with transparent background by default', () => {
    const { container } = render(<IconImage />);
    const box = container.firstChild as HTMLElement;

    expect(box).toHaveStyle('width: 56px');
    expect(box).toHaveStyle('height: 56px');
    expect(box).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    expect(box).toHaveStyle('display: flex');
  });

  it('should render with blue background when specified', () => {
    const { container } = render(<IconImage background="blue" />);
    const box = container.firstChild as HTMLElement;
    expect(box).toHaveStyle('background-color: #0793BF');
  });

  it('should render the SVG icon with correct dimensions', () => {
    const { container } = render(<IconImage />);
    const img = container.querySelector('img');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', 'Media icon');
    expect(img).toHaveStyle('width: 40px');
    expect(img).toHaveStyle('height: 23px');
  });

  it('should accept className prop', () => {
    const { container } = render(<IconImage className="test-class" />);
    const box = container.firstChild as HTMLElement;
    expect(box).toHaveClass('test-class');
  });
});
