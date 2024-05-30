import React from 'react';
import { render, screen } from '@testing-library/react';
import LabelReferences from './LabelReferences.tsx';

describe('LabelReferences component', () => {
  it('debe renderizar el texto por defecto', () => {
    render(<LabelReferences />);
    expect(screen.getByText('Referencias')).toBeInTheDocument();
  });

  it('debe renderizar texto personalizado', () => {
    render(<LabelReferences text="Custom text Referencias" />);
    expect(screen.getByText('Custom text Referencias')).toBeInTheDocument();
  });

  it('debe ajustar el tamaño del texto de manera receptiva', () => {
    render(<LabelReferences />);
    const labelElement = screen.getByText('Referencias');
    const initialFontSize = window.getComputedStyle(labelElement).getPropertyValue('font-size');
    labelElement.style.fontSize = '20px';
    const updatedFontSize = window.getComputedStyle(labelElement).getPropertyValue('font-size');
    expect(updatedFontSize).not.toEqual(initialFontSize);
  });
});