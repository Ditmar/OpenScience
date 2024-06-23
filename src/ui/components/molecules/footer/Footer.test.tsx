import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import LogoFooter from '../../atoms/logo-footer/LogoFooter';
import logo from '../../../../assets/icons/logo.svg?raw';

describe('Footer Component', () => {
  test('should render Logo Footer', () => {
    render(
      <Footer>
        <LogoFooter color="primary" icon={logo} />
      </Footer>,
    );

    const logoFooter = screen.getByTestId('logo_icon');
    expect(logoFooter).toBeInTheDocument();
  });
});
