import type { Meta, StoryObj } from '@storybook/react';
import { MenuMedia } from './MenuMedia';
import Rectangle10 from '../../atoms/hero-banner/__mock__/imgs/Rectangle10.png';

const meta: Meta<typeof MenuMedia> = {
  title: 'ui/components/molecules/MenuMedia',
  component: MenuMedia,
};

export default meta;

type Story = StoryObj<typeof MenuMedia>;

const defaultArgs = {
  imageSrc: Rectangle10,
  imageAlt: 'Imagen Rectangle10',
  onOpenImage: () => {
    alert('Imagen abierta');
  },
};

export const Small: Story = {
  args: {
    ...defaultArgs,
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    ...defaultArgs,
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    ...defaultArgs,
    size: 'large',
  },
};
