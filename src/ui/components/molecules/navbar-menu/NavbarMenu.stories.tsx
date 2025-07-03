import type { Meta, StoryObj } from '@storybook/react';
import Rectangle17 from '../../atoms/hero-banner/__mock__/imgs/Rectangle17.png';
import NavbarMenu from './NavbarMenu';
import type { IProps } from './types/IProps';
import ArticlesIcon from '../../../../assets/icons/article.svg?raw';
import StartIcon from '../../../../assets/icons/start.svg?raw';
import VolumesIcon from '../../../../assets/icons/volumes.svg?raw';
import CloseIcon from '../../../../assets/icons/Close-URL.svg?raw';

const meta: Meta<typeof NavbarMenu> = {
  title: 'Molecules/NavbarMenu',
  component: NavbarMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Menú de navegación con íconos y texto, accesible y configurable.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavbarMenu>;

const baseItems: IProps['items'] = [
  {
    children: 'ARTÍCULOS',
    icon: ArticlesIcon,
    onClick: () => {
      console.log('click-articulos');
    },
  },
  {
    children: 'INICIO',
    icon: StartIcon,
    onClick: () => {
      console.log('click-inicio');
    },
  },
  {
    children: 'VOLUMENES',
    icon: VolumesIcon,
    onClick: () => {
      console.log('click-volumenes');
    },
  },
];

const logoutItem: IProps['items'][0] = {
  children: 'SALIR',
  icon: CloseIcon,
  onClick: () => {
    console.log('click-salir');
  },
};

export const Default: Story = {
  args: {
    items: baseItems,
    footerItem: logoutItem,
    backgroundImage: String(Rectangle17),
    alt: 'Fondo navbar',
    className: 'navbar-hero-banner',
  },
};

export const EmptyItems: Story = {
  args: {
    items: [],
    backgroundImage: String(Rectangle17),
    alt: 'Fondo navbar',
    className: 'navbar-hero-banner',
  },
};
