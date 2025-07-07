import type { Meta, StoryObj } from '@storybook/react';
import PhoneDropdown from './PhoneDropdown';

const meta: Meta<typeof PhoneDropdown> = {
  title: 'ui/Components/Organisms/PhoneDropdown',
  component: PhoneDropdown,
  argTypes: {
    iconText: { control: 'text' },
    hintText: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    borderRadius: {
      control: { type: 'select' },
      options: ['rounded', 'straight'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'focus', 'error', 'disabled'],
    },
    onClose: { action: 'closed' },
    onChange: { action: 'changed' },
    onCountrySelect: { action: 'countrySelected' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconText: 'Phone Number',
    hintText: 'Enter your phone number',
    size: 'medium',
    borderRadius: 'rounded',
    state: 'default',
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'large',
  },
};

export const WithCountryListProps: Story = {
  args: {
    ...Default.args,
    countryListProps: {
      maxHeight: '200px',
      showTitle: true,
      title: 'Select your country',
    },
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const ErrorState: Story = {
  args: {
    ...Default.args,
    state: 'error',
    hintText: 'Invalid phone number',
  },
};
