// src/ui/components/atoms/SubTitleAndParagraph/SubTitleAndParagraph.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import SubTitleAndParagraph from './SubTitleAndParagraph'; // Asegúrate de que la ruta sea correcta

// Definición de los metadatos del componente para Storybook
const meta: Meta<typeof SubTitleAndParagraph> = {
  title: 'Atoms/SubTitleAndParagraph', // Ruta en el Storybook UI
  component: SubTitleAndParagraph,
  tags: ['autodocs'], // Genera documentación automática
  argTypes: {
    title: {
      control: 'text',
      description: 'El texto del título principal.',
    },
    subtitle: {
      control: 'text',
      description: 'El texto descriptivo secundario.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'El tamaño del componente (afecta el tamaño de fuente).',
    },
    alignment: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'La alineación del texto dentro del componente.',
    },
    variant: {
      control: 'select',
      options: ['default', 'emphasized', 'minimal'],
      description: 'La variante de estilo (afecta color y peso de fuente).',
    },
    titleTag: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5'],
      description: 'La etiqueta HTML semántica para el título principal.',
    },
    subtitleTag: {
      control: 'select',
      options: ['p', 'h3', 'h4', 'h5', 'h6'],
      description: 'La etiqueta HTML semántica para el subtítulo.',
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales para el componente raíz.',
    },
  },
  parameters: {
    // Puedes añadir parámetros globales aquí si los necesitas para la temática de MUI
    // por ejemplo, si necesitas un ThemeProvider de MUI si Storybook no lo envuelve automáticamente
    // layout: 'centered', // Opcional: centra el componente en el lienzo de Storybook
  },
};

export default meta;
type Story = StoryObj<typeof SubTitleAndParagraph>;

// --- Casos de Uso (Stories) ---

export const Default: Story = {
  args: {
    title: 'Título por Defecto',
    subtitle: 'Este es un subtítulo por defecto para el componente.',
    size: 'md',
    alignment: 'left',
    variant: 'default',
  },
};

export const SmallSize: Story = {
  args: {
    ...Default.args,
    title: 'Título Pequeño',
    subtitle: 'Este es un subtítulo con tamaño pequeño.',
    size: 'sm',
  },
};

export const LargeSize: Story = {
  args: {
    ...Default.args,
    title: 'Título Grande',
    subtitle: 'Este es un subtítulo con tamaño grande.',
    size: 'lg',
  },
};

export const CenteredAlignment: Story = {
  args: {
    ...Default.args,
    title: 'Título Centrado',
    alignment: 'center',
  },
};

export const RightAlignment: Story = {
  args: {
    ...Default.args,
    title: 'Título Alineado a la Derecha',
    alignment: 'right',
  },
};

export const EmphasizedVariant: Story = {
  args: {
    ...Default.args,
    title: 'Título Enfatizado',
    variant: 'emphasized',
  },
};

export const MinimalVariant: Story = {
  args: {
    ...Default.args,
    title: 'Título Minimalista',
    variant: 'minimal',
  },
};

export const OnlyTitle: Story = {
  args: {
    ...Default.args,
    title: 'Solo Título',
    subtitle: undefined, // Sin subtítulo
  },
};

export const CustomTags: Story = {
  args: {
    title: 'Título con H1',
    subtitle: 'Párrafo con H5',
    titleTag: 'h1',
    subtitleTag: 'h5',
    size: 'md',
  },
};

export const WithReactNodeInTitle: Story = {
  args: {
    ...Default.args,
    title: (
      <>
        Título con <span style={{ color: 'blue' }}>ReactNode</span>
      </>
    ),
    subtitle: (
      <>
        Subtítulo con un <strong style={{ color: 'green' }}>elemento fuerte</strong>.
      </>
    ),
  },
};
