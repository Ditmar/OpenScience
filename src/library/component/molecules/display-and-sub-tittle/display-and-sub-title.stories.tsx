import type { Meta, StoryObj } from '@storybook/react';
import DisplayAndSubTitle from './display-and-sub-title';

const meta: Meta<typeof DisplayAndSubTitle> = {
  title: 'library/component/molecules/display-and-sub-title',
  component: DisplayAndSubTitle,
};

export default meta;

type Story = StoryObj<typeof DisplayAndSubTitle>;

export const Large: Story = {
  args: {
    displayText: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    subtitle: `I is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel 
    tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    displayTag: 'h1',
    subtitleTag: 'h2',
    size: 'lg',
    weight: 'regular',
    alignment: 'left',
    spacing: 'default',
  },
};

export const ExtraLarge: Story = {
  args: {
    displayText: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    subtitle: `I is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel 
    tells a story of elegance, efficiency, and effortless delight. It's the artistry of design at its finest.`,
    displayTag: 'h1',
    subtitleTag: 'h2',
    size: 'xl',
    weight: 'regular',
    alignment: 'left',
    spacing: 'default',
  },
};
