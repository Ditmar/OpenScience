import type { StoryObj, Meta } from '@storybook/react';
import ButtonLabel from './ButtonLabel';
import Home from '../../../../assets/icons/home.svg?raw';
import Articles from '../../../../assets/icons/articles.svg?raw';
import Volume from '../../../../assets/icons/volume.svg?raw';

const meta = {
  title: 'ui/components/atoms/buttonLabel',
  component: ButtonLabel,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<typeof ButtonLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'ARTICULOS',
    icon: Articles,
  },
};

export const Secondary: Story = {
  args: {
    children: 'INICIO',
    icon: Home,
  },
};
export const Terciary: Story = {
  args: {
    children: 'VOLUMENES',
    icon: Volume,
  },
};
