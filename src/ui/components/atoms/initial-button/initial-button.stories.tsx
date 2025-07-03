import type { Meta, StoryObj } from '@storybook/react';
import StartButton from './initial-button';
import type InitialButton from './initial-button';

const meta: Meta<typeof InitialButton> = {
  title: 'ui/components/atoms/initial-button',
  component: StartButton,
  args: {
    label: 'INICIAR',
  },
};

export default meta;

type Story = StoryObj<typeof InitialButton>;

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

export const ModelThwo: Story = {
  args: {
    label: 'INGRESAR',
    onClick: () => {},
  },
};
