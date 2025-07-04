import type { Meta, StoryObj } from '@storybook/react';
import Iconlink from './IconLink';

const meta: Meta<typeof Iconlink> = {
  title: 'ui/components/atoms/Iconlink',
  component: Iconlink,
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
type Story = StoryObj<typeof Iconlink>;

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
