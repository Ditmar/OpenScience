import type { StoryObj, Meta } from '@storybook/react';
import PublishButton from './PublishButton';

const meta = {
  title: 'ui/components/atoms/PublishButton',
  component: PublishButton,
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    textVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
} as Meta<typeof PublishButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'PUBLICAR ARTICULO',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'PUBLICAR ARTICULO',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'PUBLICAR ARTICULO',
    variant: 'tertiary',
  },
};

export const Warning: Story = {
  args: {
    children: 'PUBLICAR ARTICULO',
    variant: 'warning',
  },
};

export const Danger: Story = {
  args: {
    children: 'PUBLICAR ARTICULO',
    variant: 'danger',
  },
};
