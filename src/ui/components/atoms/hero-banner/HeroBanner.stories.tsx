import type { Meta, StoryObj } from '@storybook/react';
import HeroBanner from './HeroBanner';
import Rectangle6 from './__mock__/imgs/Rectangle6.png';
import Rectangle10 from './__mock__/imgs/Rectangle10.png';
import Rectangle11 from './__mock__/imgs/Rectangle11.png';
import Rectangle12 from './__mock__/imgs/Rectangle12.png';
import Rectangle17 from './__mock__/imgs/Rectangle17.png';

const meta = {
  title: 'ui/components/atoms/hero-banner',
  component: HeroBanner,
  parameters: {
    layout: 'top',
  },
  argTypes: {
    backgroundImage: {
      control: 'select',
      options: [Rectangle6, Rectangle10, Rectangle11, Rectangle12, Rectangle17],
    },
    alt: { control: 'text' },
  },
} satisfies Meta<typeof HeroBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VisualHeroBanner: Story = {
  args: {
    backgroundImage: String(Rectangle6),
    alt: 'Rectangle6',
  },
};
