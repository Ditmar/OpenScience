import React from 'react';
import { render, screen } from '@testing-library/react';
import LabelReferences from './LabelReferences.tsx';

describe('LabelReferences component', () => {
  it('should be rendered the default text', () => {
    render(<LabelReferences />);
    expect(screen.getByText('Referencias')).toBeInTheDocument();
  });

  it('should render the custom text.', () => {
    render(<LabelReferences text="Custom text Referencias" />);
    expect(screen.getByText('Custom text Referencias')).toBeInTheDocument();
  });

  it('Should adjust text size responsively.', () => {
    render(<LabelReferences />);
    const labelElement = screen.getByText('Referencias');
    const initialFontSize = window.getComputedStyle(labelElement).getPropertyValue('font-size');
    labelElement.style.fontSize = '20px';
    const updatedFontSize = window.getComputedStyle(labelElement).getPropertyValue('font-size');
    expect(updatedFontSize).not.toEqual(initialFontSize);
  });
});
