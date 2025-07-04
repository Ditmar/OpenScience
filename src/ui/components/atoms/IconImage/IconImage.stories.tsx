import type { Meta, StoryObj } from '@storybook/react';
import IconImage from './IconImage';

const meta: Meta<typeof IconImage> = {
  title: 'ui/components/atoms/IconImage',
  component: IconImage,
  argTypes: {
    background: {
      control: 'radio',
      options: ['transparent', 'blue'],
      description: 'Color de fondo del contenedor',
      table: {
        defaultValue: { summary: 'transparent' },
      },
    },
    className: {
      control: 'text',
      description: 'Clase CSS adicional',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconImage>;

export const Default: Story = {
  args: {
    background: 'blue',
  },
  parameters: {
    docs: {
      description: {
        story: 'Versión con fondo azul',
      },
    },
  },
};

export const TransparentBackground: Story = {
  args: {
    background: 'transparent',
  },
  parameters: {
    docs: {
      description: {
        story: 'Versión por defecto con fondo transparente',
      },
    },
  },
};
