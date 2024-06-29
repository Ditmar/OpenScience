// VolumeBox.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import VolumeBox from './VolumeBox';
import LabelDate from '../../atoms/label-date/LabelDate';
import LabelVol from '../../atoms/label-vol/LabelVol';

describe('VolumeBox Component', () => {
  test('should render LabelDate and LabelVol with correct format', () => {
    render(
      <VolumeBox className="custom-label-date-color">
        <LabelDate date={new Date(2023, 3, 16)} />
        <span className="separator">│</span>
        <LabelVol volumen="Vol." id={1} />
        <span className="separator">│</span>
        <LabelVol volumen="Nu." id={1} />
      </VolumeBox>,
    );

    const labelDate = screen.getByText(/Abril 16. 2023/);
    const labelVol = screen.getByText(/^Vol\. 1$/);
    const labelNu = screen.getByText(/^Nu\. 1$/);

    expect(labelDate).toBeInTheDocument();
    expect(labelVol).toBeInTheDocument();
    expect(labelNu).toBeInTheDocument();
  });
});
