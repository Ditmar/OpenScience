import { render, screen } from '@testing-library/react';
import Whatsapp from '../../../../assets/icons/whatsapp.svg?raw';
import Facebook from '../../../../assets/icons/facebook1.svg?raw';
import Telegram from '../../../../assets/icons/telegram.svg?raw';
import IconButton from './IconButton';

describe('Testing IconButton React Component', () => {
  test('should be rendere Whatsapp', () => {
    render(<IconButton icon={Whatsapp} />);
    const buttonElement = screen.getByTestId('button__icon');
    expect(buttonElement).toBeInTheDocument();
  });

  test('should be rendere Telegram', () => {
    render(<IconButton icon={Telegram} />);
    const buttonElement = screen.getByTestId('button__icon');
    expect(buttonElement).toBeInTheDocument();
  });

  test('should be rendere Facebook', () => {
    render(<IconButton icon={Facebook} />);
    const buttonElement = screen.getByTestId('button__icon');
    expect(buttonElement).toBeInTheDocument();
  });
});
