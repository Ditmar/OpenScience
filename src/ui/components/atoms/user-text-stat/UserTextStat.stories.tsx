import type { Meta, StoryObj } from '@storybook/react';
import UserTextStat from './UserTextStat';

const meta: Meta<typeof UserTextStat> = {
  title: 'ui/components/atoms/user-text-stat',
  component: UserTextStat,
};
export default meta;

type Story = StoryObj<typeof UserTextStat>;

export const WhiteCard: Story = {
  args: {
    title: 'Christeen Lee',
    mainValue: `
    UI is the canvas, UX the brushstroke; together, they craft an immersive journey 
    where every pixel tells a story of elegance, efficiency, and effortless delight. 
    It’s the artistry of design at its finest.
`,
    subValue: '2 mins ago',
    avatarUrl: 'https://i.pravatar.cc/36?img=5',
    showCheckbox: true,
    styleVariant: 'white',
  },
};

export const LavenderCard: Story = {
  args: {
    title: 'Christeen Lee',
    mainValue: `
    UI is the canvas, UX the brushstroke; together, they craft an immersive journey 
    where every pixel tells a story of elegance, efficiency, and effortless delight. 
    It’s the artistry of design at its finest.
`,
    subValue: '2 mins ago',
    avatarUrl: 'https://i.pravatar.cc/36?img=5',
    showCheckbox: true,
    styleVariant: 'lavender',
  },
};

export const GrayCard: Story = {
  args: {
    title: 'Christeen Lee',
    mainValue: `
    UI is the canvas, UX the brushstroke; together, they craft an immersive journey 
    where every pixel tells a story of elegance, efficiency, and effortless delight. 
    It’s the artistry of design at its finest.
`,
    subValue: '2 mins ago',
    avatarUrl: 'https://i.pravatar.cc/36?img=5',
    showCheckbox: true,
    styleVariant: 'gray',
  },
};

export const MinimalUserCard: Story = {
  args: {
    title: 'Jane Doe',
    mainValue: 'Just joined the platform.',
    subValue: '1 minute ago',
    avatarUrl: 'https://i.pravatar.cc/36?img=12',
    showCheckbox: false,
    variant: 'default',
  },
};
