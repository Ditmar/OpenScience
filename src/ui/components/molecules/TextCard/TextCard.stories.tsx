import type { Meta, StoryObj } from '@storybook/react';
import TextCard from './TextCard';

const meta: Meta<typeof TextCard> = {
  title: 'Molecules/TextCard',
  component: TextCard,
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
  },
};

export default meta;
type Story = StoryObj<typeof TextCard>;
export const Default: Story = {
  args: {
    isChecked: false,
    badgeText: 'Nombre de Usuario',
    cardSubtitle: 'Título de la Tarjeta',
    cardParagraph: 'Este es el contenido de la descripción de la tarjeta.',
    isCheckDisabled: false,
    isSelected: false,
    cardVariantColor: 'default',
    badgeAvatarSrc: 'https://via.placeholder.com/24',
  },
};

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
    cardSubtitle: 'Alerta Importante',
    cardParagraph: 'Esta tarjeta utiliza la variante de color para información.',
  },
};

export const ErrorVariantCard: Story = {
  args: {
    ...Default.args, // Hereda el avatar por defecto
    cardVariantColor: 'error',
    cardSubtitle: 'Mensaje de Error',
    cardParagraph: 'Algo salió mal, revisa esta información urgente.',
  },
};
