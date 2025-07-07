import type { Meta, StoryObj } from '@storybook/react';
import HamburgerMenu from './hamburger-menu';

type Story = StoryObj<typeof HamburgerMenu>;

const meta: Meta<typeof HamburgerMenu> = {
  title: 'library/component/organisms/HamburgerMenu',
  component: HamburgerMenu,
};

export default meta;

export const Default: Story = {
  args: {
    menuItems: [
      { label: 'Continent', href: '/continent' },
      { label: 'Mpox', href: '/mpox' },
      { label: 'reservoir', href: '/reservoir' },
    ],
  },
};
