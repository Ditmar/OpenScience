import type { StoryObj, Meta } from '@storybook/react';
import BannerNavbar from './bannerNavbar';
import LogoSvg from '../../../../assets/icons/logo.svg';

const meta: Meta<typeof BannerNavbar> = {
  title: 'ui/components/molecules/bannerNavbar',
  component: BannerNavbar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onSearchSubmit: { action: 'searched' },
  },
};

export default meta;

type Story = StoryObj<typeof BannerNavbar>;

export const Default: Story = {
  args: {
    textSearch: 'Buscar',
    logo: String(LogoSvg),
  },
};
