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
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: { type: 'select' },
      options: ['inherit', 'primary', 'secondary', 'action', 'disabled', 'error'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['filled', 'outlined', 'rounded', 'twoTone', 'sharp'],
    },
    sx: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<VerticalHamburgerMenuProps>;

export const Default: Story = {
  args: {
    position: 'left',
    size: 'medium',
    color: 'primary',
    variant: 'filled',
  },
};

export const RightPosition: Story = {
  args: {
    position: 'right',
    size: 'medium',
    color: 'secondary',
    variant: 'outlined',
  },
};

export const LargeSize: Story = {
  args: {
    position: 'left',
    size: 'large',
    color: 'error',
    variant: 'sharp',
  },
};

export const SmallSize: Story = {
  args: {
    position: 'left',
    size: 'small',
    color: 'action',
    variant: 'rounded',
  },
};
