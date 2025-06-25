import type { Meta, StoryObj } from '@storybook/react';
import TextCard from './TextCard';

const meta: Meta<typeof TextCard> = {
  title: 'Molecules/TextCard',
  component: TextCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isChecked: {
      control: 'boolean',
      description: 'Determina si el checkbox de la tarjeta está marcado.',
    },
    onCheckChange: {
      action: 'checkedChange',
      description: 'Callback que se dispara al cambiar el estado del checkbox.',
    },
    isCheckDisabled: {
      control: 'boolean',
      description: 'Deshabilita el checkbox de la tarjeta.',
    },
    badgeText: {
      control: 'text',
      description: 'Texto principal que se muestra en el badge.',
    },
    badgeAvatarSrc: {
      control: 'text',
      description:
        'URL de la imagen para el avatar dentro del badge. Si no se provee, no se muestra.',
    },
    onBadgeClick: {
      action: 'badgeClick',
      description: 'Callback que se dispara al hacer clic en el badge.',
    },
    cardSubtitle: {
      control: 'text',
      description: 'El subtítulo principal (título del SubTitleAndParagraph).',
    },
    cardParagraph: {
      control: 'text',
      description: 'El contenido del párrafo principal (subtítulo del SubTitleAndParagraph).',
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales para el componente raíz de la tarjeta.',
    },
    isSelected: {
      control: 'boolean',
      description: 'Aplica un estilo visual distintivo si la tarjeta está seleccionada.',
    },
    cardVariantColor: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description:
        'Define la variante de color para el borde de la tarjeta cuando no está seleccionada.',
    },
    sizeVariant: {
      control: 'select',
      options: ['large', 'medium', 'small'],
      description:
        'Define el tamaño predefinido de la tarjeta (afecta padding y tamaño de átomos).',
    },
    shapeVariant: {
      control: 'select',
      options: ['soft', 'sharp'],
      description: 'Define la forma de los bordes de la tarjeta.',
    },
    cardRightPillProps: {
      control: 'object',
      description:
        'Propiedades para el Pill que se mostrará a la derecha del badge. Debe ser un objeto con `text`, `variant`, `color`, `size`.',
    },
  },
  args: {
    isChecked: false,
    badgeText: 'Nombre de Usuario',
    cardSubtitle: 'Título de la Tarjeta',
    cardParagraph: 'Este es el contenido de la descripción de la tarjeta.',
    isCheckDisabled: false,
    isSelected: false,
    cardVariantColor: 'default',
    badgeAvatarSrc: 'https://via.placeholder.com/24',
    sizeVariant: 'medium',
    shapeVariant: 'soft',
    cardRightPillProps: {
      text: '100',
      variant: 'filled',
      color: 'brand-primary',
      size: 'sm',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextCard>;

export const Default: Story = {};

export const CheckedState: Story = {
  args: {
    ...Default.args,
    isChecked: true,
  },
};

export const SelectedState: Story = {
  args: {
    ...Default.args,
    isSelected: true,
    cardVariantColor: 'default',
  },
};

export const WithSpecificAvatar: Story = {
  args: {
    ...Default.args,
    badgeAvatarSrc: 'https://via.placeholder.com/24/007bff/ffffff?text=User',
    badgeText: 'Usuario con Avatar Específico',
  },
};

export const CheckboxDisabledState: Story = {
  args: {
    ...Default.args,
    isCheckDisabled: true,
  },
};

export const InfoVariantCard: Story = {
  args: {
    ...Default.args,
    cardVariantColor: 'info',
    cardSubtitle: 'Alerta Imp',
    cardParagraph: 'Esta tarjeta utiliza la variante de color para información.',
  },
};

export const ErrorVariantCard: Story = {
  args: {
    ...Default.args,
    cardVariantColor: 'error',
    cardSubtitle: 'Mensaje de Error',
    cardParagraph: 'Algo salió mal, revisa esta información urgente.',
  },
};

export const LargeSoftCard: Story = {
  args: {
    ...Default.args,
    sizeVariant: 'large',
    shapeVariant: 'soft',
    cardSubtitle: 'Tarjeta Grande y Suave',
    cardParagraph: 'El tamaño y los bordes se ajustan según la variante.',
  },
};

export const MediumSoftCard: Story = {
  args: {
    ...Default.args,
    sizeVariant: 'medium',
    shapeVariant: 'soft',
    cardSubtitle: 'Tarjeta Mediana y Suave',
    cardParagraph: 'El tamaño y los bordes se ajustan según la variante.',
  },
};

export const SmallSoftCard: Story = {
  args: {
    ...Default.args,
    sizeVariant: 'small',
    shapeVariant: 'soft',
    cardSubtitle: 'Tarjeta Pequeña y Suave',
    cardParagraph: 'El tamaño y los bordes se ajustan según la variante.',
  },
};

export const LargeSharpCard: Story = {
  args: {
    ...Default.args,
    sizeVariant: 'large',
    shapeVariant: 'sharp',
    cardSubtitle: 'Tarjeta Grande y Afilada',
    cardParagraph: 'El tamaño y los bordes se ajustan según la variante.',
  },
};

export const MediumSharpCard: Story = {
  args: {
    ...Default.args,
    sizeVariant: 'medium',
    shapeVariant: 'sharp',
    cardSubtitle: 'Tarjeta Mediana y Afilada',
    cardParagraph: 'El tamaño y los bordes se ajustan según la variante.',
  },
};

export const SmallSharpCard: Story = {
  args: {
    ...Default.args,
    sizeVariant: 'small',
    shapeVariant: 'sharp',
    cardSubtitle: 'Tarjeta Pequeña y Afilada',
    cardParagraph: 'El tamaño y los bordes se ajustan según la variante.',
  },
};
