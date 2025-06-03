import type { StoryObj, Meta } from '@storybook/react';
import Toggle from './toggle';

const meta = {
  title: 'ui/components/atoms/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Estado del toggle (activado/desactivado)',
    },
    disabled: {
      control: 'boolean',
      description: 'Si el toggle está deshabilitado',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'info', 'warning', 'danger'],
      description: 'Variante de color del toggle',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del toggle',
    },
    onChange: {
      action: 'onChange',
      description: 'Callback cuando cambia el estado',
    },
  },
  args: {
    checked: false,
    disabled: false,
    variant: 'default',
    size: 'medium',
  },
} as Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    variant: 'default',
    size: 'medium',
    'aria-label': 'Toggle default',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    variant: 'default',
    size: 'medium',
    'aria-label': 'Toggle activado',
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    variant: 'default',
    size: 'medium',
    'aria-label': 'Toggle deshabilitado',
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    variant: 'default',
    size: 'medium',
    'aria-label': 'Toggle deshabilitado y activado',
  },
};

export const Success: Story = {
  args: {
    checked: true,
    disabled: false,
    variant: 'success',
    size: 'medium',
    'aria-label': 'Toggle success',
  },
};

export const Info: Story = {
  args: {
    checked: true,
    disabled: false,
    variant: 'info',
    size: 'medium',
    'aria-label': 'Toggle info',
  },
};

export const Warning: Story = {
  args: {
    checked: true,
    disabled: false,
    variant: 'warning',
    size: 'medium',
    'aria-label': 'Toggle warning',
  },
};

export const Danger: Story = {
  args: {
    checked: true,
    disabled: false,
    variant: 'danger',
    size: 'medium',
    'aria-label': 'Toggle danger',
  },
};
export const Small: Story = {
  args: {
    checked: false,
    disabled: false,
    variant: 'default',
    size: 'small',
    'aria-label': 'Toggle small',
  },
};
export const Medium: Story = {
  args: {
    checked: false,
    disabled: false,
    variant: 'default',
    size: 'medium',
    'aria-label': 'Toggle medium',
  },
};
export const Large: Story = {
  args: {
    checked: false,
    disabled: false,
    variant: 'default',
    size: 'large',
    'aria-label': 'Toggle large',
  },
};
