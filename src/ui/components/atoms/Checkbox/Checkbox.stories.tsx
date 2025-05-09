import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Checkbox from './Checkbox';
import type { IProps } from './types/Iprops';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/components/atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

const renderWithState = (args: IProps) => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return <Checkbox {...args} checked={checked} onChange={setChecked} />;
};

export const DefaultSquare: Story = {
  args: {
    variant: 'default',
    shape: 'square',
  },
  render: renderWithState,
};

export const SuccessSquare: Story = {
  args: {
    variant: 'success',
    shape: 'square',
  },
  render: renderWithState,
};

export const InfoSquare: Story = {
  args: {
    variant: 'info',
    shape: 'square',
  },
  render: renderWithState,
};

export const WarningSquare: Story = {
  args: {
    variant: 'warning',
    shape: 'square',
  },
  render: renderWithState,
};

export const PrimarySquare: Story = {
  args: {
    variant: 'primary',
    shape: 'square',
  },
  render: renderWithState,
};

export const SecondarySquare: Story = {
  args: {
    variant: 'secondary',
    shape: 'square',
  },
  render: renderWithState,
};

export const TertiarySquare: Story = {
  args: {
    variant: 'tertiary',
    shape: 'square',
  },
  render: renderWithState,
};

export const TextMainSquare: Story = {
  args: {
    variant: 'text-main',
    shape: 'square',
  },
  render: renderWithState,
};

export const TextSecondarySquare: Story = {
  args: {
    variant: 'text-secondary',
    shape: 'square',
  },
  render: renderWithState,
};

export const TextMainHoverSquare: Story = {
  args: {
    variant: 'text-main-hover',
    shape: 'square',
  },
  render: renderWithState,
};

export const BackgroundMainSquare: Story = {
  args: {
    variant: 'background-main',
    shape: 'square',
  },
  render: renderWithState,
};

export const ColorMainSquare: Story = {
  args: {
    variant: 'color-main',
    shape: 'square',
  },
  render: renderWithState,
};

export const TextMainAlphaSquare: Story = {
  args: {
    variant: 'text-main-alpha',
    shape: 'square',
  },
  render: renderWithState,
};

export const BackgroundDesktopSquare: Story = {
  args: {
    variant: 'background-desktop',
    shape: 'square',
  },
  render: renderWithState,
};

export const TextInputSquare: Story = {
  args: {
    variant: 'text-input',
    shape: 'square',
  },
  render: renderWithState,
};

export const DisabledSquare: Story = {
  args: {
    variant: 'default',
    shape: 'square',
    disabled: true,
  },
  render: renderWithState,
};

export const DefaultCircle: Story = {
  args: {
    variant: 'default',
    shape: 'circle',
  },
  render: renderWithState,
};

export const SuccessCircle: Story = {
  args: {
    variant: 'success',
    shape: 'circle',
  },
  render: renderWithState,
};

export const InfoCircle: Story = {
  args: {
    variant: 'info',
    shape: 'circle',
  },
  render: renderWithState,
};

export const WarningCircle: Story = {
  args: {
    variant: 'warning',
    shape: 'circle',
  },
  render: renderWithState,
};

export const DangerCircle: Story = {
  args: {
    variant: 'danger',
    shape: 'circle',
  },
  render: renderWithState,
};

export const PrimaryCircle: Story = {
  args: {
    variant: 'primary',
    shape: 'circle',
  },
  render: renderWithState,
};

export const SecondaryCircle: Story = {
  args: {
    variant: 'secondary',
    shape: 'circle',
  },
  render: renderWithState,
};

export const TertiaryCircle: Story = {
  args: {
    variant: 'tertiary',
    shape: 'circle',
  },
  render: renderWithState,
};

export const TextMainCircle: Story = {
  args: {
    variant: 'text-main',
    shape: 'circle',
  },
  render: renderWithState,
};

export const TextSecondaryCircle: Story = {
  args: {
    variant: 'text-secondary',
    shape: 'circle',
  },
  render: renderWithState,
};

export const TextMainHoverCircle: Story = {
  args: {
    variant: 'text-main-hover',
    shape: 'circle',
  },
  render: renderWithState,
};

export const BackgroundMainCircle: Story = {
  args: {
    variant: 'background-main',
    shape: 'circle',
  },
  render: renderWithState,
};

export const ColorMainCircle: Story = {
  args: {
    variant: 'color-main',
    shape: 'circle',
  },
  render: renderWithState,
};

export const TextMainAlphaCircle: Story = {
  args: {
    variant: 'text-main-alpha',
    shape: 'circle',
  },
  render: renderWithState,
};

export const BackgroundDesktopCircle: Story = {
  args: {
    variant: 'background-desktop',
    shape: 'circle',
  },
  render: renderWithState,
};

export const TextInputCircle: Story = {
  args: {
    variant: 'text-input',
    shape: 'circle',
  },
  render: renderWithState,
};

export const DisabledCircle: Story = {
  args: {
    variant: 'default',
    shape: 'circle',
    disabled: true,
  },
  render: renderWithState,
};