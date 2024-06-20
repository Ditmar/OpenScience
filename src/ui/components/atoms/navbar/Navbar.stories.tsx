import type { StoryObj, Meta } from '@storybook/react';
import Navbar from './Navbar';
import ArticlesIcon from '../../../../assets/icons/article.svg?raw';
import StartIcon from '../../../../assets/icons/start.svg?raw';
import VolumesIcon from '../../../../assets/icons/volumes.svg?raw';

const meta = {
  title: 'ui/components/atoms/navbar',
  component: Navbar,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Articulos: Story = {
  args: {
    children: 'Articulos',
    icon: ArticlesIcon,
  },
};

export const Inicio: Story = {
  args: {
    children: 'Inicio',
    icon: StartIcon,
  },
};

export const Volumenes: Story = {
  args: {
    children: 'Volumenes',
    icon: VolumesIcon,
  },
};
