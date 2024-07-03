import type { StoryObj, Meta } from '@storybook/react';
import BannerVolumes from './BannerVolumes';
import dataMock from './__mock__/datamock.json';
import Rectangle12 from '../../atoms/hero-banner/__mock__/imgs/Rectangle12.png';
import LogoSvg from '../../../../assets/icons/logo.svg';

const meta: Meta<typeof BannerVolumes> = {
  title: 'ui/components/molecules/banner-volumes',
  component: BannerVolumes,
};

export default meta;

type Story = StoryObj<typeof BannerVolumes>;

export const Default: Story = {
  args: {
    data: dataMock.data,
    textSearch: 'Buscar',
    yearText: 'año',
    backgroundImage: String(Rectangle12),
    logo: String(LogoSvg),
  },
};
