import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import type { Meta, StoryObj } from '@storybook/react';
import Pill from './pills';

// LISTA DE TODOS LOS COLORES DISPONIBLES SEGÚN TU colorMap
const colorList = [
  'neutral-dark',
  'neutral-light',
  'brand-primary',
  'brand-secondary',
  'brand-tertiary',
  'feedback-positive',
  'feedback-negative',
  'feedback-warning',
  'read-only-disabled',
] as const;

const variantList = ['filled', 'outline', 'soft'] as const;
const sizeList = ['sm', 'md', 'lg'] as const;

const meta: Meta<typeof Pill> = {
  title: 'Atoms/Pill',
  component: Pill,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const BasicFilledPrimary: StoryObj<typeof Pill> = {
  args: {
    text: '100',
    color: 'brand-primary',
    variant: 'filled',
    size: 'md',
    rounded: 'r_md',
    iconPosition: 'left',
  },
};

export const WithIconLeft: StoryObj<typeof Pill> = {
  args: {
    text: 'Con ícono izquierdo',
    color: 'feedback-positive',
    variant: 'filled',
    size: 'md',
    rounded: 'r_full',
    icon: <CheckCircleOutlineIcon />,
    iconPosition: 'left',
  },
};

export const WithIconRight: StoryObj<typeof Pill> = {
  args: {
    text: 'Con ícono derecho',
    color: 'feedback-negative',
    variant: 'filled',
    size: 'md',
    rounded: 'r_md',
    icon: <ErrorOutlineIcon />,
    iconPosition: 'right',
  },
};

export const VisualGrid: StoryObj<typeof Pill> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {variantList.map((variant) => (
        <div key={variant}>
          <h4 style={{ marginBottom: 4, marginTop: 0 }}>{variant.toUpperCase()}</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            {colorList.map((color) => (
              <div key={`${variant}-${color}`}>
                <div
                  style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: 4 }}
                >
                  {sizeList.map((size) => (
                    <Pill
                      key={`${variant}-${color}-${size}`}
                      text="100"
                      color={color}
                      variant={variant}
                      size={size}
                      rounded="r_md"
                      stroke={variant === 'outline' ? 'border-soft' : undefined}
                    />
                  ))}
                </div>
                <small style={{ fontSize: 12, color: '#888' }}>{color}</small>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

VisualGrid.storyName = 'Todas las combinaciones básicas';
