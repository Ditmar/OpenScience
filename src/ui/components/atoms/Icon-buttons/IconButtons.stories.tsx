import React from 'react';
import IconButton from './IconButtons';
import type { IconButtonProps } from './IconButtons'; // Importación de tipo
import type { Meta, StoryObj } from '@storybook/react'; // Cambiar Story a StoryFn
import icon1 from '../../assets/icons/icon1.svg';

const meta: Meta = {
  title: 'Components/IconButton',
  component: IconButton,
};

export default meta;

const Template: StoryObj<IconButtonProps> = (args) => <IconButton {...args} />; // Cambiar Story a StoryFn

export const Default = Template.bind({});
Default.args = {
  icon: icon1,
  size: 'md',
  shape: 'rounded',
  color: 'neutral',
  ariaLabel: 'Default button',
};

export const LargeCircleBrand = Template.bind({});
LargeCircleBrand.args = {
  icon: icon1,
  size: 'lg',
  shape: 'circle',
  color: 'brand',
  ariaLabel: 'Large circle brand button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: icon1,
  size: 'sm',
  shape: 'square',
  color: 'feedback',
  ariaLabel: 'Disabled button',
  disabled: true,
};
