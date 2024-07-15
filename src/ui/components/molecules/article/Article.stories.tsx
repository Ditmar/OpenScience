import type { Meta, StoryObj } from '@storybook/react';
import Article from './Article';

const meta: Meta<typeof Article> = {
  title: 'ui/components/molecules/articles-page',
  component: Article,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
