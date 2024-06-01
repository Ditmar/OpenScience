import React from 'react';
import { render, screen } from '@testing-library/react';
import LabelReferences from './LabelReferences.tsx';

describe('LabelReferences component', () => {
<<<<<<< HEAD
  it('Should be rendered the default text', () => {
=======
  it('should be rendered the default text', () => {
>>>>>>> 462ad1433154561492121f5d5b9f6b2ed8c86c53
    render(<LabelReferences />);
    expect(screen.getByText('Referencias')).toBeInTheDocument();
  });

<<<<<<< HEAD
  it('Should render the custom text.', () => {
=======
  it('should render the custom text.', () => {
>>>>>>> 462ad1433154561492121f5d5b9f6b2ed8c86c53
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
