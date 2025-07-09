import { render, screen } from '@testing-library/react';
import React from 'react';

import VolumeList from './VolumeList';
import type { VolumeItem } from './types/IProps';

const MOCKED_VOLUMES: VolumeItem[] = [
  {
    uuid: '1',
    pathImage: 'test-path-1.jpg',
    alt: 'Alt text for volume 1',
    date: new Date('2023-01-01T00:00:00'),
    volumen: 'Vol.',
    id: 1,
  },
  {
    uuid: '2',
    pathImage: 'test-path-2.jpg',
    alt: 'Alt text for volume 2',
    date: new Date('2023-02-02T00:00:00'),
    volumen: 'Vol.',
    id: 2,
  },
];

describe('VolumeList', () => {
  it('should render the title correctly', () => {
    render(<VolumeList title="PRUEBA DE TÍTULO" volumes={MOCKED_VOLUMES} />);
    expect(screen.getByText('PRUEBA DE TÍTULO')).toBeInTheDocument();
  });

  it('should render the correct number of volume items', () => {
    render(<VolumeList title="Volúmenes" volumes={MOCKED_VOLUMES} />);
    const volumeItems = screen.getAllByAltText(/Alt text for volume/i);
    expect(volumeItems).toHaveLength(MOCKED_VOLUMES.length);
  });

  it('should not render the grid when volumes array is empty', () => {
    render(<VolumeList title="Volúmenes Vacíos" volumes={[]} />);
    expect(screen.getByText('Volúmenes Vacíos')).toBeInTheDocument();
    expect(screen.queryByRole('grid')).not.toBeInTheDocument();
  });
});
