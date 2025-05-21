import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CloseIcon from '@mui/icons-material/Close';
import type { IIconButtonProps } from './types/Iprops';
import IconButton from './IconButtons';
import '../../../../globals/size.scss';

const meta: Meta<IIconButtonProps> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'padded',
  },

  args: {
    icon: <CloseIcon />,
    ariaLabel: 'Action',
    size: 'md',
    shape: 'square',
    color: 'neutral',
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Brand: Story = {
  args: {
    color: 'brand',
    ariaLabel: 'Brand Action',
  },
};

export const Feedback: Story = {
  args: {
    color: 'feedback',
    ariaLabel: 'Feedback Action',
  },
};

export const Rounded: Story = {
  args: {
    shape: 'rounded',
    ariaLabel: 'Rounded Action',
  },
};

export const Circle: Story = {
  args: {
    shape: 'circle',
    color: 'brand',
    ariaLabel: 'Circle Action',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    ariaLabel: 'Small Action',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    ariaLabel: 'Large Action',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    ariaLabel: 'Disabled Action',
  },
};
