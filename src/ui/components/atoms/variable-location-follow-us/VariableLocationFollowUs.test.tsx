import { render, screen } from '@testing-library/react';
import VariableLocationFollowUs from './VariableLocationFollowUs';
import Ubicacion from '../../../../assets/icons/ubicacion.svg?raw';
import Facebook from '../../../../assets/icons/facebookk.svg?raw';

describe('Testing Share React Component', () => {
  test('should render Ubicacion', () => {
    render(<VariableLocationFollowUs iconlocation={Ubicacion} />);
    const labelElement = screen.getByText(/Ubicacion/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('should render icon for Ubicacion', () => {
    render(<VariableLocationFollowUs iconlocation={Ubicacion} />);
    const iconElement = screen.getByTestId('link-icon');
    expect(iconElement).toBeInTheDocument();
  });

  test('should render icon for Facebook', () => {
    render(<VariableLocationFollowUs iconfacebook={Facebook} />);
    const iconElement = screen.getByTestId('link_icon');
    expect(iconElement).toBeInTheDocument();
  });
});
