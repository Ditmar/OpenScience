import type { Meta, StoryObj } from '@storybook/react';
import NavigationMenu from './NavigationMenu';
import logoImage from '../../../../assets/icons/logo.svg'; 


const meta: Meta<typeof NavigationMenu> = {
  title: 'ui/components/molecules/NavigationMenu',
  component: NavigationMenu,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logoSrc: logoImage as string,
    logoAlt: 'Logotipo de la empresa',
    logoVariant: 'primary',
  },
};

/* export const Primary: Story = {
  args: {
    logoSrc: logoImage as string,
    logoAlt: 'Logotipo de la empresa',
    logoVariant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    logoSrc: logoImage as string,
    logoAlt: 'Logotipo de la empresa',
    logoVariant: 'secondary',
  },
}; */

