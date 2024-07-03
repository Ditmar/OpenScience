import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BannerVolumes from './BannerVolumes';
import dataMock from './__mock__/datamock.json';
import Rectangle12 from '../../atoms/hero-banner/__mock__/imgs/Rectangle12.png';
import LogoSvg from '../../../../assets/icons/logo.svg';

describe('YearList', () => {
  it('should render the correct text button', () => {
    render(
      <BannerVolumes
        data={dataMock.data}
        yearText="año"
        textSearch="Buscar"
        backgroundImage={String(Rectangle12)}
        logo={String(LogoSvg)}
      />,
    );

    expect(screen.getByText(/año/i)).toBeInTheDocument();
  });
});
