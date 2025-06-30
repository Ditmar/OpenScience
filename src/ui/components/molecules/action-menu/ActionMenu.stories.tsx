import type { Meta, StoryObj } from '@storybook/react';
import MediaButtons from './ActionMenu'; // Asegúrate de que la ruta sea correcta

const meta: Meta<typeof MediaButtons> = {
  title: 'ui/components/molecules/action-menu',
  component: MediaButtons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
