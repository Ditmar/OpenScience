import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  args: {
    children: 'Sample Text',
    variant: 'body1',
    fontWeight: 'normal',
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Body1: Story = {};
export const BoldTitle: Story = {
  args: {
    variant: 'h6',
    fontWeight: 'bold',
    children: 'Bold Heading',
  },
};
export const Colored: Story = {
  args: {
    color: '#1976d2',
    children: 'Colored Text',
  },
};
