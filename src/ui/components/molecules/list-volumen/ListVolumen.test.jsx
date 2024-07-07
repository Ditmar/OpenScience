import React from 'react';
import { render, screen } from '@testing-library/react';
import VolumeList from './ListVolumen.tsx';

describe('VolumeList', () => {
  it('should render the volume with provided children - Vol. 1', () => {
    render(
      <VolumeList>
        <div>
          <p>Vol. 1 - Abril 15, 2023</p>
        </div>
        <div>
          <p>Part. 2 - Mayo 20, 2010</p>
        </div>
        <div>
          <p>Tome. 3 - Junio 1, 2002</p>
        </div>
      </VolumeList>,
    );

    expect(screen.getByText('Vol. 1 - Abril 15, 2023')).toBeInTheDocument();
    expect(screen.getByText('Part. 2 - Mayo 20, 2010')).toBeInTheDocument();
    expect(screen.getByText('Tome. 3 - Junio 1, 2002')).toBeInTheDocument();
  });
});
