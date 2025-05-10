import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Heading from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'ui/components/atoms/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3'],
    },
    weight: {
      control: { type: 'select' },
      options: ['regular', 'medium', 'semibold'],
    },
    style: {
      control: { type: 'select' },
      options: ['sans', 'serif', 'italic', 'monospace'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    level: 'h1',
    weight: 'regular',
    style: 'sans',
    children: 'Título Principal',
  },
};

export const Variants: Story = {
  render: () => (
    <>
      <Heading level="h1" weight="regular" style={{ fontFamily: 'sans-serif' }}>
        H1 Regular Sans
      </Heading>
      <Heading level="h2" weight="medium" style={{ fontFamily: 'serif' }}>
        H2 Medium Serif
      </Heading>
      <Heading level="h3" weight="semibold" style={{ fontStyle: 'italic' }}>
        H3 Semi-bold Italic
      </Heading>
    </>
  ),
};
