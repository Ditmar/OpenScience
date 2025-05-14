import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DefaultInput } from './DefaultInput';

const meta: Meta<typeof DefaultInput> = {
  title: 'Components/DefaultInput',
  component: DefaultInput,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof DefaultInput>;

function InputTriad(args: React.ComponentProps<typeof DefaultInput>) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '330px' }}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <DefaultInput {...args} className="sharp-corners" />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <DefaultInput {...args} className="rounded-corners" />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <DefaultInput {...args} className="pill-shape" />
    </div>
  );
}

export const Default: Story = {
  render: () => <InputTriad label="Email Address" placeholder="Input Text" hint="Hint Text" />,
};

export const WithHint: Story = {
  render: () => <InputTriad label="Email Address" placeholder="Input Text" hint="Hint Text" />,
};

export const WithError: Story = {
  render: () => <InputTriad label="Email Address" placeholder="Input Text" error="Error Text" />,
};

export const Disabled: Story = {
  render: () => <InputTriad label="Email Address" value="Input Text" disabled hint="Hint Text" />,
};

export const WithIcons: Story = {
  render: () => <InputTriad label="Email Address" placeholder="Input Text" hint="Hint Text" />,
};
