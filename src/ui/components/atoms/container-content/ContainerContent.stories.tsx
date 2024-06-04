import type { StoryObj, Meta } from '@storybook/react';
import ContainerContent from './ContainerContent';
import Container from './mock/assets/img/Rectangle 131.svg?raw';

const meta: Meta = {
  title: 'ui/components/atoms/container-content',
  component: ContainerContent,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // children: 'Container',
    icon: Container,
  },
};
