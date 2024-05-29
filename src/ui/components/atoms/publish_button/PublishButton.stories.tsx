import type { StoryObj, Meta } from '@storybook/react';
import PublishButton from './PublishButton';

const meta = {
  title: 'ui/components/atoms/PublishButton',
  component: PublishButton,
  argTypes: {
    onClick: {
      action: 'click',
    },
<<<<<<< HEAD
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'warning', 'danger'],
    },
=======
>>>>>>> 3e47174 (feature(common):added SEM-040)
  },
} as Meta<typeof PublishButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'PUBLICAR ARTICULO',
<<<<<<< HEAD
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
=======
>>>>>>> 3e47174 (feature(common):added SEM-040)
  },
};
