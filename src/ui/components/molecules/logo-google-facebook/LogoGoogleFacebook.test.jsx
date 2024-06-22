// LogoGoogleFacebook.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import LogoGoogleFacebook from './LogoGoogleFacebook.tsx';
import GoogleIcon from '../../../../assets/icons/google.svg?raw';
import FacebookIcon from '../../../../assets/icons/facebook.svg?raw';
import LogoIcon from '../../../../assets/icons/logo.svg?raw';

describe('LogoGoogleFacebook Component', () => {
  it('should render logo and buttons', () => {
    render(
      <LogoGoogleFacebook
        googleIcon={GoogleIcon}
        facebookIcon={FacebookIcon}
        logoIcon={LogoIcon}
      />,
    );
    const googleButton = screen.getByText(/Google/i);
    const facebookButton = screen.getByText(/Facebook/i);
    const logoElement = screen.getByTestId('logo_icon');

    expect(googleButton).toBeInTheDocument();
    expect(facebookButton).toBeInTheDocument();
    expect(logoElement).toBeInTheDocument();
  });

  it('should handle Google login click', () => {
    const handleGoogleLogin = vi.mock();
    render(
      <LogoGoogleFacebook
        googleIcon={GoogleIcon}
        facebookIcon={FacebookIcon}
        logoIcon={LogoIcon}
        onGoogleLogin={handleGoogleLogin}
      />,
    );
    const googleButton = screen.getByText(/Google/i);
    fireEvent.click(googleButton);
    expect(handleGoogleLogin).toHaveBeenCalled();
  });

  it('should handle Facebook login click', () => {
    const handleFacebookLogin = vi.mock();
    render(
      <LogoGoogleFacebook
        googleIcon={GoogleIcon}
        facebookIcon={FacebookIcon}
        logoIcon={LogoIcon}
        onFacebookLogin={handleFacebookLogin}
      />,
    );
    const facebookButton = screen.getByText(/Facebook/i);
    fireEvent.click(facebookButton);
    expect(handleFacebookLogin).toHaveBeenCalled();
  });
});
