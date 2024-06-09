import type { StoryObj, Meta } from '@storybook/react';
import '../../../../globals/_variables.scss';
import logo from '../../../../assets/icons/logo.svg?raw';
import LogoFooter from './LogoFooter';

const meta: Meta<typeof LogoFooter> = {
  title: 'ui/components/atoms/logo-footer',
  component: LogoFooter,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: logo,
    color: 'primary',
  },
};

export const Secundary: Story = {
  args: {
    icon: logo,
    color: 'secondary',
  },
};
