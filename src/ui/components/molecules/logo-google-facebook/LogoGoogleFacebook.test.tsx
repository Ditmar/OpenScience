import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from 'ui/components/atoms/logo/logo';
import SMButton from 'ui/components/atoms/social-media-button/Button';
import LogoGoogleFacebook from './LogoGoogleFacebook';
import Facebook from '../../../../assets/icons/facebook.svg?raw';
import Google from '../../../../assets/icons/google.svg?raw';
import image from '../../../../assets/icons/logo.svg';

const logoImage = image as unknown as string;

describe('LogoGoogleFacebook Component', () => {
  test('should render logo and buttons', () => {
    render(
      <LogoGoogleFacebook>
        <Logo src={logoImage} alt="Ingeniería de Sistemas" variant="primary" />
        <SMButton icon={Google} color="primary">
          Google
        </SMButton>
        <SMButton icon={Facebook} color="primary">
          Facebook
        </SMButton>
      </LogoGoogleFacebook>,
    );
    const logo = screen.getByAltText('Ingeniería de Sistemas');
    const googleButton = screen.getByText('Google');
    const facebookButton = screen.getByText('Facebook');

    expect(logo).toBeInTheDocument();
    expect(googleButton).toBeInTheDocument();
    expect(facebookButton).toBeInTheDocument();
  });
});
