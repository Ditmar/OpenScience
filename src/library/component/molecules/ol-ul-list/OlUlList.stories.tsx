import type { Meta, StoryObj } from '@storybook/react';
import OlUlList from './OlUlList';

const meta = {
  title: 'library/component/molecules/ol-ul-list',
  component: OlUlList,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['ordered', 'unordered'],
      },
    },
    style: {
      control: {
        type: 'select',
        options: ['circle', 'square', 'rounded'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['extra-small', 'small', 'medium', 'large'],
      },
    },
    count: {
      control: {
        type: 'number',
        min: 1,
        max: 20,
      },
    },
    items: {
      control: {
        type: 'object',
      },
    },
  },
} as Meta<typeof OlUlList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExtraSmallList: Story = {
  args: {
    type: 'unordered',
    style: 'circle',
    size: 'extra-small',
    count: 3,
  },
};

export const SmallList: Story = {
  args: {
    type: 'unordered',
    style: 'circle',
    size: 'small',
    count: 3,
  },
};

export const MediumList: Story = {
  args: {
    type: 'unordered',
    style: 'circle',
    size: 'medium',
    count: 3,
  },
};

export const LargeList: Story = {
  args: {
    type: 'unordered',
    style: 'circle',
    size: 'large',
    count: 3,
  },
};

export const WithCustomItems: Story = {
  args: {
    type: 'ordered',
    style: 'rounded',
    size: 'medium',
    items: [
      {
        id: 1,
        subtitle: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
        paragraph:
          'UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of ' +
          'elegance, efficiency, and effortless delight. Its the artistry of design at its finest.',
      },
      {
        id: 2,
        subtitle: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
        paragraph:
          'UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of ' +
          'elegance, efficiency, and effortless delight. Its the artistry of design at its finest.',
      },
      {
        id: 3,
        subtitle: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
        paragraph:
          'UI is the canvas, UX the brushstroke; together, they craft an immersive journey where every pixel tells a story of ' +
          'elegance, efficiency, and effortless delight. Its the artistry of design at its finest.',
      },
    ],
  },
};
