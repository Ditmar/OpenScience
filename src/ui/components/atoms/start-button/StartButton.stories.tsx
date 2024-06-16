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
  },
} as Meta<typeof StartButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'INICIAR ',
    varianButton: 'primary',
    icon: Vector,
  },
};

export const Secondary: Story = {
  args: {
    children: 'INICIAR',
    varianButton: 'secundary',
  },
};

export const tertiary: Story = {
  args: {
    children: ' INICIAR',
    varianButton: 'tertiary',
  },
};
