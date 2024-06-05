import { render, screen } from '@testing-library/react';
import VariableLocationFollowUs from './VariableLocationFollowUs';
import Ubicacion from '../../../../assets/icons/ubicacion.svg?raw';
import Facebook from '../../../../assets/icons/facebookk.svg?raw';

describe('Testing Share React Component', () => {
  test('should render Ubicacion', () => {
    render(<VariableLocationFollowUs icon={Ubicacion} label="UBICACION" />);
    const labelElement = screen.getByText(/Ubicacion/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('should render icon for Ubicacion', () => {
    render(<VariableLocationFollowUs icon={Ubicacion} label="UBICACION" />);
    const iconElement = screen.getByTestId('link-icon');
    expect(iconElement).toBeInTheDocument();
  });

  test('should render Facebook', () => {
    render(<VariableLocationFollowUs icon={Facebook} label="FACEBOOK" />);
    const labelElement = screen.getByText(/Facebook/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('should render icon for Facebook', () => {
    render(<VariableLocationFollowUs icon={Facebook} label="FACEBOOk" />);
    const iconElement = screen.getByTestId('link-icon');
    expect(iconElement).toBeInTheDocument();
  });
});
