import type { StoryObj, Meta } from '@storybook/react';
import ButtonWithVariants from './ButtonWithVariants';

const meta = {
  title: 'ui/components/atoms/button-with-variants',
  component: ButtonWithVariants,
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
} as Meta<typeof ButtonWithVariants>;

export default meta;

type Story = StoryObj<typeof meta>;

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
