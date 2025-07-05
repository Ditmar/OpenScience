import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HintText from './HintText';

describe('HintText component', () => {
  it('renders with default props', () => {
    render(<HintText text="Test hint" />);
    expect(screen.getByText('Test hint')).toBeInTheDocument();
    expect(screen.getByTestId('hint-icon-left')).toBeInTheDocument();
    expect(screen.getByTestId('hint-icon-right')).toBeInTheDocument();
  });

  it('applies small size styles', () => {
    render(<HintText text="Small hint" size="small" />);
    const leftIcon = screen.getByTestId('hint-icon-left');
    const rightIcon = screen.getByTestId('hint-icon-right');
    const leftStyles = window.getComputedStyle(leftIcon);
    const rightStyles = window.getComputedStyle(rightIcon);
    expect(leftStyles.fontSize).toBe('18px');
    expect(rightStyles.fontSize).toBe('18px');

    const text = screen.getByText('Small hint');
    const textStyles = window.getComputedStyle(text);
    expect(textStyles.fontSize).toBe('0.875rem');
    expect(textStyles.marginLeft).toBe('8px');
  });

  it('applies large size styles', () => {
    render(<HintText text="Large hint" size="large" />);
    const leftIcon = screen.getByTestId('hint-icon-left');
    const rightIcon = screen.getByTestId('hint-icon-right');
    const leftStyles = window.getComputedStyle(leftIcon);
    const rightStyles = window.getComputedStyle(rightIcon);
    expect(leftStyles.fontSize).toBe('22px');
    expect(rightStyles.fontSize).toBe('22px');

    const text = screen.getByText('Large hint');
    const textStyles = window.getComputedStyle(text);
    expect(textStyles.fontSize).toBe('1.125rem');
    expect(textStyles.marginLeft).toBe('16px');
  });

  it('renders in disabled state', () => {
    render(<HintText text="Disabled hint" disabled />);
    const container = screen.getByTestId('hint-text');
    expect(container).toHaveStyle({ opacity: '0.4' });
  });

  it('supports custom className', () => {
    render(<HintText text="With class" className="custom-class" />);
    const container = screen.getByTestId('hint-text');
    expect(container.className).toMatch(/custom-class/);
  });
});
