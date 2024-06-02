import type { StoryObj, Meta } from '@storybook/react';
import ContainerContent from './ContainerContent';
import Container from '../../../../assets/icons/Rectangle 131.svg?raw';

const meta = {
  title: 'ui/components/atoms/container-content',
  component: ContainerContent,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<typeof ContainerContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // children: 'Container',
    icon: Container,
  },
};
