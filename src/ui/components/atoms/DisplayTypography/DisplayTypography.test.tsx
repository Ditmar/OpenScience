import React from 'react';
import { render, screen } from '@testing-library/react';
import DisplayTypography from './DisplayTypography';

type Size = 'display-xl' | 'display-lg';
type Weight = 'regular' | 'medium';
type FontStyle = 'sans' | 'serif' | 'mono';

describe('DisplayTypography', () => {
  test('renders with default props', () => {
    render(<DisplayTypography text="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test.each(['display-xl', 'display-lg'] as Size[])('applies size class %s', (size) => {
    render(<DisplayTypography text="Test" size={size} />);
    expect(screen.getByText('Test').className).toContain(size);
  });

  test.each(['regular', 'medium'] as Weight[])('applies weight class %s', (weight) => {
    render(<DisplayTypography text="Test" weight={weight} />);
    expect(screen.getByText('Test').className).toContain(weight);
  });

  test.each(['sans', 'serif', 'mono'] as FontStyle[])('applies fontStyle class %s', (fontStyle) => {
    render(<DisplayTypography text="Test" fontStyle={fontStyle} />);
    expect(screen.getByText('Test').className).toContain(fontStyle);
  });

  test('applies italic class if italic is true', () => {
    render(<DisplayTypography text="Test" italic />);
    expect(screen.getByText('Test').className).toContain('italic');
  });
});
