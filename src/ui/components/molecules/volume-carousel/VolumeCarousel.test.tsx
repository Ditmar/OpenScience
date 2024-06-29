import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import VolumeCarousel from './VolumeCarousel';

describe('VolumeCarousel', () => {
  it('should render the carousel with volumes', () => {
    render(
      <VolumeCarousel>
        <div>
          <p>Vol. 1 - Abril 15, 2023</p>
        </div>
        <div>
          <p>Vol. 2 - Julio 9, 2023</p>
        </div>
        <div>
          <p>Vol. 3 - Marzo 7, 2024</p>
        </div>
        <div>
          <p>Vol. 4 - Junio 23, 2024</p>
        </div>
      </VolumeCarousel>,
    );

    expect(screen.getByText('Vol. 1 - Abril 15, 2023')).toBeInTheDocument();
    expect(screen.getByText('Vol. 2 - Julio 9, 2023')).toBeInTheDocument();
    expect(screen.getByText('Vol. 3 - Marzo 7, 2024')).toBeInTheDocument();
    expect(screen.getByText('Vol. 4 - Junio 23, 2024')).toBeInTheDocument();
  });
});
