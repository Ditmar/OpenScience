import type { StoryObj, Meta } from '@storybook/react';
import LogoGoogleFacebook from './LogoGoogleFacebook';
import GoogleIcon from '../../../../assets/icons/google.svg?raw';
import FacebookIcon from '../../../../assets/icons/facebook.svg?raw';
import LogoIcon from '../../../../assets/icons/logo.svg?raw';

const meta: Meta<typeof LogoGoogleFacebook> = {
  title: 'ui/components/molecules/logo-google-facebook',
  component: LogoGoogleFacebook,
  argTypes: {
    onGoogleLogin: {
      action: 'google login clicked',
    },
    onFacebookLogin: {
      action: 'facebook login clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    googleIcon: GoogleIcon,
    facebookIcon: FacebookIcon,
    logoIcon: LogoIcon,
  },
};
