import type { StoryObj, Meta } from '@storybook/react';
import ArticleDescription from './ArticleDescription';

const meta = {
  title: 'ui/components/atoms/article-description',
  component: ArticleDescription,
  argTypes: {
  variant: {
    options: ['default', 'bold', 'italic', 'underline', 'highlight'], 
    control: { type: 'select' },
  },
},
} as Meta<typeof ArticleDescription>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'article',
    article: `
        Spectral tuning of visual pigments often facilitates adaptation to new environments,
        and it is intriguing to study the visual ecology of pelagic sharks with
        secondarily expanded habitats. The`,
    variant: 'default',
  },
};

export const Bold: Story = {
  args: {
    article: `
        Spectral tuning of visual pigments often facilitates adaptation to new environments,
        and it is intriguing to study the visual ecology of pelagic sharks with
        secondarily expanded habitats. The`,
    variant: 'bold',
  },
};

export const Italic: Story = {
  args: {
    article: `
        Spectral tuning of visual pigments often facilitates adaptation to new environments,
        and it is intriguing to study the visual ecology of pelagic sharks with
        secondarily expanded habitats. The`,
    variant: 'italic',
  },
};

export const Underline: Story = {
  args: {
    article: `
        Spectral tuning of visual pigments often facilitates adaptation to new environments,
        and it is intriguing to study the visual ecology of pelagic sharks with
        secondarily expanded habitats. The`,
    variant: 'underline',
  },
};

export const Highlight: Story = {
  args: {
    article: `
        Spectral tuning of visual pigments often facilitates adaptation to new environments,
        and it is intriguing to study the visual ecology of pelagic sharks with
        secondarily expanded habitats. The`,
    variant: 'highlight',
  },
};
