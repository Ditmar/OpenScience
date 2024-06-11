import type { StoryObj, Meta } from '@storybook/react';
import LabelFeaturedArticles from './LabelFeaturedArticles';
import '../../../../globals/_variables.scss';

const meta: Meta<typeof LabelFeaturedArticles> = {
  title: 'ui/components/atoms/label-featured-articles',
  component: LabelFeaturedArticles,
  argTypes: {
    text: { control: 'text' },
    ColorVariant: { control: { type: 'select', options: ['main', 'primary', 'secondary'] } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'artículos destacados',
    ColorVariant: 'main',
  },
};

export const Secondary: Story = {
  args: {
    text: 'artículos destacados',
    ColorVariant: 'secondary',
  },
};
