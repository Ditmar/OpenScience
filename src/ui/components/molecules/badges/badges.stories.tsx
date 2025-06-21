import type { Meta, StoryObj } from '@storybook/react';
import { AvatarBadgeItem } from './badges';

const meta: Meta<typeof AvatarBadgeItem> = {
  title: 'ui/components/molecules/badges',
  component: AvatarBadgeItem,
  argTypes: {
    avatarSrc: {
      control: 'text',
      description: 'URL de la imagen del avatar. Si se proporciona, el avatar será visible.',
    },
    text: {
      control: 'text',
      description: 'Texto principal del badge.',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      description: 'Tamaño del componente.',
    },
    bold: {
      control: 'boolean',
      defaultValue: false,
      description: 'Define si el texto debe ser negrita.',
    },
    showAvatar: {
      control: 'boolean',
      defaultValue: true,
      description: 'Muestra/oculta el avatar.',
    },
    variant: {
      control: 'radio',
      options: ['filled', 'outline', 'soft'],
      defaultValue: 'filled',
      description: 'Variante de estilo del badge.',
    },
    color: {
      control: 'radio',
      options: ['neutral', 'gray', 'violet', 'blue', 'custom'],
      defaultValue: 'neutral',
      description: 'Color del badge.',
    },
    customColor: {
      control: 'color',
      if: { arg: 'color', eq: 'custom' },
      description: 'Color personalizado cuando la prop `color` se establece en "custom".',
    },
    shape: {
      control: 'radio',
      options: ['default', 'rounded'],
      defaultValue: 'default',
      description: 'Forma de las esquinas del badge.',
    },
    onRemove: {
      action: 'removed',
      description: 'Callback que se dispara cuando se hace clic en el botón de eliminar.',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback que se dispara cuando se hace clic en el badge.',
    },
    showLeadingIcon: {
      control: 'boolean',
      defaultValue: false,
      description: 'Controla la visibilidad del icono principal a la izquierda del badge.',
    },
    leftPillProps: {
      control: 'object',
      description: 'Propiedades para el componente Pill izquierdo.',
    },
    rightPillProps: {
      control: 'object',
      description: 'Propiedades para el componente Pill derecho.',
    },
    showRemoveIcon: {
      control: 'boolean',
      defaultValue: true,
      description: 'Controla la visibilidad del icono de "cerrar" a la derecha del badge.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AvatarBadgeItem>;

export const Default: Story = {
  args: {
    avatarSrc: 'https://i.pravatar.cc/150?img=1',
    text: 'Usuario Activo',
    showLeadingIcon: true,
    leftPillProps: {
      text: '100',
      color: 'neutral-dark',
      variant: 'filled',
      size: 'sm',
    },
    rightPillProps: {
      text: '100',
      color: 'neutral-dark',
      variant: 'filled',
      size: 'sm',
    },
    showRemoveIcon: true,
    color: 'custom',
    customColor: '#FFFFFF',
  },
};

export const OutlineVariant: Story = {
  args: {
    ...Default.args,
    avatarSrc: 'https://i.pravatar.cc/150?img=3',
    variant: 'outline',
  },
};

export const SoftViolet: Story = {
  args: {
    ...Default.args,
    avatarSrc: 'https://i.pravatar.cc/150?img=5',
    variant: 'soft',
    color: 'violet',
  },
};

export const RoundedShape: Story = {
  args: {
    ...Default.args,
    avatarSrc: 'https://i.pravatar.cc/150?img=7',
    shape: 'rounded',
  },
};

export const CustomColor: Story = {
  args: {
    ...Default.args,
    avatarSrc: 'https://i.pravatar.cc/150?img=9',
    color: 'custom',
    customColor: '#ffeb3b',
  },
};

export const WithPills: Story = {
  args: {
    ...Default.args,
    avatarSrc: 'https://i.pravatar.cc/150?img=11',
    text: 'Items en Carrito',
    leftPillProps: {
      text: '5',
      color: 'brand-tertiary',
      variant: 'filled',
      size: 'sm',
    },
    rightPillProps: {
      text: '10',
      color: 'feedback-positive',
      variant: 'filled',
      size: 'sm',
    },
  },
};

export const WithLeadingIcon: Story = {
  args: {
    ...Default.args,
    avatarSrc: undefined,
    showLeadingIcon: true,
    text: 'Con Icono',
  },
};

export const WithoutRemoveIcon: Story = {
  args: {
    ...Default.args,
    text: 'Sin Remover',
    showRemoveIcon: false,
  },
};
