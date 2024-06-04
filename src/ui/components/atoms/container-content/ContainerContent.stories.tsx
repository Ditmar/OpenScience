import type { StoryObj, Meta } from '@storybook/react';
import ContainerContent from './ContainerContent';
<<<<<<< HEAD
<<<<<<< HEAD
import Container from './mock/assets/img/Rectangle 131.svg?raw';

const meta: Meta = {
=======
import Container from '../../../../assets/icons/Rectangle 131.svg?raw';

const meta = {
>>>>>>> 5c170bf (fear: add container content actualizado 2)
=======
import Container from './mock/assets/img/Rectangle 131.svg?raw';

const meta: Meta = {
>>>>>>> e7e2d43 (feat: add container content updating img paths)
  title: 'ui/components/atoms/container-content',
  component: ContainerContent,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
<<<<<<< HEAD
<<<<<<< HEAD
};
=======
} as Meta<typeof ContainerContent>;
>>>>>>> 5c170bf (fear: add container content actualizado 2)
=======
};
>>>>>>> e7e2d43 (feat: add container content updating img paths)

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // children: 'Container',
    icon: Container,
  },
};
