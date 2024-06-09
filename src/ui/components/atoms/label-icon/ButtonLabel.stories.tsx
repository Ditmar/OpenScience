import type { StoryObj, Meta } from '@storybook/react';
import LabelIcon from './ButtonLabel';
import Home from '../../../../assets/icons/home.svg?raw';
import Articles from '../../../../assets/icons/articles.svg?raw';
import Volume from '../../../../assets/icons/volume.svg?raw';

const meta = {
  title: 'ui/components/atoms/label-icon',
  component: LabelIcon,
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
} as Meta<typeof LabelIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'ARTICULOS',
    icon: Articles,
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'INICIO',
    icon: Home,
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'VOLUMENES',
    icon: Volume,
    variant: 'tertiary',
  },
};
