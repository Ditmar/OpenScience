import React from 'react';
import { render, screen } from '@testing-library/react';
import LogoLocationLinkfb from './LogoLocationLinkfb';
import LogoFooter from '../../atoms/logo-footer/LogoFooter';
import logo from '../../../../assets/icons/logo.svg?raw';

describe('LogoLocationLinkfb Component', () => {
  test('should render Logo Footer', () => {
    render(
      <LogoLocationLinkfb>
        <LogoFooter color="primary" icon={logo} />
      </LogoLocationLinkfb>,
    );

    const logoFooter = screen.getByTestId('logo_icon');
    expect(logoFooter).toBeInTheDocument();
  });
});
