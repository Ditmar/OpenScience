import type { Meta, StoryObj } from '@storybook/react';
import DisplayAndSubtitle from './DisplayAndSubTitle';

const meta: Meta<typeof DisplayAndSubtitle> = {
  title: 'library/component/molecules/display-and-sub-title',
  component: DisplayAndSubtitle,
};

export default meta;

type Story = StoryObj<typeof DisplayAndSubtitle>;

export const Default: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    subtitle: `I is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel 
    tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
  },
};

export const Small: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    subtitle: `I is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel 
    tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    size: 'sm',
    weight: 'regular',
    spacing: 'default',
    alignment: 'left',
  },
};

export const Medium: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    subtitle: `I is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel 
    tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    size: 'md',
    weight: 'regular',
    spacing: 'default',
    alignment: 'left',
  },
};

export const Large: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    subtitle: `I is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel 
    tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    size: 'lg',
    weight: 'regular',
    spacing: 'default',
    alignment: 'left',
  },
};

export const ExtraLarge: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    subtitle: `I is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel 
    tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    size: 'xl',
    weight: 'regular',
    spacing: 'default',
    alignment: 'left',
  },
};

export const Left: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    subtitle: `I is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel 
    tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    size: 'lg',
    weight: 'regular',
    spacing: 'default',
    alignment: 'left',
  },
};

export const Center: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    subtitle: `I is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel 
    tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    size: 'lg',
    weight: 'regular',
    spacing: 'default',
    alignment: 'center',
  },
};

export const Right: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    subtitle: `I is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel 
    tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    size: 'lg',
    weight: 'regular',
    spacing: 'default',
    alignment: 'right',
  },
};
