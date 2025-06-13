import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import App from 'style-library/core/ThemeProvider';
import { ModeSwitcher } from 'style-library/core/ThemeSwitcher';
import GhostButton from './GhostButton';
import type { GhostButtonProps } from './types/IProps';

const meta: Meta<typeof GhostButton> = {
  title: 'Molecules/GhostButton',
  component: GhostButton,
  decorators: [
    (Story) => (
      <App>
        <div style={{ padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 24 }}>
            <ModeSwitcher />
          </div>
          <Story />
        </div>
      </App>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'dark', 'intenseviolet', 'violet', 'tertiary', 'green', 'red', 'yellow'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    iconLeft: { control: 'boolean' },
    iconRight: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof GhostButton>;

export const Primary: Story = {
  args: {
    label: 'Ghost Button',
    variant: 'tertiary',
    size: 'medium',
    disabled: false,
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Ghost Button with Icons',
    iconLeft: true,
    iconRight: true,
    variant: 'primary',
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Ghost Button',
    disabled: true,
    iconLeft: true,
    iconRight: true,
    variant: 'primary',
    size: 'medium',
  },
};

const variants: GhostButtonProps['variant'][] = [
  'primary',
  'dark',
  'intenseviolet',
  'violet',
  'tertiary',
  'green',
  'red',
  'yellow',
];

export const AllVariantssmall: Story = {
  render: () => (
    <>
      {variants.map((variant) => (
        <GhostButton
          key={variant}
          variant={variant}
          size="small"
          label="GhostButton variant"
          iconLeft
          iconRight
          style={{ margin: 8 }}
        />
      ))}
    </>
  ),
};

export const AllVariantsmedium: Story = {
  render: () => (
    <>
      {variants.map((variant) => (
        <GhostButton
          key={variant}
          variant={variant}
          size="medium"
          label="GhostButton variant"
          iconLeft
          iconRight
          style={{ margin: 8 }}
        />
      ))}
    </>
  ),
};

export const AllVariantslarge: Story = {
  render: () => (
    <>
      {variants.map((variant) => (
        <GhostButton
          key={variant}
          variant={variant}
          size="large"
          label="GhostButton variant"
          iconLeft
          iconRight
          style={{ margin: 8 }}
        />
      ))}
    </>
  ),
};
export const SizesWithIcons: Story = {
  render: () => (
    <>
      {(['small', 'medium', 'large'] as const).map((size) => (
        <GhostButton
          key={size}
          label={`Size ${size}`}
          variant="primary"
          size={size}
          iconLeft
          iconRight
          style={{ margin: 8 }}
        />
      ))}
    </>
  ),
};
