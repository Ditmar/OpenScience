import type { Meta, StoryObj } from '@storybook/react';
import { AvatarItem } from './AvatarBagde';

const meta: Meta<typeof AvatarItem> = {
  title: 'ui/components/atoms/Avatar',
  component: AvatarItem,
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'URL de la imagen del avatar',
      defaultValue: 'https://i.pravatar.cc/300',
    },
    alt: {
      control: 'text',
      description: 'Texto alternativo para accesibilidad',
      defaultValue: 'Avatar del usuario',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del avatar',
      defaultValue: 'medium',
    },
    hidden: {
      control: 'boolean',
      description: 'Controla si el avatar está visible o no',
      defaultValue: false,
    },
  },
  args: {
    src: 'https://i.pravatar.cc/300',
    alt: 'Avatar del usuario',
  },
};

export default meta;

type Story = StoryObj<typeof AvatarItem>;

export const example: Story = {};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Hidden: Story = {
  args: {
    hidden: true,
  },
};

export const CustomImage: Story = {
  args: {
    src: 'https://randomuser.me/api/portraits/women/44.jpg',
    alt: 'Avatar personalizado',
  },
};
