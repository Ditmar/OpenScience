import type { Meta, StoryObj } from '@storybook/react';
import Thumbnail from './Thumbnail';
import Rectangle27 from './imgs/Rectangle27.png';
import Rectangle28 from './imgs/Rectangle28.png';
import Rectangle29 from './imgs/Rectangle29.png';
import Rectangle30 from './imgs/Rectangle30.png';
import Rectangle31 from './imgs/Rectangle31.png';
import Rectangle32 from './imgs/Rectangle32.png';

const meta = {
  title: 'ui/components/atoms/thumbnail',
  component: Thumbnail,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    pathImage: {
      control: 'select',
      options: [Rectangle27, Rectangle28, Rectangle29, Rectangle30, Rectangle31, Rectangle32],
    },
    alt: { control: 'text' },
  },
} satisfies Meta<typeof Thumbnail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const VisualThumbnail: Story = {
  args: {
    pathImage: String(Rectangle28),
    alt: 'Rectangle28',
  },
};
