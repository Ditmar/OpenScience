import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DefaultInput } from './DefaultInput';

const meta: Meta<typeof DefaultInput> = {
  title: 'Components/DefaultInput',
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
    placeholder: 'Input Text',
    hint: 'Hint Text',
    value: 'example@gmail.com',
  },
  render: (args) => renderVariants(args),
};

export const Error: Story = {
  args: {
    placeholder: 'Input Text',
    error: 'Invalid email address',
  },
  render: (args) => renderVariants(args),
};

export const Disabled: Story = {
  args: {
    placeholder: 'Input Text',
    hint: 'Hint Text',
    disabled: true,
  },
  render: (args) => renderVariants(args),
};
