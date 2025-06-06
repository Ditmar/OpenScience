import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InputLabel } from './InputLabel';

describe('InputLabel Component', () => {
  it('renders correctly with default props', () => {
    render(<InputLabel>Test Label</InputLabel>);
    const label = screen.getByText('Test Label');
    expect(label).toBeInTheDocument();
    expect(label.tagName).toBe('LABEL');
    expect(label).toHaveClass('MuiTypography-subtitle2');
  });

  it('applies htmlFor attribute when provided', () => {
    render(<InputLabel htmlFor="test-input">Test Label</InputLabel>);
    const label = screen.getByText('Test Label');
    expect(label).toHaveAttribute('for', 'test-input');
  });

  it('matches snapshot with default props', () => {
    const { asFragment } = render(<InputLabel>Test Label</InputLabel>);
    expect(asFragment()).toMatchSnapshot();
  });
});
