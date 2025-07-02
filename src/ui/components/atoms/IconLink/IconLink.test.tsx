import React from 'react';
import { render } from '@testing-library/react';
import IconLink from './IconLink';

describe('IconLink', () => {
  it('renders without crashing', () => {
    const { container } = render(<IconLink />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('applies the correct font-size for large', () => {
    const { container } = render(<IconLink size="large" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('font-size: 40px');
  });

  it('accepts custom sx props', () => {
    const { container } = render(<IconLink sx={{ margin: '10px' }} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('margin: 10px');
  });

  it('switches variant correctly', () => {
    const { container: c1 } = render(<IconLink variant="outlined" />);
    const { container: c2 } = render(<IconLink variant="rounded" />);
    expect(c1.querySelectorAll('svg')[0]).not.toEqual(c2.querySelectorAll('svg')[0]);
  });
});
