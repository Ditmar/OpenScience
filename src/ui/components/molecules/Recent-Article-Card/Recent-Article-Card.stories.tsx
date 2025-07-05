import type { Meta, StoryObj } from '@storybook/react';
import RecentArticleCard from './Recent-Article-Card';

const meta: Meta<typeof RecentArticleCard> = {
  title: 'ui/components/molecules/Recent Article Card',
  component: RecentArticleCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RecentArticleCard>;

export const Default: Story = {
  args: {
    date: new Date('2023-04-16'),
    title: 'CANOPY-TOP MEASUREMENTS DO NOT ACCURATELY QUANTIFY CANOPY-SCALE LEAF THERMOREGULATION',
    description:
      'Spectral tuning of visual pigments often facilitates adaptation to new environments.',
    author: 'Marco Antonio Lopez',
    pdfUrl: 'https://example.com/article.pdf',
    shareUrl: 'https://example.com/share',
  },
};
