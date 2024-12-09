import type { StoryObj, Meta } from '@storybook/react';
import BannerVolumes from './HeaderBanner';
import Rectangle12 from '../../atoms/hero-banner/__mock__/imgs/Rectangle12.png';
import LogoSvg from '../../../../assets/icons/logo.svg';

const meta: Meta<typeof BannerVolumes> = {
  title: 'ui/components/molecules/header-banner',
  component: BannerVolumes,
};

export default meta;

type Story = StoryObj<typeof BannerVolumes>;

export const Default: Story = {
  args: {
    textSearch: 'Buscar',
    backgroundImage: String(Rectangle12),
    logo: String(LogoSvg),
  },
};
