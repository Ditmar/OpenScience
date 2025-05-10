import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../../../utils/vite-svgr/Icon';
import type { IconName } from '../../../utils/vite-svgr/types/IProps';

const meta: Meta<typeof Icon> = {
  title: 'Design System/Icons/SVG Icons',
  component: Icon,
  parameters: {
    componentSubtitle: 'Biblioteca de iconos SVG para la aplicación',
    docs: {
      description: {
        component:
          'Iconos SVG cargados dinámicamente que se pueden personalizar en tamaño, color y otros atributos.',
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
        { name: 'brand', value: '#123456' },
      ],
    },
    a11y: {
      config: {
        rules: [
          { id: 'button-name', enabled: true },
          { id: 'image-alt', enabled: true },
        ],
      },
    },
  },
  argTypes: {
    width: {
      control: { type: 'range', min: 16, max: 200, step: 4 },
      description: 'Tamaño del icono en píxeles',
      table: {
        category: 'Dimensiones',
        defaultValue: { summary: '24' },
      },
    },
    height: {
      control: { type: 'range', min: 16, max: 200, step: 4 },
      description: 'Tamaño del icono en píxeles',
      table: {
        category: 'Dimensiones',
        defaultValue: { summary: '24' },
      },
    },
    color: {
      control: 'color',
      description: 'Color del icono (shorthand para fill o stroke según el icono)',
      table: {
        category: 'Apariencia',
        defaultValue: { summary: 'currentColor' },
      },
    },
    stroke: {
      control: 'color',
      description: 'Color del trazo (si aplica)',
      table: {
        category: 'Apariencia',
      },
    },
    strokeWidth: {
      control: { type: 'range', min: 0, max: 5, step: 0.5 },
      description: 'Grosor del trazo (si aplica)',
      defaultValue: 1,
      table: {
        category: 'Apariencia',
      },
    },
    className: {
      control: 'text',
      description: 'Clase CSS personalizada para el icono',
      defaultValue: '',
      table: {
        category: 'Estilos',
      },
    },
    iconName: {
      control: {
        type: 'select',
        options: [
          'article',
          'articles',
          'burger-menu',
          'button-burguer',
          'button-burguer1',
          'close_simple',
          'close',
          'downloads',
          'eye',
          'facebook',
          'facebook1',
          'facelocation',
          'google',
          'home',
          'icon-upload-default',
          'icon-upload-primary',
          'left-arrow',
          'location',
          'logo',
          'magnifyingglass',
          'media',
          'pdf',
          'reference',
          'reference1',
          'right-arrow',
          'share',
          'start',
          'telegram',
          'vector',
          'volume',
          'volumes',
          'whatsapp' as IconName,
        ],
      },
      description: 'Nombre del icono SVG a mostrar',
      table: {
        category: 'Contenido',
        type: { summary: 'string' },
      },
      defaultValue: 'article',
    },
    fill: {
      control: 'color',
      description: 'Color de relleno del icono (si aplica)',
      defaultValue: 'currentColor',
      table: {
        category: 'Apariencia',
        type: { summary: 'string' },
      },
    },
    opacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: 'Opacidad del icono',
      defaultValue: 1,
      table: {
        category: 'Apariencia',
      },
    },
  },
  // Valores por defecto para todos los stories
  args: {
    width: 32,
    height: 32,
    iconName: 'article',
    fill: 'currentColor',
    strokeWidth: 1,
    opacity: 1,
    role: 'img',
  },
  // Decorador para mostrar mejor los iconos
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    color: 'red',
    stroke: 'black',
    strokeWidth: 1,
    className: 'custom-class',
    iconName: 'article',
  },
};

// Historias individuales
export const LogoIcon: Story = {
  args: {
    color: '#0073e6',
    iconName: 'logo',
  },
};
