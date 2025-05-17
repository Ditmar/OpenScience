import type { Meta, StoryObj } from '@storybook/react';
import HeadingTitle from './HeadingTitle';
import type { IProps } from './types/IProps';

const meta: Meta<IProps> = {
  title: 'ui/components/atoms/HeadingTitle',
  component: HeadingTitle,
  argTypes: {
    Level: {
      control: 'select',
      options: ['h1', 'h2', 'h3'],
    },
    Weight: {
      control: 'select',
      options: ['regular', 'medium', 'semi-bold'],
    },
    Styles: {
      control: 'select',
      options: ['sans', 'serif', 'italic', 'monospace'],
    },
  },
};

export default meta;

type Story = StoryObj<IProps>;

export const Weight: Story = {
  args: {
    Weight: 'semi-bold',
    Level: 'h1',
    Styles: 'monospace',
  },
  render: (args) => (
    <HeadingTitle
      text={`heading-${args.Level ?? 'h1'}`}
      Weight={args.Weight}
      Level={args.Level}
      Styles={args.Styles}
    />
  ),
};

export const Style: Story = {
  args: {
    Styles: 'sans',
    Level: 'h2',
    Weight: 'medium',
    text: 'Editing headings',
  },
};
