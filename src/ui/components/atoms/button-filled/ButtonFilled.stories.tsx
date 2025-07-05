import type { Meta, StoryObj } from '@storybook/react';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { ButtonFilled } from './ButtonFilled';
import type { IProps } from './types/IProps';

const commonProps: Partial<IProps> = {
  text: 'Button text',
};

const meta = {
  title: 'ui/components/atoms/button-filled',
  component: ButtonFilled,
  args: {
    ...commonProps,
  },
  argTypes: {
    startIcon: { control: false },
    endIcon: { control: false },
  },
} as Meta<typeof ButtonFilled>;

export default meta;

type Story = StoryObj<typeof ButtonFilled>;

export const Empty: Story = {
  args: {
    ...commonProps,
  },
};

export const WithIcons: Story = {
  args: {
    ...commonProps,
    startIcon: <CancelOutlinedIcon />,
    endIcon: <CancelOutlinedIcon />,
  },
};

export const LeftIcon: Story = {
  args: {
    ...commonProps,
    startIcon: <CancelOutlinedIcon />,
  },
};

export const RightIcon: Story = {
  args: {
    ...commonProps,
    endIcon: <CancelOutlinedIcon />,
  },
};

export const Default: Story = {
  args: {
    ...commonProps,
    buttonVariant: 'default',
    startIcon: <CancelOutlinedIcon />,
    endIcon: <CancelOutlinedIcon />,
  },
};

export const Ghost: Story = {
  args: {
    ...commonProps,
    buttonVariant: 'ghost',
    startIcon: <CancelOutlinedIcon />,
    endIcon: <CancelOutlinedIcon />,
  },
};

export const Light: Story = {
  args: {
    ...commonProps,
    buttonVariant: 'light',
    startIcon: <CancelOutlinedIcon />,
    endIcon: <CancelOutlinedIcon />,
  },
};

export const Soft: Story = {
  args: {
    ...commonProps,
    buttonVariant: 'soft',
    startIcon: <CancelOutlinedIcon />,
    endIcon: <CancelOutlinedIcon />,
  },
};

export const Outline: Story = {
  args: {
    ...commonProps,
    buttonVariant: 'outline',
    startIcon: <CancelOutlinedIcon />,
    endIcon: <CancelOutlinedIcon />,
  },
};
