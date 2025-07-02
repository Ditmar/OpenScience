import React from 'react';
import { render } from '@testing-library/react';
import IconImage from './IconImage';

describe('IconImage', () => {
  it('renders without crashing', () => {
    const { container } = render(<IconImage />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('applies the correct font-size for large', () => {
    const { container } = render(<IconImage size="large" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('font-size: 40px');
  });

  it('accepts custom sx props', () => {
    const { container } = render(<IconImage sx={{ padding: '8px' }} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('padding: 8px');
  });

  it('switches variant correctly', () => {
    const { container: c1 } = render(<IconImage variant="outlined" />);
    const { container: c2 } = render(<IconImage variant="rounded" />);
    expect(c1.querySelector('svg')).not.toEqual(c2.querySelector('svg'));
  });
});
