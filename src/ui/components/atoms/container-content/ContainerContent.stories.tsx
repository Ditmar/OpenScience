import type { StoryObj, Meta } from '@storybook/react';
import ContainerContent from './ContainerContent';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3315a0a6e5c1aa3004fd741d26b4b783feebcb67
import Container from './mock/assets/img/Rectangle 131.svg?raw';
import Container2 from './mock/assets/img/Rectangle 130.svg?raw';

const meta: Meta = {
<<<<<<< HEAD
=======
import Container from '../../../../assets/icons/Rectangle 131.svg?raw';

const meta = {
>>>>>>> 5c170bf (fear: add container content actualizado 2)
=======
import Container from './mock/assets/img/Rectangle 131.svg?raw';

const meta: Meta = {
>>>>>>> e7e2d43 (feat: add container content updating img paths)
=======
>>>>>>> 3315a0a6e5c1aa3004fd741d26b4b783feebcb67
  title: 'ui/components/atoms/container-content',
  component: ContainerContent,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
};
=======
} as Meta<typeof ContainerContent>;
>>>>>>> 5c170bf (fear: add container content actualizado 2)
=======
};
>>>>>>> e7e2d43 (feat: add container content updating img paths)
=======
};
>>>>>>> 3315a0a6e5c1aa3004fd741d26b4b783feebcb67

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // children: 'Container2',
    icon: Container,
    icon2: Container2,
  },
};
