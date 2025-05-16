import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ColorPreview } from './ColorPreview';

describe('ColorPreview', () => {
  it('renders a container with color previews', () => {
    render(<ColorPreview />);

    const container = screen.getByTestId('color-preview-container');
    expect(container).toBeInTheDocument();

    const blocks = container.querySelectorAll('div');
    expect(blocks.length).toBeGreaterThan(1);
  });

  it('renders labels for color tokens', () => {
    render(<ColorPreview />);
    expect(screen.getByText(/brand\.primary\.500/i)).toBeInTheDocument();
    expect(screen.getByText(/feedback\.positive\.500/i)).toBeInTheDocument();
    expect(screen.getByText(/gradients\.lavenderBloom/i)).toBeInTheDocument();
  });
});
