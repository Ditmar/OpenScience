import type { StoryObj } from '@storybook/react';
import HintText from './HintText';

const meta = {
  title: 'ui/Components/Atoms/HintText',
  component: HintText,
  argTypes: {
    text: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    text: 'Hint Text',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    text: 'Hint Text',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    text: 'Hint Text',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Hint Text',
    size: 'medium',
    disabled: true,
  },
};
