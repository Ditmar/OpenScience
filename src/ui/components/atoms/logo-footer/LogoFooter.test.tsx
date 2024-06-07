import { render, screen } from '@testing-library/react';
import logo from '../../../../assets/icons/logo.svg?raw';
import LogoFooter from './LogoFooter';

describe('Testing LogoFooter React Component', () => {
  test('should be rendere logo', () => {
    render(<LogoFooter icon={logo} />);
    const buttonElement = screen.getByTestId('logo_icon');
    expect(buttonElement).toBeInTheDocument();
  });
});
