import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DefaultInput } from './DefaultInput';

const meta: Meta<typeof DefaultInput> = {
  title: 'Molecule/DefaultInput',
  component: DefaultInput,
  argTypes: {
    shape: { table: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<typeof DefaultInput>;

const renderVariants = (args: Partial<React.ComponentProps<typeof DefaultInput>>) => (
  <Stack spacing={4}>
    {(['square', 'rounded', 'pill'] as const).map((shape) => (
      <Stack key={shape} spacing={1}>
        <Typography variant="subtitle1" fontWeight="bold">
          Email Address
        </Typography>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <DefaultInput {...args} shape={shape} />
      </Stack>
    ))}
  </Stack>
);

export const Default: Story = {
  args: {
    placeholder: 'Input Text',
    hint: 'Hint Text',
  },
  render: (args) => renderVariants(args),
};

export const Focus: Story = {
  args: {
    placeholder: 'Input Text',
    autoFocus: true,
  },
  render: (args) => renderVariants(args),
};

export const Filled: Story = {
  args: {
    value: 'example@gmail.com',
    hint: 'Hint Text',
  },
  render: (args) => renderVariants(args),
};

export const Error: Story = {
  args: {
    error: 'Invalid email address',
  },
  render: (args) => renderVariants(args),
};

export const Disabled: Story = {
  args: {
    hint: 'Hint Text',
    disabled: true,
  },
  render: (args) => renderVariants(args),
};
