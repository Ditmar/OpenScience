import type { Meta, StoryObj } from '@storybook/react';
import ButtonInit from './ButtonInit';
import '../../../../globals/_variables.scss';

const meta: Meta<typeof ButtonInit> = {
  title: 'ui/components/atoms/button-init',
  component: ButtonInit,
};

export default meta;

type Story = StoryObj<typeof ButtonInit>;

export const Primary: Story = {
  args: {
    children: 'INICIAR',
    varian_Button: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'INICIAR',
    varian_Button: 'secundary',
  },
};
