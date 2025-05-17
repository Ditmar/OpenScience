import type { StoryObj, Meta } from '@storybook/react';
import PhoneInput from './phoneinput';

const meta: Meta<typeof PhoneInput> = {
  title: 'Atoms/PhoneInput',
  component: PhoneInput,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'focus', 'error', 'disabled'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    borderRadius: {
      control: 'select',
      options: ['none', 'small', 'full'],
    },
    countryCode: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '1234567890',
    variant: 'default',
    label: 'Teléfono',
    hintText: 'Ingresa tu número móvil',
  },
};

export const Focus: Story = {
  args: {
    value: '1234567890',
    variant: 'focus',
    label: 'Teléfono',
    hintText: 'Ingresa tu número móvil',
  },
};

export const ErrorState: Story = {
  args: {
    value: '',
    variant: 'error',
    hintText: 'Este campo es obligatorio',
  },
};

export const Disabled: Story = {
  args: {
    value: '1234567890',
    variant: 'disabled',
  },
};

export const WithCountryCode: Story = {
  args: {
    value: '77778888',
    countryCode: '+591',
    onCountryChange: (code) => {
      alert(`Código cambiado a: ${code}`);
    },
    label: 'Número de teléfono',
    hintText: 'Ej: 77778888',
    variant: 'default',
  },
};
