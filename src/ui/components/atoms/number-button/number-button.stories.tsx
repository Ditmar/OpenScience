import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import NumberButton from './number-button';

const meta: Meta<typeof NumberButton> = {
  title: 'Components/NumberButton',
  component: NumberButton,
};

export default meta;

const Template: StoryFn<any> = (args) => <NumberButton {...args} />;

export const Filled = Template.bind({});
Filled.args = { number: 1, variant: 'filled' };

export const Outline = Template.bind({});
Outline.args = { number: 2, variant: 'outline' };

export const Ghost = Template.bind({});
Ghost.args = { number: 3, variant: 'ghost' };

export const Selected = Template.bind({});
Selected.args = { number: 4, selected: true };

export const Disabled = Template.bind({});
Disabled.args = { number: 5, disabled: true };
