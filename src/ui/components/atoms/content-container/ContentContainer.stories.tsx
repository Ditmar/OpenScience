import type { Meta, StoryObj } from '@storybook/react';
import Container from './ContentContainer';
import icon from './_mock_/image/container.png';

const meta: Meta<typeof Container> = {
  title: 'ui/components/atoms/content-container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    pathImage: {
      control: 'select',
      options: [icon],
    },
    alt: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    pathImage: String(icon),
    alt: 'icon container',
  },
};
