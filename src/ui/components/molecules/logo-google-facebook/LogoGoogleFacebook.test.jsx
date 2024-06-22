import React from 'react';
import { render, screen } from '@testing-library/react';
import LogoGoogleFacebook from './LogoGoogleFacebook.tsx';
import Logo from 'ui/components/atoms/logo/logo.tsx';
import SMButton from 'ui/components/atoms/social-media-button/Button';
import Facebook from '../../../../assets/icons/facebook.svg?raw';
import Google from '../../../../assets/icons/google.svg?raw';

describe('LogoGoogleFacebook Component', () => {
  test('should render logo and buttons', () => {
    render(
      <LogoGoogleFacebook>
        <Logo variant='primary'/>
        <SMButton icon={Google} />
        <SMButton icon={Facebook} />
      </LogoGoogleFacebook>
    );
    const logo = screen.getByTestId('logo');
    const SMButton = screen.getByTestId('Google');
    const SMButton = screen.getByTestId('Facebook');
  
    expect(logo).toBeInTheDocument();
    expect(SMButton).toBeInTheDocument();
    expect(SMButton).toBeInTheDocument();
  });
});
