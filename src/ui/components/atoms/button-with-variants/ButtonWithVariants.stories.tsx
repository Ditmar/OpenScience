import type { StoryObj, Meta } from '@storybook/react';
import ButtonWithVariants from './ButtonWithVariants';


const meta = {
title: 'ui/components/atoms/ButtonWithVariants',
component: ButtonWithVariants,
argTypes: {
  onClick: {
    action: 'click',
  },
},
} as Meta<typeof ButtonWithVariants>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default:  Story = {
  args: {
  icon: 'ABRIR IMAGEN',
  size: 'medium',
  color: 'default',
  },
};

export const Primary:  Story = {
  args: {
  icon: 'ABRIR IMAGEN',
  size: 'medium',
  color: 'primary',
  },
};

export const Secondary:  Story = {
  args: {
  icon: 'ABRIR IMAGEN',
  size: 'medium',
  color: 'secondary',
  },
};

export const Large:  Story = {
  args: {
  icon: 'ABRIR IMAGEN',
  size: 'large',
  color: 'default',
  },
};

export const Small:  Story = {
  args: {
  icon: 'ABRIR IMAGEN',
  size: 'small',
  color: 'default',
  },
};

export const Disabled:  Story = {
args: {
  
  icon: 'ABRIR IMAGEN',
  size: 'medium',
  color: 'default',
  disabled: true,
  },
};
