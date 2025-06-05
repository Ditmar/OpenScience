// Text.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    bold: {
      control: 'radio',
      options: ['regular', 'bold'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    text: 'Texto por defecto',
    size: 'medium',
    bold: 'regular',
  },
};

export const BoldLarge: Story = {
  args: {
    text: 'Texto grande y en negrita',
    size: 'large',
    bold: 'bold',
  },
};

export const Small: Story = {
  args: {
    text: 'Texto pequeño',
    size: 'small',
    bold: 'regular',
  },
};
