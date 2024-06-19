import type { Meta, StoryObj } from '@storybook/react';
import ButtonVariant from './ButtonWithVariants';

const meta: Meta<typeof ButtonVariant> = {
  title: 'ui/components/atoms/button-with-variants',
  component: ButtonVariant,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonVariant>;

export const Primary: Story = {
  args: {
    children: 'ABRIR IMAGEN',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'ABRIR IMAGEN',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'ABRIR IMAGEN',
    variant: 'tertiary',
  },
};
