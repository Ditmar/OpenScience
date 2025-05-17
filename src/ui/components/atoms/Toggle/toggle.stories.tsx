import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Toggle from './toggle';
import type { IToggleProps } from './types/IToggleProps';

type ToggleVariant = NonNullable<IToggleProps['variant']>;
type ToggleSize = NonNullable<IToggleProps['size']>;

const variants: ToggleVariant[] = [
  'default',
  'primary',
  'secondary',
  'tertiary',
  'success',
  'error',
  'warning',
  'info',
  'light',
  'dark',
];

const sizes: ToggleSize[] = ['small', 'medium', 'large'];

const meta: Meta<typeof Toggle> = {
  title: 'ui/components/atoms/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Estado activado/desactivado',
    },
    onChange: {
      action: 'changed',
      description: 'Callback al cambiar estado',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado',
    },
    variant: {
      control: 'select',
      options: variants,
      description: 'Variante de color',
    },
    size: {
      control: 'radio',
      options: sizes,
      description: 'Tamaño del componente',
    },
  },
  args: {
    checked: false,
    disabled: false,
    variant: 'default',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente Toggle que permite al usuario activar o desactivar una opción.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

function ToggleVariantsGrid() {
  const [states, setStates] = useState<Record<string, boolean>>(
    variants.reduce<Record<string, boolean>>((acc, variant) => ({ ...acc, [variant]: true }), {}),
  );

  return (
    <div
      style={{
        display: 'grid',
        gap: '24px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        padding: '16px',
      }}
    >
      {variants.map((variant) => (
        <div
          key={variant}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center',
            padding: '16px',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}
        >
          <div
            id={`variant-${variant}`}
            style={{
              fontWeight: 'bold',
              marginBottom: '8px',
              fontSize: '1rem',
            }}
          >
            {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </div>
          <Toggle
            aria-labelledby={`variant-${variant}`}
            variant={variant}
            checked={states[variant]}
            onChange={(value) => {
              setStates((prev) => ({ ...prev, [variant]: value }));
            }}
          />
          <div
            style={{
              fontSize: '0.85rem',
              color: '#666',
              marginTop: '8px',
            }}
          >
            {states[variant] ? 'Activado' : 'Desactivado'}
          </div>
        </div>
      ))}
    </div>
  );
}

export const AllVariants: Story = {
  render: () => <ToggleVariantsGrid />,
  parameters: {
    docs: {
      description: {
        story: 'Muestra todas las variantes de color disponibles para el Toggle.',
      },
    },
  },
};

function ToggleSizesDemo() {
  const [statesSize, setStatesSize] = useState<Record<string, boolean>>({
    small: true,
    medium: true,
    large: true,
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        padding: '24px',
        maxWidth: '400px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
      }}
    >
      {sizes.map((size) => (
        <div
          key={size}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <label htmlFor={`toggle-size-${size}`} style={{ fontWeight: 'bold', fontSize: '1rem' }}>
            {size.charAt(0).toUpperCase() + size.slice(1)}
          </label>
          <Toggle
            id={`toggle-size-${size}`}
            size={size}
            checked={statesSize[size]}
            onChange={(value) => {
              setStatesSize((prev) => ({ ...prev, [size]: value }));
            }}
            variant="primary"
            aria-label={`${size} toggle`}
          />
        </div>
      ))}
    </div>
  );
}

export const AllSizes: Story = {
  render: () => <ToggleSizesDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Muestra los diferentes tamaños disponibles para el Toggle.',
      },
    },
  },
};

function ToggleStatesByVariantAndSize() {
  const toggleSizes = {
    small: {
      width: 48,
      height: 28,
      padding: 4,
      circleSize: 20,
    },
    medium: {
      width: 48,
      height: 32,
      padding: 4,
      circleSize: 24,
    },
  };

  const [states, setStates] = useState<Record<string, boolean>>(
    variants.reduce<Record<string, boolean>>((acc, variant) => {
      return {
        ...acc,
        [`small-${variant}-disabled`]: false,
        [`small-${variant}-enabled`]: true,
        [`medium-${variant}-disabled`]: false,
        [`medium-${variant}-enabled`]: true,
      };
    }, {}),
  );

  const handleToggleChange = (key: string, value: boolean) => {
    setStates((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <h1
        style={{
          width: '245px',
          height: '108px',
          margin: '0 auto 32px 90px',
          fontSize: '72px',
          textAlign: 'center',
          color: '#333',
          fontWeight: '400',
          fontFamily: 'Poppins, sans-serif',
          lineHeight: '100%',
          letterSpacing: '0%',
        }}
      >
        Toggle
      </h1>
      <div
        style={{
          width: '550px',
          height: '648px',
          border: '1px dashed #d1d5db',
          borderRadius: '8px',
          padding: '24px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gap: '30px',
            width: '80%',
            justifyItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                display: 'grid',
                gap: '28px',
                justifyItems: 'center',
              }}
            >
              {variants.map((variant) => (
                <div
                  key={`small-${variant}-disabled`}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Toggle
                    id={`small-${variant}-disabled`}
                    size="small"
                    variant={variant}
                    checked={states[`small-${variant}-disabled`]}
                    onChange={(value) => {
                      handleToggleChange(`small-${variant}-disabled`, value);
                    }}
                    disabled
                    aria-label={`${variant} small disabled toggle`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div
              style={{
                display: 'grid',
                gap: '28px',
                justifyItems: 'center',
              }}
            >
              {variants.map((variant) => (
                <div
                  key={`small-${variant}-enabled`}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Toggle
                    id={`small-${variant}-enabled`}
                    size="small"
                    variant={variant}
                    checked={states[`small-${variant}-enabled`]}
                    onChange={(value) => {
                      handleToggleChange(`small-${variant}-enabled`, value);
                    }}
                    dimensions={toggleSizes.small}
                    aria-label={`${variant} small enabled toggle`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div
              style={{
                display: 'grid',
                gap: '24px',
                justifyItems: 'center',
              }}
            >
              {variants.map((variant) => (
                <div
                  key={`medium-${variant}-disabled`}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Toggle
                    id={`medium-${variant}-disabled`}
                    size="medium"
                    variant={variant}
                    checked={states[`medium-${variant}-disabled`]}
                    onChange={(value) => {
                      handleToggleChange(`medium-${variant}-disabled`, value);
                    }}
                    disabled
                    dimensions={toggleSizes.medium}
                    aria-label={`${variant} medium disabled toggle`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div
              style={{
                display: 'grid',
                gap: '24px',
                justifyItems: 'center',
              }}
            >
              {variants.map((variant) => (
                <div
                  key={`medium-${variant}-enabled`}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Toggle
                    id={`medium-${variant}-enabled`}
                    size="medium"
                    variant={variant}
                    checked={states[`medium-${variant}-enabled`]}
                    onChange={(value) => {
                      handleToggleChange(`medium-${variant}-enabled`, value);
                    }}
                    dimensions={toggleSizes.medium}
                    aria-label={`${variant} medium enabled toggle`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const TogglesByVariantAndState: Story = {
  render: () => <ToggleStatesByVariantAndSize />,
  parameters: {
    docs: {
      description: {
        story:
          'Muestra todas las variantes de Toggle organizadas por estado (habilitado/deshabilitado) y tamaño.',
      },
    },
  },
};

function InteractiveToggleDemo() {
  const [activeVariant, setActiveVariant] = useState<ToggleVariant>('primary');
  const [checked, setChecked] = useState(true);
  const [size, setSize] = useState<ToggleSize>('medium');
  const [disabled, setDisabled] = useState(false);

  return (
    <div
      style={{
        padding: '32px',
        maxWidth: '600px',
        backgroundColor: '#f9f9f9',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      }}
    >
      <h2 style={{ marginBottom: '24px', fontSize: '1.5rem' }}>Panel de control interactivo</h2>
      <div
        style={{
          marginBottom: '32px',
          padding: '24px',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.05)',
        }}
      >
        <Toggle
          variant={activeVariant}
          size={size}
          checked={checked}
          disabled={disabled}
          onChange={setChecked}
          aria-label="Interactive demo toggle"
        />
      </div>
      <div style={{ display: 'grid', gap: '24px' }}>
        <div>
          <h3 style={{ marginBottom: '12px', fontSize: '1.2rem' }}>Variante</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
              gap: '8px',
            }}
          >
            {variants.map((variant) => (
              <button
                key={variant}
                onClick={() => {
                  setActiveVariant(variant);
                }}
                style={{
                  padding: '8px',
                  border: variant === activeVariant ? '2px solid #007bff' : '1px solid #ccc',
                  borderRadius: '6px',
                  background: variant === activeVariant ? '#e6f2ff' : 'white',
                  cursor: 'pointer',
                  fontWeight: variant === activeVariant ? 'bold' : 'normal',
                }}
                aria-label={`Set ${variant} variant`}
              >
                {variant}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: '12px', fontSize: '1.2rem' }}>Tamaño</h3>
          <div style={{ display: 'flex', gap: '12px' }}>
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setSize(s);
                }}
                style={{
                  padding: '8px 16px',
                  border: s === size ? '2px solid #007bff' : '1px solid #ccc',
                  borderRadius: '6px',
                  background: s === size ? '#e6f2ff' : 'white',
                  cursor: 'pointer',
                  fontWeight: s === size ? 'bold' : 'normal',
                  flex: 1,
                }}
                aria-label={`Set ${s} size`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: '12px', fontSize: '1.2rem' }}>Estado</h3>
          <div
            style={{
              display: 'flex',
              gap: '24px',
              alignItems: 'center',
              backgroundColor: '#fff',
              padding: '16px',
              borderRadius: '6px',
            }}
          >
            <label
              htmlFor="disabled-toggle"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
            >
              <input
                id="disabled-toggle"
                type="checkbox"
                checked={disabled}
                onChange={(e) => {
                  setDisabled(e.target.checked);
                }}
                aria-checked={disabled}
              />
              Deshabilitado
            </label>
            <label
              htmlFor="checked-toggle"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
            >
              <input
                id="checked-toggle"
                type="checkbox"
                checked={checked}
                onChange={(e) => {
                  setChecked(e.target.checked);
                }}
                aria-checked={checked}
              />
              Activado
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export const InteractiveDemo: Story = {
  render: () => <InteractiveToggleDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Panel interactivo para probar todas las propiedades del Toggle en tiempo real.',
      },
    },
  },
};
