import type { Meta, StoryObj } from '@storybook/react';
import TextContent from './TextContent';

const meta: Meta<typeof TextContent> = {
  title: 'library/component/atoms/text-content',
  component: TextContent,
};

export default meta;

type Story = StoryObj<typeof TextContent>;

const sampleText = `UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel
    tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`;

export const Small: Story = {
  args: {
    text: sampleText,
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    text: sampleText,
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    text: sampleText,
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    text: sampleText,
    size: 'xl',
  },
};
