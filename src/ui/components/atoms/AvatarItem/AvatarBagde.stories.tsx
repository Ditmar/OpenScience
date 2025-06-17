import type { Meta, StoryObj } from '@storybook/react';
import { AvatarItem } from './AvatarBagde';

const SVG_RED_CIRCLE_DATA_URI =
  'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="red"/></svg>';

const MUI_SAMPLE_AVATAR_SRC = 'https://mui.com/static/images/avatar/1.jpg';

const meta: Meta<typeof AvatarItem> = {
  title: 'Atoms/AvatarItem',
  component: AvatarItem,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'URL de la imagen del avatar. Si no se provee, se muestran iniciales.',
    },
    alt: {
      control: 'text',
      description: 'Texto alternativo para la imagen, o usado para las iniciales si no hay imagen.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      description: 'Define el tamaño del avatar (25px, 28px, 31px).',
    },
    shape: {
      control: 'select',
      options: ['default', 'rounded'],
      defaultValue: 'default',
      description:
        'Define la forma del avatar ("default" para cuadrado con bordes suaves, "rounded" para circular).',
    },
    hidden: {
      control: 'boolean',
      defaultValue: false,
      description: 'Si es verdadero, el avatar no se renderiza.',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AvatarItem>;

export const InitialsDefault: Story = {
  args: {
    alt: 'JD',
    src: undefined,
    size: 'medium',
    shape: 'default',
  },
  name: 'Iniciales (Default - Medium, Cuadrado - Con Fondo)',
};

export const ImageSVGRedCircle: Story = {
  args: {
    src: SVG_RED_CIRCLE_DATA_URI,
    alt: 'Círculo Rojo SVG',
    size: 'medium',
    shape: 'default',
  },
  name: 'Con SVG (Círculo Rojo Opaco)',
};

export const ImageJPGFromMUI: Story = {
  args: {
    src: MUI_SAMPLE_AVATAR_SRC,
    alt: 'JPG de MUI',
    size: 'medium',
    shape: 'default',
  },
  name: 'Con JPG (Desde MUI - Sin Fondo Visible)',
};

export const HiddenAvatar: Story = {
  args: {
    alt: 'Hidden Example',
    src: SVG_RED_CIRCLE_DATA_URI,
    hidden: true,
  },
  name: 'Oculto',
};

export const AllSizesAndShapes: Story = {
  render: (args) => {
    const { src } = args;

    return (
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <AvatarItem src={src} size="small" shape="default" alt="S-D" />
        <AvatarItem src={src} size="medium" shape="default" alt="M-D" />
        <AvatarItem src={src} size="large" shape="default" alt="L-D" />
        <AvatarItem src={src} size="small" shape="rounded" alt="S-R" />
        <AvatarItem src={src} size="medium" shape="rounded" alt="M-R" />
        <AvatarItem src={src} size="large" shape="rounded" alt="L-R" />
      </div>
    );
  },
  args: {
    src: MUI_SAMPLE_AVATAR_SRC,
  },
  name: 'Todos los Tamaños y Formas (con JPG de MUI)',
};
