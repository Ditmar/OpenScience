import type { StoryObj, Meta } from '@storybook/react';
import ButtonVariant from './ButtonWithVariants';

const meta = {
  title: 'ui/components/atoms/button-with-variants',
  component: ButtonVariant,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
  },
} as Meta<typeof ButtonVariant>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'ABRIR IMAGEN',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'ABRIR IMAGEN',
    color: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'ABRIR IMAGEN',
    color: 'tertiary',
  },
};
