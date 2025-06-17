import type { Meta, StoryObj } from '@storybook/react';

import { CheckCircle, Warning, Error } from '@mui/icons-material';
import Pill from './pills';

const meta: Meta<typeof Pill> = {
  title: 'Components/Atoms/Pill',
  component: Pill,
  argTypes: {
    text: {
      control: 'text',
      description: 'Texto principal del Pill',
      defaultValue: 'Label',
    },
    color: {
      control: 'select',
      options: [
        'neutral-dark',
        'neutral-light',
        'brand-primary',
        'brand-secondary',
        'brand-tertiary',
        'feedback-positive',
        'feedback-negative',
        'feedback-warning',
        'read-only-disabled',
      ],
      description: 'Paleta de colores del sistema',
    },
    variant: {
      control: 'radio',
      options: ['filled', 'outline', 'soft'],
      description: 'Estilo de variante',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Tamaños disponibles',
    },
    rounded: {
      control: 'radio',
      options: ['r_none', 'r_md', 'r_full'],
      description: 'Radio de bordes',
      defaultValue: 'r_md',
    },
    shadow: {
      control: 'boolean',
      description: 'Agrega sombra al componente',
    },
    stroke: {
      control: 'radio',
      options: ['border-soft', 'border-strong'],
      description: 'Estilo de borde',
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
      if: { arg: 'icon', truthy: true },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pill>;

export const Default: Story = {
  args: {
    text: 'Default Pill',
    color: 'brand-primary',
    variant: 'filled',
    size: 'md',
  },
};

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Pill text="Neutral Dark" color="neutral-dark" />
      <Pill text="Brand Primary" color="brand-primary" />
      <Pill text="Positive" color="feedback-positive" />
      <Pill text="Warning" color="feedback-warning" />
      <Pill text="Negative" color="feedback-negative" />
      <Pill text="Disabled" color="read-only-disabled" />
    </div>
  ),
};

export const StyleVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Pill text="Filled" variant="filled" color="brand-primary" />
      <Pill text="Outline" variant="outline" color="brand-primary" />
      <Pill text="Soft" variant="soft" color="brand-primary" />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Pill text="Success" color="feedback-positive" icon={<CheckCircle fontSize="small" />} />
      <Pill
        text="Warning"
        color="feedback-warning"
        icon={<Warning fontSize="small" />}
        iconPosition="right"
      />
      <Pill
        text="Error"
        color="feedback-negative"
        icon={<Error fontSize="small" />}
        variant="outline"
      />
    </div>
  ),
};

export const Playground: Story = {
  args: {
    text: 'Custom Pill',
    color: 'brand-primary',
    variant: 'filled',
    size: 'md',
    rounded: 'r_md',
    shadow: false,
    icon: <CheckCircle fontSize="small" />,
    iconPosition: 'left',
  },
};
