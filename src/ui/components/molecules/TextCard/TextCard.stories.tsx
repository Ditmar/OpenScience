// src/ui/components/molecules/TextCard/TextCard.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import TextCard from './TextCard'; // Importa tu componente TextCard

// Define la Meta para tu componente: información general para Storybook
const meta: Meta<typeof TextCard> = {
  title: 'Molecules/TextCard', // El título que aparecerá en la barra lateral de Storybook
  component: TextCard, // El componente React que estamos documentando
  parameters: {
    layout: 'centered', // Centra el componente en el lienzo de Storybook para una mejor visualización
  },
  // Define los controles interactivos para las props de tu componente (argTypes)
  // Esto permite a los usuarios de Storybook modificar las props en tiempo real
  argTypes: {
    isChecked: {
      control: 'boolean', // Crea un toggle (true/false) para esta prop
      description: 'Determina si el checkbox de la tarjeta está marcado.',
    },
    onCheckChange: {
      action: 'checkedChange', // Registra en el panel de 'Actions' cuando esta función es llamada
      description: 'Callback que se dispara al cambiar el estado del checkbox.',
    },
    isCheckDisabled: {
      control: 'boolean',
      description: 'Deshabilita el checkbox de la tarjeta.',
    },
    badgeText: {
      control: 'text', // Crea un campo de texto para editar el contenido
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
    // No necesitamos definir controles para 'subtitleSize', 'subtitleAlignment', etc.
    // si sus valores por defecto en el componente son adecuados para la mayoría de los casos
    // y no necesitas interactuar con ellos frecuentemente en Storybook.
    // Si los quieres controlar, serían de tipo 'select' o 'text' según corresponda.

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
      control: 'select', // Permite seleccionar una opción de una lista desplegable
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description:
        'Define la variante de color para el borde de la tarjeta cuando no está seleccionada.',
    },
  },
};

export default meta;
// Define el tipo 'Story' basado en la Meta de tu componente
type Story = StoryObj<typeof TextCard>;

// --- Historias Individuales ---
// Cada 'export const' crea una nueva entrada en tu Storybook para el componente

// Historia por defecto: cómo se ve el componente con sus propiedades más básicas
export const Default: Story = {
  args: {
    // Valores iniciales para las props en esta historia
    isChecked: false,
    badgeText: 'Nombre de Usuario',
    cardSubtitle: 'Título de la Tarjeta',
    cardParagraph: 'Este es el contenido de la descripción de la tarjeta.',
    isCheckDisabled: false,
    isSelected: false,
    cardVariantColor: 'default',
  },
};

// Historia: Tarjeta con el checkbox marcado
export const CheckedState: Story = {
  args: {
    ...Default.args, // Hereda todas las props de la historia 'Default'
    isChecked: true, // Sobrescribe solo 'isChecked' a true
  },
};

// Historia: Tarjeta seleccionada visualmente
export const SelectedState: Story = {
  args: {
    ...Default.args,
    isSelected: true, // Sobrescribe 'isSelected' a true
    cardVariantColor: 'default', // Opcional: define un color base si está seleccionada
  },
};

// Historia: Tarjeta con un avatar en el badge
export const WithAvatarInBadge: Story = {
  args: {
    ...Default.args,
    badgeAvatarSrc: 'https://via.placeholder.com/24', // URL de un avatar de ejemplo
    badgeText: 'Usuario con Avatar',
  },
};

// Historia: Tarjeta con el checkbox deshabilitado
export const CheckboxDisabledState: Story = {
  args: {
    ...Default.args,
    isCheckDisabled: true,
  },
};

// Historia: Tarjeta con una variante de color 'info'
export const InfoVariantCard: Story = {
  args: {
    ...Default.args,
    cardVariantColor: 'info',
    cardSubtitle: 'Alerta Importante',
    cardParagraph: 'Esta tarjeta utiliza la variante de color para información.',
  },
};

// Historia: Tarjeta con una variante de color 'error'
export const ErrorVariantCard: Story = {
  args: {
    ...Default.args,
    cardVariantColor: 'error',
    cardSubtitle: 'Mensaje de Error',
    cardParagraph: 'Algo salió mal, revisa esta información urgente.',
  },
};
