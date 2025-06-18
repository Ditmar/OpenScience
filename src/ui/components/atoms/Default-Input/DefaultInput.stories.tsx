import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DefaultInput } from './DefaultInput';

const meta: Meta<typeof DefaultInput> = {
  title: 'Atoms/DefaultInput',
  component: DefaultInput,
};

export default meta;

type Story = StoryObj<typeof DefaultInput>;

function VariantContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3px',
        width: '330px',
        marginBottom: '16px',
      }}
    >
      {children}
    </div>
  );
}

const createVariants = ({
  label,
  placeholder,
  hint,
  error,
  value,
  disabled,
}: React.ComponentProps<typeof DefaultInput>) => (
  <>
    <DefaultInput
      label={label}
      placeholder={placeholder}
      hint={hint}
      error={error}
      value={value}
      disabled={disabled}
      className="sharp-corners"
    />
    <DefaultInput
      label={label}
      placeholder={placeholder}
      hint={hint}
      error={error}
      value={value}
      disabled={disabled}
      className="rounded-corners"
    />
    <DefaultInput
      label={label}
      placeholder={placeholder}
      hint={hint}
      error={error}
      value={value}
      disabled={disabled}
      className="pill-shape"
    />
  </>
);

export const Default: Story = {
  render: () => (
    <VariantContainer>
      {createVariants({
        label: 'Email Address',
        placeholder: 'Input Text',
        hint: 'Hint Text',
      })}
    </VariantContainer>
  ),
};

export const Focus: Story = {
  parameters: { pseudo: { focus: true } },
  render: () => (
    <VariantContainer>
      {createVariants({
        label: 'Email Address',
        placeholder: 'Input Text',
        hint: 'Hint Text',
      })}
    </VariantContainer>
  ),
};

export const Filled: Story = {
  render: () => (
    <VariantContainer>
      {createVariants({
        label: 'Email Address',
        value: 'Input Text',
        placeholder: 'Input Text',
        hint: 'Hint Text',
      })}
    </VariantContainer>
  ),
};

export const Error: Story = {
  render: () => (
    <VariantContainer>
      {createVariants({
        label: 'Email Address',
        placeholder: 'Input Text',
        error: 'Hint Text',
      })}
    </VariantContainer>
  ),
};

export const Disabled: Story = {
  render: () => (
    <VariantContainer>
      {createVariants({
        label: 'Email Address',
        placeholder: 'Input Text',
        disabled: true,
        hint: 'Hint Text',
      })}
    </VariantContainer>
  ),
};
