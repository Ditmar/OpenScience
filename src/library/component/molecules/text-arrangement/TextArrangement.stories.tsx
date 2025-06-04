import type { Meta, StoryObj } from '@storybook/react';
import TextArrangement from './TextArrangement';

const meta: Meta<typeof TextArrangement> = {
  title: 'library/component/molecules/text-arrangement',
  component: TextArrangement,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextArrangement>;

export const LayoutFeatured: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    description: `UI is the canvas, UX the brushstroke; together, they craft an immersive journey where 
    every pixel tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    layout: 'featured',
    responsive: 'desktop',
  },
};

export const LayoutColumns: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    description: `UI is the canvas, UX the brushstroke; together, they craft an immersive journey where 
    every pixel tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    layout: 'columns',
  },
};

export const LayoutCards: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    description: `UI is the canvas, UX the brushstroke; together, they craft an immersive journey where 
    every pixel tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    layout: 'cards',
    responsive: 'desktop',
  },
};

export const ShortContent: Story = {
  args: {
    title: 'This is a short subtitle',
    description: 'This is a brief content on text arrangement to improve your understanding.',
    responsive: 'desktop',
  },
};

export const ExtensiveContent: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    description: `UI is the canvas, UX the brushstroke; together, they craft an immersive journey where 
    every pixel tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    responsive: 'desktop',
  },
};

export const ResponsiveMobile: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    description: `UI is the canvas, UX the brushstroke; together, they craft an immersive journey where 
    every pixel tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    responsive: 'mobile',
  },
};

export const ResponsiveTablet: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    description: `UI is the canvas, UX the brushstroke; together, they craft an immersive journey where 
    every pixel tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    responsive: 'tablet',
  },
};

export const ResponsiveDesktop: Story = {
  args: {
    title: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    description: `UI is the canvas, UX the brushstroke; together, they craft an immersive journey where 
    every pixel tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    responsive: 'desktop',
  },
};
