import type { StoryObj, Meta } from '@storybook/react';
import '../../../../globals/_variables.scss';
import LabelArticles from './LabelArticles';

const meta = {
  title: 'ui/components/atoms/label-articles',
  component: LabelArticles,
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
} as Meta<typeof LabelArticles>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'ARTÍCULOS',
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    children: 'ARTÍCULOS',
    variant: 'primary',
  },
};
