import type { Meta, StoryObj } from '@storybook/react';
import DisplayTypography from './DisplayTypography';

const meta: Meta<typeof DisplayTypography> = {
  title: 'ui/components/atoms/display-typography',
  component: DisplayTypography,
  argTypes: {
    size: {
      control: 'select',
      options: ['display-xl', 'display-lg'],
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium'],
    },
    color: {
      control: 'select',
      options: ['dark', 'white'],
    },
    textDecoration: {
      control: 'select',
      options: ['none-line', 'underline', 'line-through'],
    },
    italic: {
      control: 'boolean',
    },
    fontStyle: {
      control: 'select',
      options: ['sans', 'serif', 'mono'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DisplayXL: Story = {
  args: {
    text: 'Display 0123',
    size: 'display-xl',
    weight: 'medium',
    color: 'dark',
    fontStyle: 'sans',
  },
};

export const DisplayLG: Story = {
  args: {
    text: 'Landing Title LG',
    size: 'display-lg',
    weight: 'regular',
    color: 'white',
    fontStyle: 'serif',
    italic: true,
  },
};
