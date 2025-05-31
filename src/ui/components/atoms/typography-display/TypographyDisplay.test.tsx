import React from 'react';
import { render, screen } from '@testing-library/react';
import TypographyDisplay from './TypographyDisplay';

type Size = 'display-xl' | 'display-lg';
type Weight = 'regular' | 'medium';
type FontStyle = 'sans' | 'serif' | 'mono';

describe('TypographyDisplay', () => {
  test('renders with default props', () => {
    render(<TypographyDisplay text="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test.each(['display-xl', 'display-lg'] as Size[])('applies size class %s', (size) => {
    render(<TypographyDisplay text="Test" size={size} />);
    expect(screen.getByText('Test').className).toContain(size);
  });

  test.each(['regular', 'medium'] as Weight[])('applies weight class %s', (weight) => {
    render(<TypographyDisplay text="Test" weight={weight} />);
    expect(screen.getByText('Test').className).toContain(weight);
  });

  test.each(['sans', 'serif', 'mono'] as FontStyle[])('applies fontStyle class %s', (fontStyle) => {
    render(<TypographyDisplay text="Test" fontStyle={fontStyle} />);
    expect(screen.getByText('Test').className).toContain(fontStyle);
  });

  test('applies italic class if italic is true', () => {
    render(<TypographyDisplay text="Test" italic />);
    expect(screen.getByText('Test').className).toContain('italic');
  });
});
