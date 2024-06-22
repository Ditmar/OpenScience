import type { StoryObj, Meta } from '@storybook/react';
import Logo from 'ui/components/atoms/logo/logo';
import SMButton from 'ui/components/atoms/social-media-button/Button';
import LogoGoogleFacebook from './LogoGoogleFacebook';
import Facebook from '../../../../assets/icons/facebook.svg?raw';
import Google from '../../../../assets/icons/google.svg?raw';

const meta: Meta<typeof LogoGoogleFacebook> = {
  title: 'ui/components/molecules/logo-google-facebook',
  component: LogoGoogleFacebook,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
};

export default meta;

type Story = StoryObj<typeof LogoGoogleFacebook>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <Logo src="logoImage" variant="default" />
        <SMButton icon={Google} color="primary">
          Google
        </SMButton>
        <SMButton icon={Facebook} color="secondary">
          Facebook
        </SMButton>
      </>
    ),
  },
};
