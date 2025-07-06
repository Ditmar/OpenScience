import type { Meta, StoryObj } from '@storybook/react';
import StartButton from './initial-button';

const meta: Meta<typeof StartButton> = {
  title: 'ui/components/atoms/initial-button',
  component: StartButton,
  args: {
    label: 'INICIAR',
  },
};

export default meta;

type Story = StoryObj<typeof StartButton>;

export const Default: Story = {
  args: {
    label: 'INICIAR',
  },
};

export const ModelOne: Story = {
  args: {
    label: 'EMPEZAR',
  },
};

export const ModelTwo: Story = {
  args: {
    label: 'INGRESAR',
    onClick: () => {},
  },
};
