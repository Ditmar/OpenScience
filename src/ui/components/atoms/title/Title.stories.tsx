import type { Meta, StoryObj } from '@storybook/react';
import Title from './Title';

const meta: Meta<typeof Title> = {
  title: 'ui/components/atoms/title',
  component: Title,
};

export default meta;

type Story = StoryObj<typeof Title>;

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
    weight: 'regular',
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
    weight: 'regular',
    spacing: 'default',
  },
};

export const ExtraExtraLarge: Story = {
  args: {
    text: 'Harmonizing Human Experience: The Artistry of UI-UX Design',
    size: 'xxl',
    weight: 'regular',
    spacing: 'default',
  },
};
