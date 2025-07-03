import type { Meta, StoryObj } from '@storybook/react';
import HamburgerButton from './hamburger-button';

const meta: Meta<typeof HamburgerButton> = {
  title: 'library/component/atoms/HamburgerButton',
  component: HamburgerButton,
  argTypes: {
    isOpen: {
      control: 'boolean',
      defaultValue: false,
      description: 'Indicates whether the menu is open',
    },
    ariaLabel: {
      control: 'text',
      defaultValue: 'Open menu',
      description: 'Label for accessibility',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof HamburgerButton>;

export const Default: Story = {
  args: {
    isOpen: false,
    ariaLabel: 'Open menu',
  },
};

export const Opened: Story = {
  args: {
    isOpen: true,
    ariaLabel: 'Close menu',
  },
};
