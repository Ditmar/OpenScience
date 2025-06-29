import React from 'react';
import { render, screen } from '@testing-library/react';
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
    expect(leftIcon.getAttribute('class')).toMatch(/hint-text__icon--small/);
    expect(rightIcon.getAttribute('class')).toMatch(/hint-text__icon--small/);
  });

  it('applies large size styles', () => {
    render(<HintText text="Large hint" size="large" />);
    const leftIcon = screen.getByTestId('hint-icon-left');
    const rightIcon = screen.getByTestId('hint-icon-right');
    expect(leftIcon.getAttribute('class')).toMatch(/hint-text__icon--large/);
    expect(rightIcon.getAttribute('class')).toMatch(/hint-text__icon--large/);
  });

  it('renders in disabled state', () => {
    render(<HintText text="Disabled hint" disabled />);
    const container = screen.getByTestId('hint-text');
    expect(container.getAttribute('class')).toMatch(/hint-text--disabled/);
  });

  it('supports custom className', () => {
    render(<HintText text="With class" className="custom-class" />);
    const container = screen.getByTestId('hint-text');
    expect(container.getAttribute('class')).toMatch(/custom-class/);
  });
});
