import type { Meta, StoryObj } from '@storybook/react';
import TypographyParagraph from './TypographyParagraph';

const meta = {
  title: 'ui/components/atoms/typography-paragraph',
  component: TypographyParagraph,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['extra-small', 'small', 'medium-size', 'large', 'extra-large'],
      },
    },
    weight: {
      control: {
        type: 'select',
        options: ['light', 'regular', 'medium', 'semi-bold', 'bold'],
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
    style: {
      control: {
        type: 'select',
        options: ['straight', 'italic'],
      },
    },
  },
} as Meta<typeof TypographyParagraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const paragraph: Story = {
  args: {
    text: 'Display Text - 0123456789',
    size: 'extra-small',
    weight: 'light',
    color: 'dark',
    textDecoration: 'none-line',
    italic: false,
  },
};
