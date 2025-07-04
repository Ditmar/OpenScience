import type { Meta, StoryObj } from '@storybook/react';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import { IconMui } from './IconMui';
import type { IProps } from './types/IProps';

const commonProps: Partial<IProps> = {
  iconName: LanguageSharpIcon,
};

const meta = {
  title: 'ui/components/atoms/icon-mui',
  component: IconMui,
  args: {
    ...commonProps,
  },
} as Meta<typeof IconMui>;

export default meta;

type Story = StoryObj<typeof IconMui>;

export const Default: Story = {
  args: {
    ...commonProps,
  },
};

export const Error: Story = {
  args: {
    ...commonProps,
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    ...commonProps,
    disabled: true,
  },
};
