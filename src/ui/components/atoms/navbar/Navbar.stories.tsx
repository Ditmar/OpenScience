import type { StoryObj, Meta } from '@storybook/react';
import Navbar from './Navbar';
import ArticlesIcon from '../../../../assets/icons/articles.svg?raw';
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

export const Primary: Story = {
  args: {
    children: 'Articulos',
    icon: ArticlesIcon,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Inicio',
    icon: StartIcon,
  },
};

export const Third: Story = {
  args: {
    children: 'Volumenes',
    icon: VolumesIcon,
  },
};
