import type { StoryObj, Meta } from '@storybook/react';
import ContainerContent from './ContainerContent';
<<<<<<< HEAD
import Container from './mock/assets/img/Rectangle 131.svg?raw';

const meta: Meta = {
=======
import Container from '../../../../assets/icons/Rectangle 131.svg?raw';
import '../../../../globals/_variables.scss';

const meta = {
>>>>>>> 5c170bf (fear: add container content actualizado 2)
  title: 'ui/components/atoms/container-content',
  component: ContainerContent,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
<<<<<<< HEAD
};
=======
} as Meta<typeof ContainerContent>;
>>>>>>> 5c170bf (fear: add container content actualizado 2)

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // children: 'Container',
    icon: Container,
  },
};
