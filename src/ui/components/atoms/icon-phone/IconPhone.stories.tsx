/* eslint-disable react/function-component-definition */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PhoneNumber from './IconPhone';
import type { PhoneNumberProps } from './types/IProps';

const meta: Meta<PhoneNumberProps> = {
  title: 'ui/Components/Atoms/IconPhone',
  component: PhoneNumber,
  argTypes: {
    fontSizeClass: {
      control: { type: 'select' },
      options: ['font-size-14', 'font-size-16', 'font-size-18', 'font-size-20'],
    },
    colorClass: {
      control: { type: 'select' },
      options: ['color-dark', 'color-gray'],
    },
    fontWeightClass: {
      control: { type: 'select' },
      options: ['font-weight-300', 'font-weight-400'],
    },
    text: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<PhoneNumberProps>;

export const Default: Story = {
  render: (args) => (
    <PhoneNumber
      text={args.text}
      fontSizeClass={args.fontSizeClass}
      colorClass={args.colorClass}
      fontWeightClass={args.fontWeightClass}
    />
  ),
  args: {
    text: 'Phone Number',
    fontSizeClass: 'font-size-16',
    colorClass: 'color-dark',
    fontWeightClass: 'font-weight-400',
  },
};

export const Variations: Story = {
  render: (args) => (
    <PhoneNumber
      text={args.text}
      fontSizeClass={args.fontSizeClass}
      colorClass={args.colorClass}
      fontWeightClass={args.fontWeightClass}
    />
  ),
  args: {
    text: 'Phone Number',
    fontSizeClass: 'font-size-16',
    colorClass: 'color-gray',
    fontWeightClass: 'font-weight-300',
  },
};
