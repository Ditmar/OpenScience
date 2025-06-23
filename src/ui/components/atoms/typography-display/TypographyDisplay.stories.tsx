import type { Meta, StoryObj } from '@storybook/react';
import TypographyDisplay from './TypographyDisplay';

const meta = {
  title: 'ui/components/atoms/typography-display',
  component: TypographyDisplay,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['display-xl', 'display-lg'],
      },
    },
    weight: {
      control: {
        type: 'select',
        options: ['regular', 'medium'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['dark', 'white'],
      },
    },
    textDecoration: {
      control: {
        type: 'select',
        options: ['none-line', 'underline', 'line-through'],
      },
    },
    italic: {
      control: {
        type: 'boolean',
      },
    },
    fontStyle: {
      control: {
        type: 'select',
        options: ['sans', 'serif', 'mono'],
      },
    },
  },
} as Meta<typeof TypographyDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const display: Story = {
  args: {
    text: 'Display 0123',
    size: 'display-xl',
    weight: 'medium',
    color: 'dark',
    fontStyle: 'sans',
  },
};
