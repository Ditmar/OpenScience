import { render, screen } from '@testing-library/react';
import Facebook from '../../../../assets/icons/facebook.svg?raw';
import Telegram from '../../../../assets/icons/telegram.svg?raw';
import Whatsapp from '../../../../assets/icons/whatsappp.svg?raw';
import Share from './Share.tsx';

describe('Testing Share React Component', () => {
  test('should be rendere Whatsapp', () => {
    render(<Share icon={Whatsapp} />);
    const iconElement = screen.getByTestId('icon').querySelector('svg');
    expect(iconElement).toBeInTheDocument();
  });
  test('should be rendere Telegrm', () => {
    render(<Share icon1={Telegram} />);
    const iconElement = screen.getByTestId('icon1').querySelector('svg');
    expect(iconElement).toBeInTheDocument();
  });
  test('should be rendere Facebook', () => {
    render(<Share icon2={Facebook} />);
    const iconElement = screen.getByTestId('icon2').querySelector('svg');
    expect(iconElement).toBeInTheDocument();
  });
});
