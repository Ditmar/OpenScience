import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import PhoneNumberInput from './NumberInput';
import type { PhoneNumberInputProps } from './types/IProps';

export default {
  title: 'ui/Components/Atoms/NumberInput',
  component: PhoneNumberInput,
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    borderRadius: { control: 'select', options: ['straight', 'rounded'] },
    state: { control: 'select', options: ['default', 'hover', 'focus', 'error', 'disabled'] },
  },
} as Meta<typeof PhoneNumberInput>;

function Template({ size, borderRadius, state }: PhoneNumberInputProps) {
  const [value, setValue] = useState('');

  return (
    <PhoneNumberInput
      size={size}
      borderRadius={borderRadius}
      state={state}
      value={value}
      onChange={setValue}
    />
  );
}

const StoryTemplate = Template as StoryFn<PhoneNumberInputProps>;

export const Default = StoryTemplate.bind({});
Default.args = {
  size: 'medium',
  borderRadius: 'rounded',
  state: 'default',
};

export const Small = StoryTemplate.bind({});
Small.args = {
  size: 'small',
  borderRadius: 'rounded',
  state: 'default',
};

export const Large = StoryTemplate.bind({});
Large.args = {
  size: 'large',
  borderRadius: 'rounded',
  state: 'default',
};

export const Straight = StoryTemplate.bind({});
Straight.args = {
  size: 'medium',
  borderRadius: 'straight',
  state: 'default',
};

export const Hover = StoryTemplate.bind({});
Hover.args = {
  size: 'medium',
  borderRadius: 'rounded',
  state: 'hover',
};

export const Focus = StoryTemplate.bind({});
Focus.args = {
  size: 'medium',
  borderRadius: 'rounded',
  state: 'focus',
};

export const Error = StoryTemplate.bind({});
Error.args = {
  size: 'medium',
  borderRadius: 'rounded',
  state: 'error',
};

export const Disabled = StoryTemplate.bind({});
Disabled.args = {
  size: 'medium',
  borderRadius: 'rounded',
  state: 'disabled',
};
