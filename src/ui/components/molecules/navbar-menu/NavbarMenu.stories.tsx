import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import NavbarMenu from './NavbarMenu';
import Rectangle17 from '../../atoms/hero-banner/__mock__/imgs/Rectangle17.png';

import type { IProps, NavbarItem } from './types/IProps';

const meta: Meta<typeof NavbarMenu> = {
  title: 'Molecules/NavbarMenu',
  component: NavbarMenu,
  tags: ['autodocs'],
  argTypes: {
    onClose: { action: 'menu closed' },
    onOpen: { action: 'menu opened' },
    onItemClick: { action: 'item clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof NavbarMenu>;

function NavbarMenuWithActionWrapper({
  items,
  footerItem,
  backgroundImage,
  alt,
  className,
  onItemClick,
  onOpen,
  onClose,
}: IProps & {
  onItemClick?: (itemLabel: string) => void;
  onOpen?: () => void;
  onClose?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(true);

  const itemsWithActions: NavbarItem[] = items.map((item) => ({
    ...item,
    onClick: () => {
      item.onClick?.();
      onItemClick?.(typeof item.children === 'string' ? item.children : 'item');
    },
  }));

  const footerWithAction = footerItem
    ? {
        ...footerItem,
        onClick: () => {
          footerItem.onClick?.();
          onItemClick?.(typeof footerItem.children === 'string' ? footerItem.children : 'footer');
          setIsOpen(false);
          onClose?.();
        },
      }
    : undefined;

  return (
    <NavbarMenu
      items={itemsWithActions}
      footerItem={footerWithAction}
      backgroundImage={backgroundImage}
      alt={alt}
      className={className}
      isOpen={isOpen}
      onOpen={() => {
        setIsOpen(true);
        onItemClick?.('ABRIR MENÚ');
        onOpen?.();
      }}
      onClose={() => {
        setIsOpen(false);
        onClose?.();
      }}
    />
  );
}

export const Default: Story = {
  args: {
    items: [
      { children: 'ARTÍCULOS', icon: 'articles' },
      { children: 'INICIO', icon: 'start' },
      { children: 'VOLUMENES', icon: 'volumes' },
    ],
    footerItem: {
      children: 'SALIR',
      icon: 'Close-URL',
    },
    backgroundImage: String(Rectangle17),
    alt: 'Fondo navbar',
    className: 'navbar-hero-banner',
  },
  render: ({
    items,
    footerItem,
    backgroundImage,
    alt,
    className,
    onItemClick,
    onOpen,
    onClose,
  }) => (
    <NavbarMenuWithActionWrapper
      items={items}
      footerItem={footerItem}
      backgroundImage={backgroundImage}
      alt={alt}
      className={className}
      onItemClick={onItemClick}
      onOpen={onOpen}
      onClose={onClose}
    />
  ),
};
