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
      options: ['primary', 'secondary', 'tertiary', 'warning', 'danger'],
    },
  },
} as Meta<typeof PublishButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'TODO: until the implementation of the task [SEM - 209]',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'TODO: until the implementation of the task [SEM - 209]',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'TODO: until the implementation of the task [SEM - 209]',
    variant: 'tertiary',
  },
};

export const Warning: Story = {
  args: {
    children: 'TODO: until the implementation of the task [SEM - 209]',
    variant: 'warning',
  },
};

export const Danger: Story = {
  args: {
    children: 'TODO: until the implementation of the task [SEM - 209]',
    variant: 'danger',
  },
};
