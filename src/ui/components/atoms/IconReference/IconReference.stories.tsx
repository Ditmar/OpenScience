import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import IconReference from './IconReference';
import type { IconReferenceProps } from './types/IProps';

const meta: Meta<typeof IconReference> = {
  title: 'ui/components/atoms/IconReference',
  component: IconReference,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: { type: 'select' },
      options: ['inherit', 'primary', 'secondary', 'action', 'disabled', 'error'],
    },
    sx: { table: { disable: true } },
    className: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<IconReferenceProps>;

export const AllVariants: Story = {
  render: () => {
    const sizes: NonNullable<IconReferenceProps['size']>[] = ['small', 'medium', 'large'];
    const colors: NonNullable<IconReferenceProps['color']>[] = [
      'inherit',
      'primary',
      'secondary',
      'action',
      'disabled',
      'error',
    ];

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
        {sizes.map((size) =>
          colors.map((color) => (
            <div
              key={`${size}-${color}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 80,
              }}
            >
              <IconReference size={size} color={color} aria-label={`R-${size}-${color}`} />
              <small style={{ textAlign: 'center', marginTop: 4 }}>
                {size} / {color}
              </small>
            </div>
          )),
        )}
      </div>
    );
  },
};

export const MediumPrimary: Story = {
  args: {
    size: 'medium',
    color: 'primary',
  },
};

export const LargeError: Story = {
  args: {
    size: 'large',
    color: 'error',
  },
};

export const SmallSecondary: Story = {
  args: {
    size: 'small',
    color: 'secondary',
  },
};
