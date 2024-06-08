import type { StoryObj, Meta } from '@storybook/react';
import ButtonLabel from './ButtonLabel';
import Home from '../../../../assets/icons/home.svg?raw';
import Articles from '../../../../assets/icons/articles.svg?raw';
import Volume from '../../../../assets/icons/volume.svg?raw';

const meta = {
  title: 'ui/components/atoms/button-label',
  component: ButtonLabel,
  argTypes: {
    onClick: {
      action: 'click',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
} as Meta<typeof ButtonLabel>;

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
