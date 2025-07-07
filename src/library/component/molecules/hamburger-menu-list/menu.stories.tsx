import type { Meta, StoryObj } from '@storybook/react';
import HamburgerMenuList from './menu';

const meta: Meta<typeof HamburgerMenuList> = {
  title: 'library/component/molecules/HamburgerMenuList',
  component: HamburgerMenuList,
};

export default meta;
type Story = StoryObj<typeof HamburgerMenuList>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Continent', href: '/continent' },
      { label: 'Mpox', href: '/mpox' },
      { label: 'Reservoir', href: '/reservoir' },
    ],
    onItemClick: (label) => {
      alert(`You clicked on: ${label}`);
    },
  },
};
