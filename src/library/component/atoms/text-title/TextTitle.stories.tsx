import type { Meta, StoryObj } from '@storybook/react';
import TextTitle from './TextTitle';

const meta: Meta<typeof TextTitle> = {
  title: 'library/component/atoms/text-title',
  component: TextTitle,
};

export default meta;

type Story = StoryObj<typeof TextTitle>;

export const Small: Story = {
  args: {
    text: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    size: 'sm',
    weight: 'regular',
    spacing: 'default',
  },
};

export const Medium: Story = {
  args: {
    text: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    size: 'md',
    weight: 'medium',
    spacing: 'default',
  },
};

export const Large: Story = {
  args: {
    text: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    size: 'lg',
    weight: 'regular',
    spacing: 'default',
  },
};

export const ExtraLarge: Story = {
  args: {
    text: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    size: 'xl',
    weight: 'semibold',
    spacing: 'default',
  },
};
