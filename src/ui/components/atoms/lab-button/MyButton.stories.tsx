// MyButton.stories.tsx
import { MyButton } from './MyButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MyButton> = {
  title: 'Atoms/LabButton',
  component: MyButton,
};

export default meta;

export const Default: StoryObj<typeof MyButton> = {
  args: {
    label: 'Botón Primario',
  },
};
