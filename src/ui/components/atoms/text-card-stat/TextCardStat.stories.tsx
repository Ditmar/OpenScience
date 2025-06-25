import type { StoryObj } from '@storybook/react';
import TextCardStat from './TextCardStat';

const meta = {
  title: 'Components/TextCardStat',
  component: TextCardStat,
  tags: ['autodocs'],
  args: {
    label: 'Nuevo',
    title: 'Título de prueba',
    description: 'Este es el contenido de la tarjeta',
    variant: 'primary',
    size: 'medium',
    elevation: 1,
    isDisabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Clickable: Story = {
  args: {
    onClick: () => {
      alert('Tarjeta clickeada');
    },
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};
