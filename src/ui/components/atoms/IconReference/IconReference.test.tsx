import React from 'react';
import { render } from '@testing-library/react';
import IconReference from './IconReference';

describe('IconReference', () => {
  it('renders without crashing', () => {
    const { container } = render(<IconReference />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('applies the correct font-size for large', () => {
    const { container } = render(<IconReference size="large" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('font-size: 40px');
  });

  it('accepts custom sx props', () => {
    const { container } = render(<IconReference sx={{ margin: '12px' }} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('margin: 12px');
  });

  it('renders a text node "R" inside the SVG', () => {
    const { getByText } = render(<IconReference />);
    expect(getByText('R')).toBeInTheDocument();
  });
});
