import type { Meta, StoryObj } from '@storybook/react';
import VerticalHamburgerMenu from './VerticalHamburgerMenu';
import type { VerticalHamburgerMenuProps } from './types/IProps';

const meta: Meta<typeof VerticalHamburgerMenu> = {
  title: 'ui/components/molecules/VerticalHamburgerMenu',
  component: VerticalHamburgerMenu,
  argTypes: {
    position: {
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
    sx: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<VerticalHamburgerMenuProps>;

export const Default: Story = {
  args: {
    position: 'left',
  },
};

export const RightPosition: Story = {
  args: {
    position: 'right',
  },
};
