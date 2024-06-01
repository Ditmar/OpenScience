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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'warning', 'danger'],
    },
=======
>>>>>>> 3e47174 (feature(common):added SEM-040)
=======
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'warning', 'danger'],
    },
>>>>>>> d364e01 (feature(common):added changes per PR comments SEM-040)
=======
>>>>>>> 64b0a1d (feature(common):added SEM-040)
=======
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'warning', 'danger'],
    },
>>>>>>> bae7f3a (feature(common):added changes per PR comments SEM-040)
=======
>>>>>>> 3e47174 (feature(common):added SEM-040)
=======
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'warning', 'danger'],
    },
>>>>>>> d364e01 (feature(common):added changes per PR comments SEM-040)
  },
} as Meta<typeof PublishButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    children: 'PUBLICAR ARTICULO',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d364e01 (feature(common):added changes per PR comments SEM-040)
=======
    children: 'TODO: until the implementation of the task [SEM - 209]',
>>>>>>> 34f16c2 (feature(common):added changes per PR comments SEM-040)
=======
    children: 'PUBLICAR ARTICULO',
>>>>>>> 647d254 (feature(common):added changes per PR comments SEM-040)
=======
>>>>>>> bae7f3a (feature(common):added changes per PR comments SEM-040)
=======
    children: 'TODO: until the implementation of the task [SEM - 209]',
>>>>>>> 701646e (feature(common):added changes per PR comments SEM-040)
=======
    children: 'PUBLICAR ARTICULO',
>>>>>>> 89b403a (feature(common):added changes per PR comments SEM-040)
=======
>>>>>>> d364e01 (feature(common):added changes per PR comments SEM-040)
=======
    children: 'TODO: until the implementation of the task [SEM - 209]',
>>>>>>> 34f16c2 (feature(common):added changes per PR comments SEM-040)
=======
    children: 'PUBLICAR ARTICULO',
>>>>>>> 647d254 (feature(common):added changes per PR comments SEM-040)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    children: 'TODO: until the implementation of the task [SEM - 209]',
=======
    children: 'PUBLICAR ARTICULO',
>>>>>>> d364e01 (feature(common):added changes per PR comments SEM-040)
=======
    children: 'TODO: until the implementation of the task [SEM - 209]',
>>>>>>> 34f16c2 (feature(common):added changes per PR comments SEM-040)
=======
    children: 'PUBLICAR ARTICULO',
>>>>>>> bae7f3a (feature(common):added changes per PR comments SEM-040)
=======
    children: 'TODO: until the implementation of the task [SEM - 209]',
>>>>>>> 701646e (feature(common):added changes per PR comments SEM-040)
=======
    children: 'PUBLICAR ARTICULO',
>>>>>>> d364e01 (feature(common):added changes per PR comments SEM-040)
=======
    children: 'TODO: until the implementation of the task [SEM - 209]',
>>>>>>> 34f16c2 (feature(common):added changes per PR comments SEM-040)
    variant: 'tertiary',
  },
};

export const Warning: Story = {
  args: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    children: 'TODO: until the implementation of the task [SEM - 209]',
=======
    children: 'PUBLICAR ARTICULO',
>>>>>>> d364e01 (feature(common):added changes per PR comments SEM-040)
=======
    children: 'TODO: until the implementation of the task [SEM - 209]',
>>>>>>> 34f16c2 (feature(common):added changes per PR comments SEM-040)
=======
    children: 'PUBLICAR ARTICULO',
>>>>>>> bae7f3a (feature(common):added changes per PR comments SEM-040)
=======
    children: 'TODO: until the implementation of the task [SEM - 209]',
>>>>>>> 701646e (feature(common):added changes per PR comments SEM-040)
=======
    children: 'PUBLICAR ARTICULO',
>>>>>>> d364e01 (feature(common):added changes per PR comments SEM-040)
=======
    children: 'TODO: until the implementation of the task [SEM - 209]',
>>>>>>> 34f16c2 (feature(common):added changes per PR comments SEM-040)
    variant: 'warning',
  },
};

export const Danger: Story = {
  args: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    children: 'TODO: until the implementation of the task [SEM - 209]',
    variant: 'danger',
=======
>>>>>>> 3e47174 (feature(common):added SEM-040)
=======
    children: 'PUBLICAR ARTICULO',
=======
    children: 'TODO: until the implementation of the task [SEM - 209]',
>>>>>>> 34f16c2 (feature(common):added changes per PR comments SEM-040)
    variant: 'danger',
>>>>>>> d364e01 (feature(common):added changes per PR comments SEM-040)
=======
    children: 'PUBLICAR ARTICULO',
>>>>>>> 64b0a1d (feature(common):added SEM-040)
=======
    children: 'PUBLICAR ARTICULO',
=======
    children: 'TODO: until the implementation of the task [SEM - 209]',
>>>>>>> 701646e (feature(common):added changes per PR comments SEM-040)
    variant: 'danger',
>>>>>>> bae7f3a (feature(common):added changes per PR comments SEM-040)
=======
    children: 'PUBLICAR ARTICULO',
>>>>>>> 3e47174 (feature(common):added SEM-040)
=======
    children: 'PUBLICAR ARTICULO',
=======
    children: 'TODO: until the implementation of the task [SEM - 209]',
>>>>>>> 34f16c2 (feature(common):added changes per PR comments SEM-040)
    variant: 'danger',
>>>>>>> d364e01 (feature(common):added changes per PR comments SEM-040)
  },
};
