import React from 'react';
import { render, screen } from '@testing-library/react';
import VolumeBox from './VolumeBox';

describe('VolumeBox Component', () => {
  test('should render LabelDate and LabelVol', () => {
    render(
      <VolumeBox>
        <p className="labeldate" data-iso="2024-06-20">
          Junio 20. 2024{' '}
        </p>
        <p className="volumen">Vol. 1</p>
      </VolumeBox>,
    );

    const labelDate = screen.getByText(/Junio 20.*2024/);
    const labelVol = screen.getByText(/^Vol\. 1$/);

    expect(labelDate).toBeInTheDocument();
    expect(labelVol).toBeInTheDocument();
  });
});
