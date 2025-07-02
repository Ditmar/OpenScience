import React from 'react';
import { render } from '@testing-library/react';
import IconPdf from './IconPdf';

describe('IconPdf', () => {
  it('renders without crashing', () => {
    const { container } = render(<IconPdf />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('applies the correct size class', () => {
    const { container } = render(<IconPdf size="large" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('font-size: 40px');
  });

  it('applies custom sx styles', () => {
    const { container } = render(<IconPdf sx={{ marginLeft: '20px' }} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle('margin-left: 20px');
  });
});
