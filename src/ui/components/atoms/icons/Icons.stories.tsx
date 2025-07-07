import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icons';
import media from '../../../../assets/icons/media.svg?raw';
import pdf from '../../../../assets/icons/pdf.svg?raw';
import link from '../../../../assets/icons/share.svg?raw';
import reference from '../../../../assets/icons/reference1.svg?raw';

const meta: Meta<typeof Icon> = {
  title: 'ui/components/atoms/Icons',
  component: Icon,
  argTypes: {
    icon: { table: { disable: true } },
    background: {
      control: 'radio',
      options: ['transparent', 'blue'],
      description: 'Color de fondo del contenedor',
      table: { defaultValue: { summary: 'blue' } },
    },
    containerSize: { control: 'number', description: 'Tamaño del contenedor' },
    iconWidth: { control: 'number', description: 'Ancho del icono' },
    iconHeight: { control: 'number', description: 'Alto del icono' },
    className: { control: 'text', description: 'Clase CSS adicional' },
    alt: { control: 'text', description: 'Texto alternativo' },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const MediaIcon: Story = {
  args: {
    icon: media,
    background: 'blue',
    containerSize: 56,
    iconWidth: 40,
    iconHeight: 24,
    alt: 'Media icon',
  },
  parameters: {
    docs: {
      description: {
        story: 'Icono Media con fondo azul',
      },
    },
  },
};

export const PdfIcon: Story = {
  args: {
    icon: pdf,
    background: 'blue',
    containerSize: 56,
    iconWidth: 32,
    iconHeight: 35,
    alt: 'PDF icon',
  },
  parameters: {
    docs: {
      description: {
        story: 'Icono PDF con fondo azul',
      },
    },
  },
};

export const LinkIcon: Story = {
  args: {
    icon: link,
    background: 'blue',
    containerSize: 56,
    iconWidth: 32,
    iconHeight: 33,
    alt: 'Link icon',
  },
  parameters: {
    docs: {
      description: {
        story: 'Icono Link con fondo azul',
      },
    },
  },
};

export const ReferenceIcon: Story = {
  args: {
    icon: reference,
    background: 'blue',
    containerSize: 56,
    iconWidth: 32,
    iconHeight: 35,
    alt: 'Reference icon',
  },
  parameters: {
    docs: {
      description: {
        story: 'Icono Reference con fondo azul',
      },
    },
  },
};

export const IconTransparent: Story = {
  args: {
    icon: media,
    background: 'transparent',
    containerSize: 56,
    iconWidth: 40,
    iconHeight: 24,
    alt: 'Media icon transparente',
  },
  parameters: {
    docs: {
      description: {
        story: 'Icono Media con fondo transparente',
      },
    },
  },
};
