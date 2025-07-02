import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { MenuMedia } from './MenuMedia';

describe('MenuMedia', () => {
  it('renders and switches tabs', () => {
    render(<MenuMedia imageSrc="image.jpg" imageAlt="Alt text" />);
    expect(screen.getByText('Figura')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Tabla'));
    expect(screen.getByText(/Table data/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText('Otros'));
    expect(screen.getByText(/Additional data/i)).toBeInTheDocument();
  });

  it('calls onOpenImage when button is clicked', () => {
    const mockFn = vi.fn();
    render(<MenuMedia imageSrc="image.jpg" imageAlt="Alt text" onOpenImage={mockFn} />);
    fireEvent.click(screen.getByText('ABRIR IMAGEN'));
    expect(mockFn).toHaveBeenCalled();
  });

  it('renders correctly with imageSrc as object', () => {
    const mockImageSrc = { src: 'image.jpg' };
    render(<MenuMedia imageSrc={mockImageSrc} imageAlt="Alt text" />);
    expect(screen.getByText('Figura')).toBeInTheDocument();
  });
});
