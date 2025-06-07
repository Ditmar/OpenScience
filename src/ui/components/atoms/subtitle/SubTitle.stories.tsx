import type { Meta, StoryObj } from '@storybook/react';
import SubTitle from './SubTitle';

const meta: Meta<typeof SubTitle> = {
  title: 'ui/components/atoms/subtitle',
  component: SubTitle,
};

export default meta;

type Story = StoryObj<typeof SubTitle>;

export const Small: Story = {
  args: {
    text: `I is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel 
    tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    text: `I is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel 
    tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    text: `I is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel 
    tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    text: `I is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel 
    tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    size: 'xl',
  },
};

export const ExtraExtraLarge: Story = {
  args: {
    text: `I is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel 
    tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    size: 'xxl',
  },
};
