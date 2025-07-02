import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import IconPdf from './IconPdf';
import type { IconPdfProps } from './types/IProps';

const meta: Meta<typeof IconPdf> = {
  title: 'ui/components/atoms/IconPdf',
  component: IconPdf,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: { type: 'select' },
      options: ['inherit', 'primary', 'secondary', 'action', 'disabled', 'error'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['filled', 'outlined', 'rounded', 'twoTone', 'sharp'],
    },
    sx: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<IconPdfProps>;

export const AllVariants: Story = {
  render: () => {
    const sizes: NonNullable<IconPdfProps['size']>[] = ['small', 'medium', 'large'];
    const colors: NonNullable<IconPdfProps['color']>[] = [
      'inherit',
      'primary',
      'secondary',
      'action',
      'disabled',
      'error',
    ];
    const variants: NonNullable<IconPdfProps['variant']>[] = [
      'filled',
      'outlined',
      'rounded',
      'twoTone',
      'sharp',
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {variants.map((variant) => (
          <div key={variant}>
            <h4 style={{ margin: '8px 0' }}>Variant: {variant}</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              {sizes.map((size) =>
                colors.map((color) => (
                  <div
                    key={`${variant}-${size}-${color}`}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      width: 80,
                    }}
                  >
                    <IconPdf
                      variant={variant}
                      size={size}
                      color={color}
                      aria-label={`${variant}-${size}-${color}`}
                    />
                    <small style={{ textAlign: 'center', marginTop: 4 }}>
                      {size} / {color}
                    </small>
                  </div>
                )),
              )}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const FilledPrimary: Story = {
  args: {
    variant: 'filled',
    size: 'medium',
    color: 'primary',
  },
};

export const OutlinedErrorLarge: Story = {
  args: {
    variant: 'outlined',
    size: 'large',
    color: 'error',
  },
};

export const RoundedSecondarySmall: Story = {
  args: {
    variant: 'rounded',
    size: 'small',
    color: 'secondary',
  },
};

export const TwoToneDisabledMedium: Story = {
  args: {
    variant: 'twoTone',
    size: 'medium',
    color: 'disabled',
  },
};

export const SharpActionLarge: Story = {
  args: {
    variant: 'sharp',
    size: 'large',
    color: 'action',
  },
};
