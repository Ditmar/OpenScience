import type { StoryObj, Meta } from'@storybook/react';
import Logo from './logo';
import '../../../../globals/_variables.scss';
import logoImage from '../../../../assets/icons/logo.svg';

const meta: Meta<typeof Logo> = {
  title: 'ui/components/atoms/logo',
  component: Logo,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: logoImage,
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    src: logoImage,
    variant: 'primary',
  },
};
export const Secondary: Story = {
  args: {
    src: logoImage,
    variant: 'secondary',
  },
};
