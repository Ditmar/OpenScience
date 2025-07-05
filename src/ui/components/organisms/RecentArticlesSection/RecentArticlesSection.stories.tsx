import type { Meta, StoryObj } from '@storybook/react';
import RecentArticlesSection from './RecentArticlesSection';
import { mockVolumes } from './__mocks__/mockVolumes';

const meta: Meta<typeof RecentArticlesSection> = {
  title: 'ui/components/organisms/RecentArticlesSection',
  component: RecentArticlesSection,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RecentArticlesSection>;

export const Default: Story = {
  args: {
    volumes: mockVolumes,
  },
};
