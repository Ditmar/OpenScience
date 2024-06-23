import type { Meta, StoryObj } from '@storybook/react';
import StartButton from './StartButton';
import '../../../../globals/_variables.scss';
import Vector from '../../../../assets/icons/vector.svg?raw';

const meta = {
  title: 'ui/components/atoms/start-button',
  component: StartButton,
  argTypes: {
    onClick: {
      action: 'click',
    },

    variantButton: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
} as Meta<typeof StartButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'INICIAR ',
    variant: 'primary',
    icon: Vector,
  },
};

export const Secondary: Story = {
  args: {
    children: 'INICIAR',
    variant: 'secondary',
    icon: null,
  },
};

export const Tertiary: Story = {
  args: {
    children: 'INICIAR',
    variant: 'tertiary',
    icon: null,
  },
};
